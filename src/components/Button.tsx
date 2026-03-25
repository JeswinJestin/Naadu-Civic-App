import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';
import { Colors, Typography } from '../themes/theme';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'accent';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Button({ title, onPress, variant = 'primary', disabled = false, style }: ButtonProps) {
  const getBackgroundColor = () => {
    if (disabled) return Colors.light.textTertiary;
    switch (variant) {
      case 'primary': return Colors.light.textPrimary;
      case 'secondary': return Colors.light.surfaceSecondary;
      case 'tertiary': return 'transparent';
      case 'accent': return Colors.light.action;
    }
  };

  const getTextColor = () => {
    if (disabled) return Colors.light.background;
    switch (variant) {
      case 'primary': return Colors.light.background;
      case 'secondary': return Colors.light.textPrimary;
      case 'tertiary': return Colors.light.textSecondary;
      case 'accent': return Colors.light.background;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: getBackgroundColor() },
        variant === 'secondary' && styles.secondaryBorder,
        style
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text style={[
        Typography.labelLarge,
        { color: getTextColor() },
        variant === 'tertiary' && styles.tertiaryText
      ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 8,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryBorder: {
    borderWidth: 1,
    borderColor: Colors.light.divider,
  },
  tertiaryText: {
    textDecorationLine: 'underline',
  }
});
