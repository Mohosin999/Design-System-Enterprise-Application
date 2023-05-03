import React from "react";
interface ButtonProps {
    title: string;
    children: React.ReactNode;
    onClick: () => void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
