import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { colors, font, radius, spacing } from "../theme";

/**
 * Кнопки React Native.
 *
 * Button:
 * - простий готовий компонент;
 * - добре підходить для простих дій.
 *
 * Pressable:
 * - дає найбільше контролю;
 * - має onPress, onPressIn, onPressOut, onLongPress;
 * - через pressed можна змінювати стиль під час натискання.
 *
 * TouchableOpacity:
 * - старіший, але все ще корисний спосіб зробити елемент натискуваним;
 * - автоматично змінює opacity.
 */
export function Buttons() {
  const [message, setMessage] = useState("Натисніть кнопку");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Кнопки</Text>

      <Button
        title="Button"
        color={colors.accent}
        onPress={() => setMessage("Натиснули Button")}
      />

      <Pressable
        onPress={() => setMessage("onPress")}
        onPressIn={() => console.log("onPressIn")}
        onPressOut={() => console.log("onPressOut")}
        onLongPress={() => setMessage("Довге натискання")}
        hitSlop={10}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressed,
        ]}
      >
        {({ pressed }) => (
          <Text style={[styles.buttonText, styles.onAccentText]}>
            {pressed ? "Натискається..." : "Pressable"}
          </Text>
        )}
      </Pressable>

      <TouchableOpacity
        onPress={() => setMessage("Натиснули TouchableOpacity")}
        style={styles.touchable}
      >
        <Text style={styles.buttonText}>TouchableOpacity</Text>
      </TouchableOpacity>

      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    paddingTop: spacing.xxl * 2,
    gap: spacing.lg,
    backgroundColor: colors.bg,
  },
  title: {
    fontSize: font.heading,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.5,
  },
  pressable: {
    paddingVertical: spacing.md + 2,
    borderRadius: radius.md,
    backgroundColor: colors.accent,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.98 }],
  },
  touchable: {
    paddingVertical: spacing.md + 2,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceMuted,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  buttonText: {
    color: colors.text,
    fontWeight: "600",
    fontSize: font.body,
  },
  onAccentText: {
    color: colors.onAccent,
  },
  message: {
    fontSize: font.body,
    color: colors.textMuted,
  },
});
