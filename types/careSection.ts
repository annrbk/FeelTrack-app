export type CareSectionItem = {
  data: CardItem[];
  title: string;
  subtitle: string;
};

export type CardItem = {
  id: string;
  color: string;
  title?: string;
  session?: string;
};
