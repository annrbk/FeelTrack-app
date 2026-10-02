import { Dimensions, PixelRatio } from "react-native";

const BASE_WIDTH = 360;
const MAX_SCALE = 1.15;

export const scale = (size: number): number => {
  const { width } = Dimensions.get("window");
  const factor = Math.min(width / BASE_WIDTH, MAX_SCALE);
  const newSize = factor * size;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export const isTabletOrXL = Dimensions.get("window").width >= 600;
