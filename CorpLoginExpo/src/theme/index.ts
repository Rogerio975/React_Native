// ─── COLOR PALETTE ───────────────────────────────────────────────────────────
export const Colors = {
  // Brand blues
  navy:        '#0A1628',
  navyMid:     '#1E3A5F',
  navyLight:   '#2C4F7C',
  accent:      '#2B7FFF',
  accentDark:  '#1A5FCC',
  accentLight: '#EBF3FF',

  // Neutrals
  white:    '#FFFFFF',
  offWhite: '#F4F7FB',
  border:   '#D0DCE8',
  muted:    '#8FA3B1',
  subtle:   '#C5D4E0',

  // Feedback
  error:   '#E84040',
  errorBg: '#FEE2E2',
  success: '#22C55E',
  infoBg:  '#EFF6FF',
} as const;

// ─── TYPOGRAPHY ──────────────────────────────────────────────────────────────
export const Typography = {
  display: { fontSize: 28, fontWeight: '800' as const, letterSpacing: 0.2 },
  heading: { fontSize: 22, fontWeight: '700' as const, letterSpacing: 0.1 },
  title:   { fontSize: 18, fontWeight: '700' as const },
  subhead: { fontSize: 16, fontWeight: '600' as const },
  body:    { fontSize: 14, fontWeight: '400' as const, lineHeight: 22 },
  label:   { fontSize: 12, fontWeight: '600' as const, letterSpacing: 0.7 },
  caption: { fontSize: 11, fontWeight: '400' as const },
} as const;

// ─── SPACING ─────────────────────────────────────────────────────────────────
export const Spacing = {
  xs:  4,
  sm:  8,
  md:  16,
  lg:  24,
  xl:  32,
  xxl: 48,
} as const;

// ─── RADIUS ──────────────────────────────────────────────────────────────────
export const Radius = {
  sm:   6,
  md:   10,
  lg:   16,
  xl:   24,
  full: 999,
} as const;

// ─── SHADOWS ─────────────────────────────────────────────────────────────────
export const Shadow = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 20,
    elevation: 12,
  },
  soft: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 5,
  },
} as const;
