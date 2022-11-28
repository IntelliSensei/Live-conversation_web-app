import { FC } from "react";


export interface ColorViewerProps {
    selectedColor?: string;
    onClick?: () => void;
}

export const ColorViewer: FC<ColorViewerProps> = ({
  selectedColor="#fff",
  onClick
 }: ColorViewerProps) => {
    return <div
        className="color-selector"
        onClick={onClick}
    >
        <div
            className="selected-color"
            style={{ backgroundColor: selectedColor }}
        ></div>
    </div>
}

