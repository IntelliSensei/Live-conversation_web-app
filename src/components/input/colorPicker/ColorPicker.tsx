import React, { FC, useState } from "react";
import "../../css/ColorPicker.ColorPicker.css";
import { ColorPalette } from "./ColorPalette";

interface IColorPicker {}

export const ColorPicker: FC<IColorPicker> = ({}: IColorPicker) => {
  const [selectColor, setSelectColor] = useState("#fff");
  const [showPalette, setShowPalette] = useState(false);

  return (
    <div className="color-picker">
      <div
        className="color-selector"
        onClick={() => setShowPalette(!showPalette)}
      >
        <div
          className="selected-color"
          style={{ backgroundColor: selectColor }}
        ></div>
      </div>
      <div className="palette-position">
        <div
          className="palette-container"
          style={{ display: showPalette ? "" : "none" }}
        >
          <ColorPalette
            onSelect={(color) => {
              setSelectColor(color);
              setShowPalette(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
