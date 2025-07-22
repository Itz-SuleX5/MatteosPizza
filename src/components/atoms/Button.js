import React from "react";
import { cn } from "../../utils/classNames";
import{ motion } from "framer-motion";
const Button = ({ children, className = "", ...props}) => (
    <motion.button type="button" whileHover={{scale: 1.1, rotate: -1}} whileTap={{rotate: 3}} transition={{duration:0.3}}
        className={cn(
            "text-white bg-red-500 rounded-md px-4 py-2 hover:bg-red-600 disabled:bg-red-300",
            className
        )}
        {...props}
    >
        {children}
    </motion.button>
);

export default Button;