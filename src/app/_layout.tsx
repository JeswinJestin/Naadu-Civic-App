import '../global.css';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { AuthProvider } from '../context/AuthContext';

import { useColorScheme } from '@/hooks/use-color-scheme';
import Mapbox from '@rnmapbox/maps';

// Initialize Mapbox with a placeholder token (to be provided by user later)
Mapbox.setAccessToken('YOUR_MAPBOX_PUBLIC_TOKEN');

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="onboarding" />
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(report)" />
          <Stack.Screen name="constituency/[id]" />
          <Stack.Screen name="issue/[id]" />
          <Stack.Screen name="mla-dashboard" />
          <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: true, title: 'Settings' }} />
        </Stack>
      </AuthProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
