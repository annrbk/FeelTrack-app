import { ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import BackButton from "../components/BackButton";
import { useAppStyle } from "../hooks/useAppStyle";
import { getStyles } from "../styles/AboutScreen.styles";

export default function AboutScreen() {
  const { t } = useTranslation();
  const { styles } = useAppStyle(getStyles);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.headerTitle}>{t("about.headerTitle")}</Text>
          <View style={styles.rightPart} />
        </View>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Text style={styles.subtitle}>{t("about.welcomeTitle")}</Text>
            <Text style={styles.paragraph}>{t("about.introParagraph1")}</Text>
            <Text style={styles.paragraph}>{t("about.introParagraph2")}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>{t("about.featuresTitle")}</Text>
            <View style={styles.featureItem}>
              <Text style={styles.featureName}>
                {t("about.featureSimplicityTitle")}
              </Text>
              <Text style={styles.featureDesc}>
                {t("about.featureSimplicityDesc")}
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureName}>
                {t("about.featureCalendarTitle")}
              </Text>
              <Text style={styles.featureDesc}>
                {t("about.featureCalendarDesc")}
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureName}>
                {t("about.featureMeditationsTitle")}
              </Text>
              <Text style={styles.featureDesc}>
                {t("about.featureMeditationsDesc")}
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureName}>
                {t("about.featureTherapyTitle")}
              </Text>
              <Text style={styles.featureDesc}>
                {t("about.featureTherapyDesc")}
              </Text>
            </View>
            <View style={styles.featureItem}>
              <Text style={styles.featureName}>
                {t("about.featurePrivacyTitle")}
              </Text>
              <Text style={styles.featureDesc}>
                {t("about.featurePrivacyDesc")}
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.thankYouText}>{t("about.thankYou")}</Text>
            <Text style={styles.versionText}>
              {t("about.version", { version: "1.0.0" })}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
