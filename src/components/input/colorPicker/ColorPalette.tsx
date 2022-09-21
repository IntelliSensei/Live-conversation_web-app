import React, { FC } from "react";
import "../../css/ColorPicker.ColorPalette.css";

interface IColorPalette {
    onSelect: (color: string) => void
}

export const ColorPalette: FC<IColorPalette> = ({onSelect}: IColorPalette) => {
  const colors = [
    "#000000",
    "#800000",
    "#008000",
    "#808000",
    "#000080",
    "#800080",
    "#008080",
    "#c0c0c0",
    "#808080",
    "#ff0000",
    "#00ff00",
    "#ffff00",
    "#0000ff",
    "#ff00ff",
    "#00ffff",
    "#ffffff",
  ];

  return (
    <div className="color-palette">
      {colors.map((color, ix) => {
        return (
          <div
            key={ix}
            onClick={()=> {onSelect(color)}}
            style={{ backgroundColor: color }}
            className={"circle"}
          />
        );
      })}
    </div>
  );
};
