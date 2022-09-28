import React, { FC, useEffect } from "react";
import { IWSMessagePKG } from "../Panel"


interface ITextBubbleProps {
    alias: string;
    color: string;
    message: string;
    // onMessageChange?: (newValue: IWSMessagePKG) => void;
}




export const TextBubble: FC<ITextBubbleProps> = ({ alias, color, message }: ITextBubbleProps) => {
    return <div style={{ backgroundColor: color }}>
        <h3>{alias}</h3>
        <p>
            {message}
        </p>
    </div>
}