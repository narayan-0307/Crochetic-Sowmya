import { productMeta, defaultMeta, categoryDescriptions } from "./productMeta";

/**
 * Dynamically load all product images using Vite's import.meta.glob
 * Path pattern: src/assets/products/[Category]/[Product]/[images]
 */
const imageModules = import.meta.glob(
  "../assets/products/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
  },
);

/**
 * Utility: Convert text to slug format
 * Example: "Flowers & Bouquets" -> "flowers-bouquets"
 */
const toSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/[\s_-]+/g, "-") // Replace spaces with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};

/**
 * Utility: Parse folder structure from image path
 * Path format: ../assets/products/[Category]/[Product]/[image.jpg]
 */
const parseImagePath = (path) => {
  // Remove ../assets/products/ prefix
  const relativePath = path.replace("../assets/products/", "");
  const parts = relativePath.split("/");

  if (parts.length < 3) {
    console.warn(`Invalid image path structurerr: ${path}`);
    return null;
  }

  return {
    category: parts[0], // e.g., "Flowers & Bouquets"
    productName: parts[1], // e.g., "Blue Small Lilly"
    imageName: parts[2], // e.g., "1.jpg"
    fullPath: path,
  };
};

/**
 * Group images by category and product
 */
const groupImagesByProduct = () => {
  const productsMap = new Map();

  Object.entries(imageModules).forEach(([path, imageUrl]) => {
    const parsed = parseImagePath(path);
    if (!parsed) return;

    const { category, productName } = parsed;
    const categorySlug = toSlug(category);
    const productSlug = toSlug(productName);
    const productKey = `${categorySlug}/${productSlug}`;

    if (!productsMap.has(productKey)) {
      productsMap.set(productKey, {
        category,
        categorySlug,
        productName,
        productSlug,
        images: [],
      });
    }

    productsMap.get(productKey).images.push(imageUrl);
  });

  return productsMap;
};

/**
 * Generate products array with metadata
 */
const generateProducts = () => {
  const productsMap = groupImagesByProduct();
  const productsArray = [];
  let productId = 1;

  productsMap.forEach((productData, productKey) => {
    const { category, categorySlug, productName, productSlug, images } =
      productData;

    // Get metadata from productMeta.js or use defaults
    const meta = productMeta[productKey] || {};
    const merged = { ...defaultMeta, ...meta };

    // Sort images by filename (1.jpg, 2.jpg, etc.)
    const sortedImages = images.sort((a, b) => {
      const aNum = parseInt(a.match(/(\d+)\.\w+$/)?.[1] || "0");
      const bNum = parseInt(b.match(/(\d+)\.\w+$/)?.[1] || "0");
      return aNum - bNum;
    });

    productsArray.push({
      id: productId++,
      name: productName,
      slug: productSlug,
      category: categorySlug,
      categoryName: category,
      images: sortedImages,
      description: merged.description,
      price: merged.price,
      rating: merged.rating,
      reviews: merged.reviews,
      inStock: merged.inStock,
      featured: merged.featured,
      bestseller: merged.bestseller,
      tags: merged.tags,
      colors: merged.colors,
      sizes: merged.sizes,
    });
  });

  // Sort products: featured first, then by id
  return productsArray.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return a.id - b.id;
  });
};

/**
 * Generate categories array with product counts
 */
const generateCategories = () => {
  const categoryMap = new Map();

  // Collect all unique categories from products
  products.forEach((product) => {
    const { category, categoryName, images } = product;

    if (!categoryMap.has(category)) {
      categoryMap.set(category, {
        name: categoryName,
        slug: category,
        productCount: 0,
        image: null, // Will use first product image
      });
    }

    const cat = categoryMap.get(category);
    cat.productCount++;

    // Use first product's first image as category image
    if (!cat.image && images.length > 0) {
      cat.image = images[0];
    }
  });

  const categoriesArray = [];
  let categoryId = 1;

  categoryMap.forEach((categoryData, slug) => {
    categoriesArray.push({
      id: categoryId++,
      name: categoryData.name,
      slug: categoryData.slug,
      description:
        categoryDescriptions[slug] ||
        `Handcrafted ${categoryData.name.toLowerCase()} products`,
      image: categoryData.image,
      productCount: categoryData.productCount,
    });
  });

  // Sort alphabetically by name
  return categoriesArray.sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Export products and categories
 */
export const products = generateProducts();
export const categories = generateCategories();

/**
 * Utility functions for filtering and searching
 */

// Get products by category slug
export const getProductsByCategory = (categorySlug) => {
  return products.filter((product) => product.category === categorySlug);
};

// Get featured products
export const getFeaturedProducts = () => {
  return products.filter((product) => product.featured);
};

// Get bestseller products
export const getBestsellerProducts = () => {
  return products.filter((product) => product.bestseller);
};

// Get product by ID
export const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

// Get product by slug
export const getProductBySlug = (slug) => {
  return products.find((product) => product.slug === slug);
};

// Get category by slug
export const getCategoryBySlug = (slug) => {
  return categories.find((category) => category.slug === slug);
};

// Search products by name or tags
export const searchProducts = (query) => {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowerQuery) ||
      product.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      product.description.toLowerCase().includes(lowerQuery),
  );
};
