import { Text, View } from "react-native";
import { getStyles } from "../styles/SelfCareScreen.styles";
import ImageCard from "./ImageCard";
import type { CareSectionItem } from "../types/careSection";
import { useAppStyle } from "../hooks/useAppStyle";
import { useTranslation } from "react-i18next";

export default function CareSection({
  data,
  title,
  subtitle,
}: CareSectionItem) {
  const { styles } = useAppStyle(getStyles);
  const { t } = useTranslation();

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{t(title)}</Text>
      <Text style={styles.subtitle}>{t(subtitle)}</Text>
      <View style={styles.grid}>
        {data.map((item) => (
          <ImageCard
            key={item.id}
            id={item.id}
            color={item.color}
            title={t(`careScreen.itemTitles.${item.title}`)}
            session={`${item.session} ${t("careScreen.session")}`}
          />
        ))}
      </View>
    </View>
  );
}
