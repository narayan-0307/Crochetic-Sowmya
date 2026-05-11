import { motion } from "framer-motion";
import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  icon,
  fullWidth = false,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`button button-${variant} button-${size} ${fullWidth ? "button-full-width" : ""} ${className}`}
      {...props}
    >
      {children}
      {icon && icon}
    </motion.button>
  );
};

export default Button;
