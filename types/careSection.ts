import { ImageSourcePropType } from "react-native";

export type CareSectionItem = {
  data: CardItem[];
  title: string;
  subtitle: string;
};

export type CardItem = {
  id: string;
  image: ImageSourcePropType;
  title?: string;
  session?: string;
};
