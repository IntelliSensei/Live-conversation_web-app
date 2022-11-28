import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { trimStart } from "../../util";
import "../css/TextBubble.css";
import { VerifiedIcon } from "../svgs";

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
  verified?: boolean;
  getInfo?: (myInfo: () => ITextBubbleInfo) => void;
}

function getRandomNumber(min: any, max: any) {
  return Math.random() * (max - min) + min;
}

function randomizeBubbles() {
  var winWidth = window.innerWidth - 500;
  var winHeight = window.innerHeight - 200;
  var randomTop = getRandomNumber(0, winHeight);
  var randomLeft = getRandomNumber(0, winWidth);

  return { top: randomTop, left: randomLeft };
}

export const TextBubble: FC<ITextBubbleProps> = ({
  alias,
  color,
  message,
  verified,
  getInfo,
}: ITextBubbleProps) => {

  const positions = useMemo(() => randomizeBubbles(), []);
  const [timeToLive, setTimeToLive] = useState(60);

  const myInfo = useCallback(() => {
    return {
      timeToLive,
      top: Number(positions.top),
      left: Number(positions.left),
      height: 300,
      width: 150,
    } as ITextBubbleInfo;
  }, [timeToLive, positions]);

  useEffect(() => getInfo && getInfo(myInfo), [myInfo])

  useEffect(() => {
    let ttl = 60;
    const id = setInterval(() => {
      ttl = ttl - 1;
      setTimeToLive(ttl);
    }, 1000);
    return () => clearInterval(id)
  }, [message])

  if (timeToLive < 0) return <div></div>;
  if (message.length < 1) return <div></div>

  return (
    <section
      className="textBubble"
      style={{ backgroundColor: color, ...positions }}
    >
      <h3 className="bubble-alias">{alias}
        {verified && <VerifiedIcon />}
      </h3>
      {/* {verified ? // always returning true atm
        <h3 className="bubble-alias">{alias} <VerifiedIcon /></h3>
        :
      } */}
      <p className="bubble-msg">{trimStart(message, 120)}</p>
    </section>
  );
};
