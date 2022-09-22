import { FontawesomeObject, Icon } from "@fortawesome/fontawesome-svg-core";
import React, { CSSProperties, FC } from "react";

import { faBoxOpen, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'


export interface ITextFieldProps {
  label?: string;
  placeholder?: string;
  onChange?: (newValue: string) => void;
  style?: CSSProperties;
  icons?: Icon;
}

export const TextField: FC<ITextFieldProps> = ({
  label,
  placeholder,
  onChange,
  style,
  icons

}: ITextFieldProps) => {
  
  // CSS inputs // stuck at fontawesome into input fields

  return (
    <div style={style}>
      {/* icons={<FontAwesomeIcon icon={faHome} />} */}
      <FontAwesomeIcon icon={faHome} />
      {label && <label>{label}</label>}
      <input
        style={{height: "3vh", width: "100%", margin: "0", padding: "5px", borderRadius:"10px", border: "1px solid #80b3ff", boxShadow: "1px 2px #888888"}}
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


