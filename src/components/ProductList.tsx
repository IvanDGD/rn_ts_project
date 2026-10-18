import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useProductStore } from "../Store/useProductStore";
import CartItemCard from "./CartItemCard";
import { colors, font, radius, spacing } from "../theme";

export default function ProductList() {
  const products = useProductStore((state) => state.products);
  const removeProduct = useProductStore((state) => state.removeProduct);

  if (products.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Feather name="inbox" size={28} color={colors.textFaint} />
        <Text style={styles.emptyTitle}>Тут поки порожньо</Text>
        <Text style={styles.emptySubtitle}>Додайте перший товар через форму вище</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.sectionHeader}>Загальний список</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{products.length}</Text>
        </View>
      </View>
      {products.map((item) => (
        <CartItemCard key={item.id} product={item} onRemove={(id) => removeProduct(id)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: spacing.md,
  },
  sectionHeader: {
    fontSize: font.caption,
    fontWeight: "700",
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  badge: {
    minWidth: 24,
    height: 24,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.pill,
    backgroundColor: colors.accentSoft,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: font.caption,
    fontWeight: "700",
    color: colors.accent,
  },
  emptyContainer: {
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: colors.borderStrong,
    borderRadius: radius.lg,
    paddingVertical: spacing.xxl,
    paddingHorizontal: spacing.xl,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  emptyTitle: {
    fontSize: font.bodyLg,
    fontWeight: "600",
    color: colors.text,
  },
  emptySubtitle: {
    fontSize: font.small,
    color: colors.textMuted,
    textAlign: "center",
  },
});
