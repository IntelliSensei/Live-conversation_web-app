import React, { FC, useRef } from "react"

interface IDropDownProps {
    label: string
}

export const DropDown: FC<IDropDownProps> = ({ label }: IDropDownProps) => {
    const ref = useRef(null);
    console.log(ref.current);

    return <div>
        <label htmlFor="">{label}</label>
        <select
            ref={ref.current}
            //  value={data.find(obj => obj.value === selectedValue)}
            onChange={(event) => { 
                
                console.log(ref.current) }}>
            <option key={"key"} value={"value"}>aaa</option>
            <option key={"key1"} value={"value1"}>aaa</option>
            <option key={"key2"} value={"value2"}>aaa</option>
            <option key={"key3"} value={"value3"}>aaa</option>
        </select>
    </div>
}