import React, { CSSProperties, FC } from "react";

export interface ITextFieldProps {
  label?: string;
  placeholder?: string;
  onChange?: (newValue: string) => void;
  style?: CSSProperties;
}

export const TextField: FC<ITextFieldProps> = ({
  label,
  placeholder,
  onChange,
  style
}: ITextFieldProps) => {
  return (
    <div style={style}>
      {label && <label>{label}</label>}
      <input
        style={{ width: "100%", margin: "0", padding: "0" }}
        onChange={(event) => {
          const newVal = event.target.value;
          console.log({ newVal });
          if (onChange) onChange(newVal);
        }}
        placeholder={placeholder}
      />
    </div>
  );
};
