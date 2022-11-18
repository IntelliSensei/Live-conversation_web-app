import React, { FC } from "react";
import { ITextFieldProps } from "./TextField";
import "../css/GlobalStyles.css";

export const PasswordField: FC<ITextFieldProps> = ({
  label,
  placeholder,
  onChange,
  style,
  defaultValue,
}: ITextFieldProps) => {
  return (
    <div style={style}>
      {label && <label>{label}</label>}
      <input
        style={{
          height: "3vh",
          width: "100%",
          margin: "0",
          padding: "5px",
          borderRadius: "3px",
          border: "1px solid #80b3ff",
        }}
        onChange={(event) => {
          const newVal = event.target.value;
          if (onChange) onChange(newVal);
        }}
        placeholder={placeholder}
        className="global-style"
        defaultValue={defaultValue}
        type="password"
        autoComplete="new-password"
      />
    </div>
  );
};
