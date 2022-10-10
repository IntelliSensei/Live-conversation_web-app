import React, { CSSProperties, FC } from "react";
import "../css/GlobalStyles.css"


export interface ITextFieldProps {
  label?: string;
  placeholder?: string;
  onChange?: (newValue: string) => void;
  style?: CSSProperties;
  defaultValue?: string
  // icons?: Icon;
}

export const TextField: FC<ITextFieldProps> = ({
  label,
  placeholder,
  onChange,
  style,
  defaultValue
  // icons

}: ITextFieldProps) => {

  return (
    <div style={style}>
      {label && <label>{label}</label>}
      <input
        style={{height: "3vh", width: "100%", margin: "0", padding: "5px", borderRadius:"3px", border: "1px solid #80b3ff"}}
        onChange={(event) => {
          const newVal = event.target.value;
          if (onChange) onChange(newVal);
        }}  
        placeholder={placeholder}
        className='global-style'
        defaultValue={defaultValue}
      />
    </div>
  );
};


