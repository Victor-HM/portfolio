import { ButtonHTMLAttributes } from "react";
import { ButtonStyle } from "./button.style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  placeholder: string;
  icon?: JSX.Element;
  typeButton?: "PRIMARY" | "SECONDARY" | "DISABLE";
  position?: "LEFT" | "RIGHT";
}

export function Button({
  icon,
  placeholder,
  typeButton = "PRIMARY",
  ...rest
}: ButtonProps) {
  return (
    <ButtonStyle
      className="text-violet-600 flex justify-center items-center py-3 px-12 gap-2 rounded-md transition-all text-center"
      typeButton={typeButton}
      {...rest}
    >
      {placeholder}
      {icon}
    </ButtonStyle>
  );
}
