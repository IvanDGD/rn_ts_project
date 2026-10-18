import { FlatList, StyleSheet, Text } from "react-native";
import { colors, font, radius, spacing } from "../theme";

export default function MyFlatList() {
  return (
    <FlatList
      horizontal
      data={["ts", "js", "jsx", "tsx "]}
      renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.listContent} //внутрішній контейнер
      style={styles.flatListContainer}
    />
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    flexGrow: 0, // не дає FlatList займати весь вертикальний екран
    marginVertical: spacing.xl, //відступ зверху та знизу
  },
  listContent: {
    flexGrow: 1,
    justifyContent: "center", // центрує елементи FlatList по горизонталі
    alignItems: "center", // центрує елементи FlatList по вертикалі
    gap: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  item: {
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md + 2,
    borderRadius: radius.pill,
    overflow: "hidden",
    backgroundColor: colors.accentSoft,
    fontSize: font.body, // встановлює розмір шрифту всередині FlatList
    fontWeight: "600",
    color: colors.accent, // встановлює колір тексту всередині FlatList
  },
});
