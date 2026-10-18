import React, { useState } from "react";
import { View, Text, TextInput, Switch, StyleSheet } from "react-native";
import { colors, font, radius, spacing } from "../theme";

/**
 * Компоненти введення даних.
 *
 * TextInput:
 * - поле для введення тексту;
 * - value зберігає поточне значення;
 * - onChangeText спрацьовує при зміні тексту.
 *
 * Switch:
 * - перемикач true / false.
 */
export function Inputs() {
  const [name, setName] = useState("");
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inputs</Text>

      <Text style={styles.label}>Ваше ім'я</Text>

      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Введіть ім'я"
        placeholderTextColor={colors.textFaint}
        autoCapitalize="words"
        style={styles.input}
      />

      <Text style={styles.result}>Привіт, {name || "користувач"}!</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Сповіщення</Text>

        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: colors.border, true: colors.accent }}
          thumbColor={colors.surface}
        />
      </View>

      <Text style={styles.text}>Сповіщення: {notifications ? "увімкнені" : "вимкнені"}</Text>
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
  label: {
    fontSize: font.small,
    fontWeight: "600",
    color: colors.textMuted,
  },
  text: {
    fontSize: font.body,
    color: colors.textMuted,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    fontSize: font.body,
    color: colors.text,
    backgroundColor: colors.surface,
  },
  result: {
    fontSize: font.title,
    fontWeight: "600",
    color: colors.text,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceMuted,
  },
});

/*
// 1. Для ввода цифр (числовой пад)
<TextInput keyboardType="numeric" />

// 2. Для ввода номеров телефонов (с символами +, #, *)
<TextInput keyboardType="phone-pad" />

// 3. Для ввода Email (добавляет символ @ и точку)
<TextInput keyboardType="email-address" />

// 4. Только целые положительные числа (без знаков и точек)
<TextInput keyboardType="number-pad" />

// 5. Для ввода URL-адресов (добавляет .com, / и т.д.)
<TextInput keyboardType="url" />
*/
