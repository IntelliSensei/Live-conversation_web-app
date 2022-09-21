import React, { FC, useRef } from "react";

export interface IOption {
  key: string | number;
  value: string;
}
export interface IDropDownProps {
  label: string;
  options: IOption[];
  onChange?: (selected: IOption) => void;
}

export const DropDown: FC<IDropDownProps> = ({
  label,
  options,
  onChange,
}: IDropDownProps) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <select
        onChange={(event) => {
          if (!onChange) return;
          const selectedOption = options.filter(
            (option) => option.key === event.target.value
          );
          onChange(selectedOption[0]);
        }}
      >
        {options.map(({ key, value }) => {
          return (
            <option key={key} value={key}>
              {value}
            </option>
          );
        })}
      </select>
    </div>
  );
};
