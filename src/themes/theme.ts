// custom Design System theme based on PRD
export const Colors = {
  light: {
    background: '#FFFFFF',
    surfaceSecondary: '#F7F8FA',
    surfaceTertiary: '#ECECF1',
    divider: '#E5E7EB',
    textPrimary: '#1F2937',
    textSecondary: '#6B7280',
    textTertiary: '#9CA3AF',
    success: '#10B981', // verified, resolved
    action: '#3B82F6', // active reports
    warning: '#F59E0B', // disputed
    error: '#EF4444', // unverified, spam
    attention: '#8B5CF6',
  },
  dark: {
    background: '#0F1419',
    surfaceSecondary: '#1A1F26',
    surfaceTertiary: '#262D36',
    divider: '#3D444D',
    textPrimary: '#F3F4F6',
    textSecondary: '#9CA3AF',
    textTertiary: '#6B7280',
    success: '#10B981',
    action: '#3B82F6',
    warning: '#F59E0B',
    error: '#EF4444',
    attention: '#8B5CF6',
  }
};

export const Spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 48,
};

export const Typography = {
  display1: { fontSize: 32, fontWeight: '600' as const, lineHeight: 40, letterSpacing: -0.5 },
  display2: { fontSize: 28, fontWeight: '600' as const, lineHeight: 36, letterSpacing: -0.5 },
  headline: { fontSize: 24, fontWeight: '600' as const, lineHeight: 32, letterSpacing: -0.25 },
  title1: { fontSize: 20, fontWeight: '600' as const, lineHeight: 28, letterSpacing: 0 },
  title2: { fontSize: 18, fontWeight: '600' as const, lineHeight: 26, letterSpacing: 0 },
  bodyLarge: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24, letterSpacing: 0.5 },
  bodyRegular: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20, letterSpacing: 0.5 },
  bodySmall: { fontSize: 13, fontWeight: '400' as const, lineHeight: 18, letterSpacing: 0.5 },
  labelLarge: { fontSize: 12, fontWeight: '500' as const, lineHeight: 16, letterSpacing: 0.5 },
  labelSmall: { fontSize: 11, fontWeight: '500' as const, lineHeight: 14, letterSpacing: 0.5 },
  mono: { fontSize: 13, fontWeight: '500' as const, lineHeight: 18, letterSpacing: 0, fontFamily: 'monospace' }
};
