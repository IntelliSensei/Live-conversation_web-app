import React, { FC, useState } from "react";
import "../../css/ColorPicker.ColorPicker.css";
import { ColorPalette } from "./ColorPalette";
import { ColorViewer } from "./ColorViewer";

export interface IColorPicker {
  defaultColor?: string;
  onChange?: (color: string) => void;
}

export const ColorPicker: FC<IColorPicker> = ({
  defaultColor,
  onChange,
}: IColorPicker) => {
  const [selectColor, setSelectColor] = useState(defaultColor);
  const [showPalette, setShowPalette] = useState(false);

  return (
    <div className="color-picker">
    <ColorViewer 
      selectedColor={selectColor}
      onClick={() => setShowPalette(!showPalette)}
    />
      <div className="palette-position">
        <div
          className="palette-container"
          style={{ display: showPalette ? "" : "none" }}
        >
          <ColorPalette
            onSelect={(color) => {
              setSelectColor(color);
              if (onChange) onChange(color)
              setShowPalette(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
