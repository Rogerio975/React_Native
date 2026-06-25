import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { Colors, Typography, Spacing, Radius } from '../theme';

// ─── CORP LOGO ───────────────────────────────────────────────────────────────
export function CorpLogo({ size = 'lg' }: { size?: 'sm' | 'lg' }) {
  const lg = size === 'lg';
  return (
    <View style={logo.row}>
      <Text style={[logo.wordmark, lg ? logo.wordmarkLg : logo.wordmarkSm]}>
        CORP
      </Text>
      <View style={[logo.dot, lg ? logo.dotLg : logo.dotSm]} />
    </View>
  );
}
const logo = StyleSheet.create({
  row:        { flexDirection: 'row', alignItems: 'flex-start' },
  wordmark:   { color: Colors.white, fontWeight: '800', letterSpacing: 7 },
  wordmarkLg: { fontSize: 30 },
  wordmarkSm: { fontSize: 20 },
  dot:        { borderRadius: 99, backgroundColor: Colors.accent },
  dotLg:      { width: 10, height: 10, marginLeft: 2, marginTop: 5 },
  dotSm:      { width: 7,  height: 7,  marginLeft: 2, marginTop: 3 },
});

// ─── LOCK ICON (pure Views) ──────────────────────────────────────────────────
export function LockIcon() {
  return (
    <View style={lock.wrapper}>
      <View style={lock.shackle} />
      <View style={lock.body}>
        <View style={lock.hole} />
        <View style={lock.stem} />
      </View>
    </View>
  );
}
const lock = StyleSheet.create({
  wrapper: { alignItems: 'center', marginTop: Spacing.lg },
  shackle: {
    width: 26,
    height: 18,
    borderWidth: 4,
    borderColor: Colors.accent,
    borderBottomWidth: 0,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
    marginBottom: -1,
    zIndex: 1,
  },
  body: {
    width: 44,
    height: 34,
    backgroundColor: Colors.accent,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  hole: { width: 12, height: 12, borderRadius: 6, backgroundColor: Colors.navyMid },
  stem: { width: 3.5, height: 8, borderRadius: 2, backgroundColor: Colors.navyMid },
});

// ─── INPUT FIELD ─────────────────────────────────────────────────────────────
interface InputFieldProps extends TextInputProps {
  label: string;
  required?: boolean;
  hasError?: boolean;
  containerStyle?: ViewStyle;
  right?: React.ReactNode;
}
export function InputField({ label, required, hasError, containerStyle, right, ...props }: InputFieldProps) {
  return (
    <View style={[inp.container, containerStyle]}>
      <Text style={inp.label}>
        {label.toUpperCase()}
        {required && <Text style={inp.req}>  *</Text>}
      </Text>
      <View style={inp.row}>
        <TextInput
          style={[inp.input, hasError && inp.inputErr, right != null && inp.inputPadRight]}
          placeholderTextColor={Colors.muted}
          {...props}
        />
        {right != null && <View style={inp.rightSlot}>{right}</View>}
      </View>
    </View>
  );
}
const inp = StyleSheet.create({
  container:    { marginBottom: Spacing.md },
  label:        { ...Typography.label, color: Colors.navyMid, marginBottom: 7 },
  req:          { color: Colors.error },
  row:          { position: 'relative' },
  input: {
    borderWidth: 1.5,
    borderColor: Colors.border,
    borderRadius: Radius.md,
    paddingHorizontal: 14,
    paddingVertical: 13,
    fontSize: 15,
    color: Colors.navy,
    backgroundColor: Colors.offWhite,
  },
  inputErr:      { borderColor: Colors.error, backgroundColor: '#FFF5F5' },
  inputPadRight: { paddingRight: 52 },
  rightSlot:     { position: 'absolute', right: 14, top: 0, bottom: 0, justifyContent: 'center' },
});

// ─── BUTTON ──────────────────────────────────────────────────────────────────
interface ButtonProps {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'ghost';
  style?: ViewStyle;
}
export function Button({ label, onPress, loading, disabled, variant = 'primary', style }: ButtonProps) {
  const primary = variant === 'primary';
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading || disabled}
      activeOpacity={0.82}
      style={[btn.base, primary ? btn.primary : btn.ghost, (loading || disabled) && btn.off, style]}
    >
      {loading
        ? <ActivityIndicator color={primary ? Colors.white : Colors.accent} />
        : <Text style={[btn.label, !primary && btn.labelGhost]}>{label}</Text>}
    </TouchableOpacity>
  );
}
const btn = StyleSheet.create({
  base:       { borderRadius: Radius.md, paddingVertical: 15, alignItems: 'center', minHeight: 52 },
  primary:    { backgroundColor: Colors.accent },
  ghost:      { borderWidth: 1.5, borderColor: Colors.accent },
  off:        { opacity: 0.55 },
  label:      { ...Typography.subhead, color: Colors.white, letterSpacing: 0.3 },
  labelGhost: { color: Colors.accent },
});

// ─── ERROR BANNER ────────────────────────────────────────────────────────────
export function ErrorBanner({ message }: { message: string }) {
  if (!message) return null;
  return (
    <View style={err.wrap}>
      <Text style={err.icon}>⚠</Text>
      <Text style={err.text}>{message}</Text>
    </View>
  );
}
const err = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.errorBg,
    borderLeftWidth: 4,
    borderLeftColor: Colors.error,
    borderRadius: Radius.sm,
    padding: 12,
    marginBottom: Spacing.md,
    gap: 8,
  },
  icon: { fontSize: 14, color: Colors.error, marginTop: 2 },
  text: { flex: 1, ...Typography.body, color: Colors.error, fontWeight: '500' },
});

// ─── INFO BOX ────────────────────────────────────────────────────────────────
export function InfoBox({ children }: { children: React.ReactNode }) {
  return (
    <View style={info.wrap}>
      <Text style={info.icon}>ℹ</Text>
      <Text style={info.text}>{children}</Text>
    </View>
  );
}
const info = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: Colors.infoBg,
    borderLeftWidth: 3,
    borderLeftColor: Colors.accent,
    borderRadius: Radius.sm,
    padding: 12,
    marginBottom: Spacing.md,
    gap: 8,
  },
  icon: { fontSize: 14, color: Colors.accent, marginTop: 2 },
  text: { flex: 1, ...Typography.body, color: Colors.navyMid },
});

// ─── DIVIDER ─────────────────────────────────────────────────────────────────
export function Divider({ label }: { label?: string }) {
  return (
    <View style={div.row}>
      <View style={div.line} />
      {label && <Text style={div.label}>{label}</Text>}
      <View style={div.line} />
    </View>
  );
}
const div = StyleSheet.create({
  row:   { flexDirection: 'row', alignItems: 'center', marginVertical: Spacing.lg },
  line:  { flex: 1, height: 1, backgroundColor: Colors.border },
  label: { ...Typography.body, color: Colors.muted, marginHorizontal: 12 },
});

// ─── SECURITY BADGE ──────────────────────────────────────────────────────────
export function SecurityBadge() {
  return (
    <View style={badge.wrap}>
      <Text style={badge.text}>🔒  Conexão segura — TLS 1.3</Text>
    </View>
  );
}
const badge = StyleSheet.create({
  wrap: {
    alignSelf: 'center',
    marginTop: Spacing.lg,
    backgroundColor: Colors.offWhite,
    borderRadius: Radius.full,
    paddingHorizontal: 16,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  text: { ...Typography.caption, color: Colors.muted, fontWeight: '500' },
});
