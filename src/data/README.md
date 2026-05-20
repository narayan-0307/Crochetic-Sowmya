# Dynamic Product Loading System

## Overview

This system automatically generates products and categories from your folder structure, eliminating the need for manual imports and hardcoded product arrays.

## Folder Structure

Organize your product images in this structure:

```
src/assets/products/
├── Flowers & Bouquets/
│   ├── Blue Small Lilly/
│   │   ├── 1.jpg
│   │   ├── 2.jpg
│   │   └── 3.jpg
│   ├── Rose/
│   │   ├── 1.jpg
│   │   └── 2.jpg
│   └── Tulip Bouquet/
│       └── 1.jpg
├── Keychain/
│   ├── Teddy Charm/
│   │   ├── 1.jpg
│   │   └── 2.jpg
│   └── Heart Keychain/
│       └── 1.jpg
├── Hair Accessories/
│   └── Scrunchie Set/
│       ├── 1.jpg
│       └── 2.jpg
└── Teddy/
    └── Bear Plushie/
        ├── 1.jpg
        ├── 2.jpg
        └── 3.jpg
```

### Naming Rules

- **Category folders**: Use your exact category names (e.g., "Flowers & Bouquets", "Keychain")
- **Product folders**: Use your exact product names (e.g., "Blue Small Lilly", "Teddy Charm")
- **Image files**: Number them (1.jpg, 2.jpg, 3.jpg) - they'll be sorted automatically

## How It Works

### 1. Automatic Product Generation

The system:

- Scans all images in `src/assets/products/**/*.{jpg,jpeg,png,webp}`
- Extracts category and product names from folder structure
- Generates slugs automatically (e.g., "Flowers & Bouquets" → "flowers-bouquets")
- Groups images by product
- Creates a unique ID for each product

### 2. Adding Product Metadata

Edit `src/data/productMeta.js` to add pricing, descriptions, and other details:

```javascript
export const productMeta = {
  // Key format: "category-slug/product-slug"
  "flowers-bouquets/blue-small-lilly": {
    price: 49.99,
    description: "A beautiful handcrafted bouquet with blue lilies",
    featured: true,
    bestseller: true,
    rating: 5.0,
    reviews: 18,
    inStock: true,
    tags: ["bouquet", "floral", "gift", "handmade"],
    colors: ["White", "Yellow", "Sky Blue", "Green"],
    sizes: ["Standard"],
  },
  "keychain/teddy-charm": {
    price: 14.99,
    description: "An adorable teddy keychain",
    featured: false,
    bestseller: true,
    // ... more metadata
  },
};
```

### 3. Finding Product Slugs

To find the correct slug for your product:

1. **Category slug**: Convert category name to lowercase, remove special chars, replace spaces with hyphens
   - "Flowers & Bouquets" → "flowers-bouquets"
   - "Hair Accessories" → "hair-accessories"
   - "Keychain" → "keychain"

2. **Product slug**: Same process for product name
   - "Blue Small Lilly" → "blue-small-lilly"
   - "Teddy Charm" → "teddy-charm"

3. **Combined key**: `"category-slug/product-slug"`
   - `"flowers-bouquets/blue-small-lilly"`
   - `"keychain/teddy-charm"`

### 4. Default Values

Products without metadata in `productMeta.js` will use these defaults:

```javascript
{
  price: 0,
  description: "Handcrafted crochet product made with love and care.",
  featured: false,
  bestseller: false,
  rating: 4.5,
  reviews: 0,
  inStock: true,
  tags: ["handmade", "crochet"],
  colors: [],
  sizes: [],
}
```

### 5. Category Descriptions

Customize category descriptions in `productMeta.js`:

```javascript
export const categoryDescriptions = {
  "flowers-bouquets": "Beautiful handcrafted floral bouquets for all occasions",
  keychain: "Adorable crochet keychains and charms for keys and bags",
  "hair-accessories": "Stylish crochet hair clips, scrunchies, and accessories",
  // Add more...
};
```

## Usage in Your React Components

### Import Products and Categories

```javascript
import { products, categories } from "./data/products";
```

### Use Helper Functions

```javascript
import {
  getProductsByCategory,
  getFeaturedProducts,
  getBestsellerProducts,
  getProductById,
  getProductBySlug,
  getCategoryBySlug,
  searchProducts,
} from "./data/products";

// Get all products in a category
const bouquets = getProductsByCategory("flowers-bouquets");

// Get featured products
const featured = getFeaturedProducts();

// Get bestsellers
const bestsellers = getBestsellerProducts();

// Get single product
const product = getProductById(1);
const productBySlug = getProductBySlug("blue-small-lilly");

// Get category
const category = getCategoryBySlug("keychain");

// Search products
const results = searchProducts("rose");
```

## Adding New Products

1. **Create folder structure**:

   ```
   src/assets/products/[Category Name]/[Product Name]/
   ```

2. **Add images**:

   ```
   1.jpg, 2.jpg, 3.jpg, etc.
   ```

3. **Add metadata** in `productMeta.js` (optional):

   ```javascript
   "category-slug/product-slug": {
     price: 29.99,
     description: "...",
     // ... more fields
   }
   ```

4. **Done!** - The product will appear automatically

## Adding New Categories

1. **Create category folder**:

   ```
   src/assets/products/[New Category Name]/
   ```

2. **Add products** inside it

3. **Add category description** in `productMeta.js` (optional):

   ```javascript
   export const categoryDescriptions = {
     "new-category-slug": "Description of the new category",
   };
   ```

4. **Done!** - The category will appear automatically with correct product count

## Production Build

The dynamic import system is fully optimized for production:

- ✅ **Eager loading**: All images are loaded at build time using `eager: true`
- ✅ **Tree-shaking**: Unused utilities are removed
- ✅ **Type-safe**: All exports are properly typed
- ✅ **Performance**: No runtime overhead, all processing happens at build time
- ✅ **Hot reload**: Changes to images reflect immediately in dev mode

## Benefits

- 🚀 **No manual imports** - Just drop images in folders
- 📁 **Organized structure** - Clear category/product hierarchy
- 🔄 **Auto-generated** - Products, categories, slugs, IDs all automatic
- 🎨 **Flexible metadata** - Add as much or as little detail as needed
- 🔍 **Built-in search** - Helper functions included
- ⚡ **Production-ready** - Optimized for Vite builds
- 🎯 **Easy to scale** - Add 100s of products without touching code

## Troubleshooting

### Products not showing up?

1. Check folder structure: `src/assets/products/[Category]/[Product]/[images]`
2. Check image extensions: `.jpg, .jpeg, .png, .webp` only
3. Check console for warnings about invalid paths

### Images not loading?

1. Make sure images are inside `src/assets/products/` folder
2. Clear browser cache and rebuild: `npm run dev`

### Metadata not applying?

1. Check slug format: `"category-slug/product-slug"`
2. Verify slug conversion (lowercase, no special chars, hyphens for spaces)
3. Check console logs for product keys when debugging

## Support

For questions or issues with this system, check:

- Console logs for warnings about invalid paths
- Product slugs in browser dev tools
- Generated products/categories arrays in React Dev Tools
