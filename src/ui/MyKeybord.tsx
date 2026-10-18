import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { colors, font, radius, spacing } from "../theme";

/**
 * Налаштування клавіатури в TextInput
 *
 * keyboardType:
 *   default      - звичайна клавіатура
 *   email-address - клавіатура для email
 *   phone-pad    - телефонна клавіатура
 *   numeric      - цифри
 *   decimal-pad  - цифри з десятковою крапкою
 *
 * autoCapitalize:
 *   none        - не робити першу літеру великою
 *   sentences   - перша літера речення велика
 *   words       - перша літера кожного слова велика
 *   characters   - усі літери великі
 *
 * autoCorrect:
 *   true / false - автоматичне виправлення тексту
 *
 * secureTextEntry:
 *   true - приховує введений текст (пароль)
 *
 * returnKeyType:
 *   визначає вигляд кнопки Enter на клавіатурі
 */

export function MyKeyboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [price, setPrice] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Налаштування клавіатури</Text>

        {/* Звичайний текст */}
        <Text style={styles.label}>Ім'я</Text>

        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Введіть ім'я"
          placeholderTextColor={colors.textFaint}
          keyboardType="default"
          autoCapitalize="words"
          autoCorrect={true}
          returnKeyType="next"
          style={styles.input}
        />

        {/* Email */}
        <Text style={styles.label}>Email</Text>

        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="example@gmail.com"
          placeholderTextColor={colors.textFaint}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="email"
          returnKeyType="next"
          style={styles.input}
        />

        {/* Телефон */}
        <Text style={styles.label}>Телефон</Text>

        <TextInput
          value={phone}
          onChangeText={setPhone}
          placeholder="+380..."
          placeholderTextColor={colors.textFaint}
          keyboardType="phone-pad"
          autoComplete="tel"
          returnKeyType="next"
          style={styles.input}
        />

        {/* Вік */}
        <Text style={styles.label}>Вік</Text>

        <TextInput
          value={age}
          onChangeText={setAge}
          placeholder="18"
          placeholderTextColor={colors.textFaint}
          keyboardType="numeric"
          inputMode="numeric"
          maxLength={3}
          returnKeyType="done"
          style={styles.input}
        />

        {/* Ціна */}
        <Text style={styles.label}>Ціна товару</Text>

        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="99.99"
          placeholderTextColor={colors.textFaint}
          keyboardType="decimal-pad"
          inputMode="decimal"
          returnKeyType="done"
          style={styles.input}
        />

        {/* Пароль */}
        <Text style={styles.label}>Пароль</Text>

        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Введіть пароль"
          placeholderTextColor={colors.textFaint}
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete="password"
          returnKeyType="done"
          style={styles.input}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.bg,
  },

  container: {
    padding: spacing.xl,
    paddingTop: spacing.xxl * 2,
    gap: spacing.sm,
  },

  title: {
    fontSize: font.heading,
    fontWeight: "800",
    color: colors.text,
    letterSpacing: -0.5,
    marginBottom: spacing.lg,
  },

  label: {
    fontSize: font.small,
    fontWeight: "600",
    color: colors.textMuted,
    marginTop: spacing.md,
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
});
