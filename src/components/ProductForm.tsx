import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useProductStore } from "../Store/useProductStore";
import { colors, font, radius, spacing } from "../theme";

export default function ProductForm() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const addProduct = useProductStore((state) => state.addProduct);

  const handleAddProduct = () => {
    const trimmedTitle = title.trim();
    const numericPrice = parseFloat(price.replace(",", "."));
    if (!trimmedTitle) {
      setError("Введіть назву продукту");
      return;
    }
    if (isNaN(numericPrice) || numericPrice <= 0) {
      setError("Введіть коректну ціну");
      return;
    }
    addProduct({ id: Date.now(), title: trimmedTitle, price: numericPrice });
    setTitle("");
    setPrice("");
    setError("");
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Новий товар</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(text) => { setTitle(text); if (error) setError(""); }}
        placeholder="Наприклад: Кава"
        placeholderTextColor={colors.textFaint}
      />
      <TextInput
        style={styles.input}
        value={price}
        onChangeText={(text) => { setPrice(text); if (error) setError(""); }}
        placeholder="Ціна (₴)"
        placeholderTextColor={colors.textFaint}
        keyboardType="numeric"
      />
      {error ? (
        <View style={styles.errorRow}>
          <Feather name="alert-circle" size={14} color={colors.danger} />
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
      <TouchableOpacity style={styles.button} onPress={handleAddProduct} activeOpacity={0.8}>
        <Feather name="plus" size={18} color={colors.onAccent} />
        <Text style={styles.buttonText}>Створити</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surfaceMuted,
    borderRadius: radius.lg,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    gap: spacing.md,
  },
  title: {
    fontSize: font.caption,
    fontWeight: "700",
    color: colors.textMuted,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  input: {
    height: 48,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    fontSize: font.body,
    color: colors.text,
  },
  errorRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs,
  },
  errorText: {
    color: colors.danger,
    fontSize: font.small,
    fontWeight: "500",
  },
  button: {
    height: 48,
    backgroundColor: colors.accent,
    borderRadius: radius.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  buttonText: {
    color: colors.onAccent,
    fontSize: font.body,
    fontWeight: "600",
  },
});
