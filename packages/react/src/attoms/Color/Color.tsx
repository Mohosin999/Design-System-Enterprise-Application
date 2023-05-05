import React from "react";
import Spacing from "../../foundation/Spacing";
import "@ds.e/scss/lib/Utilities.css";

interface ColorProps {
  hexCode: string;
  width?: string;
  height?: string;
}

const Color: React.FC<ColorProps> = ({
  hexCode,
  width = Spacing.sm,
  height = Spacing.sm,
}) => {
  const className = `dse-width-${width} dse-height-${height}`;
  return <div className={className} style={{ backgroundColor: hexCode }}></div>;
};

export default Color;
