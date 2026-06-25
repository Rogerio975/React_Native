import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  SafeAreaView, StatusBar, KeyboardAvoidingView,
  Platform, ScrollView,
} from 'react-native';
import {
  CorpLogo, LockIcon, InputField, Button,
  ErrorBanner, Divider, SecurityBadge,
} from '../components';
import { Colors, Typography, Spacing, Radius, Shadow } from '../theme';

interface Props {
  onRequestAccess: () => void;
}

export default function LoginScreen({ onRequestAccess }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');

  const clear = () => setError('');

  const handleLogin = () => {
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Informe o usuário e a senha para continuar.');
      return;
    }
    setLoading(true);
    // Simula chamada à API de autenticação
    setTimeout(() => {
      setLoading(false);
      setError('Usuário ou senha inválidos. Verifique suas credenciais e tente novamente.');
    }, 1600);
  };

  return (
    <SafeAreaView style={s.safe}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.navy} />

      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView
          contentContainerStyle={s.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >

          {/* ─── HERO ───────────────────────────────────────────────── */}
          <View style={s.hero}>
            <View style={s.stripeA} />
            <View style={s.stripeB} />

            <CorpLogo size="lg" />
            <Text style={s.heroTitle}>Portal Corporativo</Text>
            <Text style={s.heroSub}>Sistema de Gestão Empresarial</Text>
            <LockIcon />
          </View>

          {/* ─── CARD ───────────────────────────────────────────────── */}
          <View style={s.card}>
            <Text style={s.cardTitle}>Acesso ao Sistema</Text>
            <Text style={s.cardSub}>Entre com suas credenciais corporativas</Text>

            <ErrorBanner message={error} />

            <InputField
              label="Usuário / Matrícula"
              placeholder="usuario@empresa.com.br"
              value={username}
              onChangeText={t => { setUsername(t); clear(); }}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              hasError={!!error}
            />

            <InputField
              label="Senha"
              placeholder="••••••••"
              value={password}
              onChangeText={t => { setPassword(t); clear(); }}
              secureTextEntry={!showPass}
              autoCapitalize="none"
              hasError={!!error}
              right={
                <TouchableOpacity
                  onPress={() => setShowPass(v => !v)}
                  hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                >
                  <Text style={s.eyeIcon}>{showPass ? '🙈' : '👁'}</Text>
                </TouchableOpacity>
              }
            />

            <TouchableOpacity style={s.forgotBtn} activeOpacity={0.7}>
              <Text style={s.forgotText}>Esqueceu a senha?</Text>
            </TouchableOpacity>

            <Button
              label="Entrar"
              onPress={handleLogin}
              loading={loading}
            />

            <Divider label="ou" />

            {/* ─── SOLICITAR ACESSO ─── */}
            <TouchableOpacity
              style={s.reqBtn}
              onPress={onRequestAccess}
              activeOpacity={0.7}
            >
              <Text style={s.reqText}>
                Não possui credenciais de acesso?{'\n'}
                <Text style={s.reqLink}>Solicitar acesso ao sistema →</Text>
              </Text>
            </TouchableOpacity>

            <SecurityBadge />
          </View>

          <Text style={s.footer}>
            © {new Date().getFullYear()} Corporativo S.A. · Todos os direitos reservados
          </Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:   { flex: 1, backgroundColor: Colors.navy },
  scroll: { flexGrow: 1, backgroundColor: Colors.navy },

  // HERO
  hero: {
    backgroundColor: Colors.navyMid,
    paddingTop: Spacing.xxl,
    paddingBottom: 52,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    overflow: 'hidden',
    position: 'relative',
  },
  stripeA: {
    position: 'absolute',
    width: 250, height: 250,
    backgroundColor: Colors.accent,
    opacity: 0.07,
    borderRadius: 55,
    transform: [{ rotate: '35deg' }],
    top: -90, right: -75,
  },
  stripeB: {
    position: 'absolute',
    width: 130, height: 130,
    backgroundColor: Colors.accent,
    opacity: 0.05,
    borderRadius: 32,
    transform: [{ rotate: '20deg' }],
    bottom: -35, left: -35,
  },
  heroTitle: { ...Typography.heading, color: Colors.white, marginTop: Spacing.md, marginBottom: 4 },
  heroSub:   { ...Typography.body, color: Colors.muted, letterSpacing: 0.4, marginBottom: Spacing.md },

  // CARD
  card: {
    backgroundColor: Colors.white,
    marginHorizontal: Spacing.md,
    marginTop: -26,
    borderRadius: Radius.lg,
    padding: Spacing.lg + 4,
    ...Shadow.card,
  },
  cardTitle: { ...Typography.heading, color: Colors.navy, marginBottom: 4 },
  cardSub:   { ...Typography.body, color: Colors.muted, marginBottom: Spacing.lg },

  eyeIcon:   { fontSize: 18 },

  forgotBtn:  { alignSelf: 'flex-end', marginTop: -6, marginBottom: Spacing.md },
  forgotText: { ...Typography.body, color: Colors.accent, fontWeight: '600' },

  reqBtn:  { alignItems: 'center', paddingVertical: 4 },
  reqText: { ...Typography.body, color: Colors.navyMid, textAlign: 'center', lineHeight: 26 },
  reqLink: { color: Colors.accent, fontWeight: '700', textDecorationLine: 'underline' },

  footer: {
    ...Typography.caption,
    textAlign: 'center',
    color: Colors.muted,
    opacity: 0.7,
    paddingVertical: Spacing.lg,
  },
});
