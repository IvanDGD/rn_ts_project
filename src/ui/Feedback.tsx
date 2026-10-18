import React, { useState } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  Modal,
  Pressable,
  Alert,
  StyleSheet,
} from "react-native";
import { colors, font, radius, spacing } from "../theme";

/**
 * Компоненти для повідомлення користувача про стан програми.
 *
 * ActivityIndicator -> індикатор завантаження.
 * Modal -> модальне вікно поверх поточного екрану.
 * Alert -> системне діалогове повідомлення.
 */
export function Feedback() {
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const simulateLoading = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      Alert.alert("Готово", "Завантаження завершено");
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Feedback components</Text>

      <Pressable style={styles.button} onPress={simulateLoading}>
        <Text style={styles.buttonText}>Імітувати завантаження</Text>
      </Pressable>

      {loading && (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={colors.accent} />
          <Text style={styles.text}>Завантаження...</Text>
        </View>
      )}

      <Pressable
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Відкрити Modal</Text>
      </Pressable>

      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>
            <Text style={styles.modalTitle}>Кошик</Text>
            <Text style={styles.text}>У кошику 3 товари.</Text>

            <Pressable
              style={styles.close}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Закрити</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  text: {
    fontSize: font.body,
    color: colors.textMuted,
  },
  button: {
    backgroundColor: colors.accent,
    paddingVertical: spacing.md + 2,
    borderRadius: radius.md,
    alignItems: "center",
  },
  buttonText: {
    color: colors.onAccent,
    fontWeight: "600",
    fontSize: font.body,
  },
  loading: {
    alignItems: "center",
    gap: spacing.sm,
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.overlay,
  },
  modal: {
    width: "82%",
    padding: spacing.xl,
    borderRadius: radius.lg,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    gap: spacing.md,
  },
  modalTitle: {
    fontSize: font.title,
    fontWeight: "800",
    color: colors.text,
  },
  close: {
    backgroundColor: colors.text,
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    alignItems: "center",
  },
});
