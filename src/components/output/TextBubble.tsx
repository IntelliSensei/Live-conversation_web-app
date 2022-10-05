import React, { FC, useEffect } from "react";
import { IWSMessagePKG } from "../Panel"
import "../css/TextBubble.css";

interface ITextBubbleProps {
    alias: string;
    color: string;
    message: string;
    // onMessageChange?: (newValue: IWSMessagePKG) => void;
}

function getRandomNumber(min: any, max: any) {
    return Math.random() * (max - min) + min;
}

function randomizeBubbles() {
    var section = document.getElementsByTagName('section')
    var winWidth = window.innerWidth - 500;
    var winHeight = window.innerHeight - 200;

    for (var i = 0; i < section.length; i++) {

        var thisSection = section[i];
        var randomTop = getRandomNumber(0, winHeight);
        var randomLeft = getRandomNumber(0, winWidth);

        thisSection.style.top = randomTop + "px";
        thisSection.style.left = randomLeft + "px";
    }
}

export const TextBubble: FC<ITextBubbleProps> = ({ alias, color, message }: ITextBubbleProps) => {

    randomizeBubbles();

    return <section className="textBubble" style={{ backgroundColor: color }}>
        <h3 className="bubble-alias">{alias}</h3>
        <p className="bubble-msg">
            {message}
        </p>
    </section>
}
