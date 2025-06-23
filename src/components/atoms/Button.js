import React from "react";
import { cn } from "../../utils/classNames";
const Button = ({ children, className = "", ...props}) => (
    <button type="button"
        className={cn(
            "text-white bg-red-500 rounded-md px-4 py-2 hover:bg-red-600",
            className
        )}
        {...props}
    >
        {children}
    </button>
);

export default Button;