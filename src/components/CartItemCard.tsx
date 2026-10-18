import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Product } from "../types/product";
import { colors, font, radius, spacing } from "../theme";

type CartItemCardProps = {
  product: Product;
  onRemove: (id: number) => void;
};

export default function CartItemCard({ product, onRemove }: CartItemCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Feather name="package" size={18} color={colors.text} />
      </View>
      <View style={styles.infoCol}>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.price}>{product.price.toLocaleString("uk-UA")} ₴</Text>
      </View>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => onRemove(product.id)}
        activeOpacity={0.6}
        hitSlop={8}
      >
        <Feather name="trash-2" size={18} color={colors.danger} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.sm,
    gap: spacing.md,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: radius.sm,
    backgroundColor: colors.surfaceMuted,
    alignItems: "center",
    justifyContent: "center",
  },
  infoCol: {
    flex: 1,
    gap: 2,
  },
  title: {
    fontSize: font.bodyLg,
    fontWeight: "600",
    color: colors.text,
  },
  price: {
    fontSize: font.small,
    fontWeight: "500",
    color: colors.textMuted,
  },
  deleteButton: {
    width: 36,
    height: 36,
    borderRadius: radius.sm,
    backgroundColor: colors.dangerSoft,
    alignItems: "center",
    justifyContent: "center",
  },
});
