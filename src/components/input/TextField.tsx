import React, { FC } from "react";

export interface ITextFieldProps {
    label?: string;
    placeholder?: string;
    onChange?: (newValue: string) => void;
}

export const TextField: FC<ITextFieldProps> = ({ label, placeholder, onChange }: ITextFieldProps) => {

    return <div>
        {label && <label>{label}</label>}
        <input
            onChange={(event) => {
                const newVal = event.target.value
                console.log({ newVal })
                if (onChange) onChange(newVal);
            }}
            placeholder={placeholder} />
    </div>


} 