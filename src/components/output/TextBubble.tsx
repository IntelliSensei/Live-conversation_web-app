import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import "../css/TextBubble.css";

export interface ITextBubbleInfo {
  width: number;
  height: number;
  top: number;
  left: number;
  timeToLive: number;
}

interface ITextBubbleProps {
  alias: string;
  color: string;
  message: string;
  getInfo?: (myInfo:() => ITextBubbleInfo) => void;
}

function getRandomNumber(min: any, max: any) {
  return Math.random() * (max - min) + min;
}

function randomizeBubbles() {
  var winWidth = window.innerWidth - 500;
  var winHeight = window.innerHeight - 200;
  var randomTop = getRandomNumber(0, winHeight);
  var randomLeft = getRandomNumber(0, winWidth);

  return { top: randomTop + "px", left: randomLeft + "px" };
}

export const TextBubble: FC<ITextBubbleProps> = ({
  alias,
  color,
  message,
  getInfo,
}: ITextBubbleProps) => {

  const positions = useMemo(() => randomizeBubbles(), []);
  const [timeToLive, setTimeToLive] = useState(10);

  const myInfo = useCallback(() => {
    return {
      timeToLive,
      top: Number(positions.top.replace("px","")),
      left: Number(positions.left.replace("px", "")),
      height: 300,
      width: 150,
    } as ITextBubbleInfo;
  }, [timeToLive, positions]);

  useEffect(() => getInfo && getInfo(myInfo), [myInfo])

  useEffect(() => {
      let ttl = 60;
      console.log("set interval", alias);
      const id = setInterval(() => {
          console.log("test", alias, ttl)
          ttl = ttl - 1;
          setTimeToLive(ttl);
      }, 1000);
      return () => clearInterval(id)
  }, [message])

  if (timeToLive < 0) return <div></div>;
  return (
    <section
      className="textBubble"
      style={{ backgroundColor: color, ...positions }}
    >
      <h3 className="bubble-alias">{alias}</h3>
      <p className="bubble-msg">{message}</p>
    </section>
  );
};
