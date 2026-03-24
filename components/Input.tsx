import React, { useState } from 'react';
import { TextInput, StyleSheet, View, Text, TextInputProps } from 'react-native';
import { Colors, Typography } from '../constants/theme';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
}

export function Input({ label, error, style, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={style}>
      {label && <Text style={[Typography.title2, styles.label]}>{label}</Text>}
      <TextInput
        style={[
          styles.input,
          Typography.bodyRegular,
          isFocused && styles.inputFocused,
          error ? styles.inputError : null
        ]}
        placeholderTextColor={Colors.light.textTertiary}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      {error && <Text style={[Typography.bodySmall, styles.errorText]}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginBottom: 8,
    color: Colors.light.textPrimary,
  },
  input: {
    backgroundColor: Colors.light.surfaceSecondary,
    borderWidth: 1,
    borderColor: Colors.light.divider,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 14,
    height: 44,
    color: Colors.light.textPrimary,
  },
  inputFocused: {
    borderColor: Colors.light.action,
  },
  inputError: {
    borderColor: Colors.light.error,
  },
  errorText: {
    color: Colors.light.error,
    marginTop: 4,
  }
});
