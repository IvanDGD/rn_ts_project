import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors, font, radius, spacing } from "../theme";
/**
 * SafeAreaView
 *   └── ScrollView
 *        ├── View
 *        ├── Image
 *        ├── Text
 *        └── Pressable
 */
export function LayoutExample() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Мій магазин</Text>

        <View style={styles.productCard}>
          <Image
            source={{ uri: "https://picsum.photos/500/300" }}
            style={styles.image}
          />

          <Text style={styles.productName}>Сучасні навушники</Text>

          <Text style={styles.description}>
            Бездротові навушники для музики та роботи.
          </Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>2499 ₴</Text>

            <Pressable
              style={({ pressed }) => [
                styles.buyButton,
                pressed && styles.pressed,
              ]}
              onPress={() => {
                console.log("Товар додано");
                Alert.alert("Успіх", "Товар додано до кошика");
              }}
            >
              <Text style={styles.buyText}>До кошика</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.bg,
  },
  container: {
    padding: spacing.xl,
    gap: spacing.xl,
  },
  title: {
    fontSize: font.heading,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.5,
  },
  productCard: {
    padding: spacing.md,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: radius.md,
  },
  productName: {
    fontSize: font.title,
    fontWeight: "700",
    color: colors.text,
  },
  description: {
    fontSize: font.body,
    color: colors.textMuted,
  },
  bottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontSize: font.title,
    fontWeight: "800",
    color: colors.text,
  },
  buyButton: {
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    backgroundColor: colors.accent,
  },
  pressed: {
    opacity: 0.6,
  },
  buyText: {
    color: colors.onAccent,
    fontWeight: "600",
    fontSize: font.body,
  },
});
