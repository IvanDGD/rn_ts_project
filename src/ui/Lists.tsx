import React from "react";
import {
  View,
  Text,
  FlatList,
  SectionList,
  StyleSheet,
} from "react-native";
import { colors, font, radius, spacing } from "../theme";

type Product = {
  id: string;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: "1", name: "Ноутбук", price: 35000 },
  { id: "2", name: "Телефон", price: 22000 },
  { id: "3", name: "Навушники", price: 3000 },
];

const sections = [
  {
    title: "Популярні",
    data: ["Ноутбук", "Телефон"],
  },
  {
    title: "Аксесуари",
    data: ["Навушники", "Мишка"],
  },
];

/**
 * FlatList:
 * - використовується для великих списків;
 * - React Native рендерить лише потрібну частину елементів.
 *
 * SectionList:
 * - список, розділений на секції.
 */
export function Lists() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FlatList</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price} ₴</Text>
          </View>
        )}
      />

      <Text style={styles.title}>SectionList</Text>

      <SectionList
        sections={sections}
        keyExtractor={(item, index) => `${item}-${index}`}
        renderSectionHeader={({ section }) => (
          <Text style={styles.header}>{section.title}</Text>
        )}
        renderItem={({ item }) => (
          <Text style={styles.sectionItem}>{item}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    paddingTop: spacing.xxl * 2,
    backgroundColor: colors.bg,
  },
  title: {
    fontSize: font.title,
    fontWeight: "800",
    color: colors.text,
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  item: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: font.body,
    fontWeight: "600",
    color: colors.text,
  },
  price: {
    fontSize: font.small,
    color: colors.textMuted,
  },
  header: {
    fontSize: font.caption,
    fontWeight: "700",
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: "uppercase",
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  sectionItem: {
    paddingVertical: spacing.sm + 2,
    fontSize: font.body,
    color: colors.text,
  },
});
