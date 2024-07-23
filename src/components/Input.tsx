import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type: HTMLInputTypeAttribute;
  placeholder: string;
}

export default function Input({
  placeholder,
  type,
  className,
  ...rest
}: InputProps) {
  return (
    <input
      className={`rounded-full bg-stone-200 px-2 ${className}`}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
  );
}
