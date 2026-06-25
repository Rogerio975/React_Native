import React, { useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  SafeAreaView, StatusBar, KeyboardAvoidingView,
  Platform, ScrollView, Alert,
} from 'react-native';
import {
  CorpLogo, InputField, Button, InfoBox,
} from '../components';
import { Colors, Typography, Spacing, Radius, Shadow } from '../theme';

interface Props {
  onBack: () => void;
}

export default function RequestAccessScreen({ onBack }: Props) {
  const [name,   setName]   = useState('');
  const [email,  setEmail]  = useState('');
  const [dept,   setDept]   = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent,    setSent]    = useState(false);

  const validate = (): boolean => {
    if (!name.trim())  { Alert.alert('Campo obrigatório', 'Informe seu nome completo.'); return false; }
    if (!email.trim()) { Alert.alert('Campo obrigatório', 'Informe seu e-mail corporativo.'); return false; }
    if (!dept.trim())  { Alert.alert('Campo obrigatório', 'Informe seu departamento.'); return false; }
    const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRx.test(email.trim())) {
      Alert.alert('E-mail inválido', 'Informe um endereço de e-mail válido.');
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setLoading(true);
    // Simula envio à API
    setTimeout(() => { setLoading(false); setSent(true); }, 1800);
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

          {/* ─── TOP BAR ──────────────────────────────────────────── */}
          <View style={s.topbar}>
            <TouchableOpacity style={s.backBtn} onPress={onBack} activeOpacity={0.7}>
              <Text style={s.backArrow}>←</Text>
              <Text style={s.backLabel}>Voltar</Text>
            </TouchableOpacity>
            <CorpLogo size="sm" />
          </View>

          {/* ─── CARD ─────────────────────────────────────────────── */}
          <View style={s.card}>
            {sent ? (
              /* ── SUCESSO ── */
              <View style={s.successBox}>
                <View style={s.successCircle}>
                  <Text style={s.successCheck}>✓</Text>
                </View>

                <Text style={s.successTitle}>Solicitação Enviada!</Text>
                <Text style={s.successMsg}>
                  Sua solicitação foi registrada com sucesso.{'\n'}
                  A equipe de TI analisará e retornará em até{' '}
                  <Text style={s.successHighlight}>2 dias úteis</Text>.
                </Text>

                <View style={s.emailChip}>
                  <Text style={s.emailChipText}>📧  {email}</Text>
                </View>

                <Text style={s.successNote}>
                  Um e-mail de confirmação será enviado ao endereço acima.
                </Text>

                <Button label="Ir para o Login" onPress={onBack} style={{ marginTop: Spacing.md }} />
              </View>
            ) : (
              /* ── FORMULÁRIO ── */
              <>
                <Text style={s.cardTitle}>Solicitar Acesso</Text>
                <Text style={s.cardSub}>
                  Preencha os dados abaixo. Sua solicitação será analisada pelo administrador responsável.
                </Text>

                <InputField
                  label="Nome completo"
                  placeholder="Ex.: João da Silva"
                  value={name}
                  onChangeText={setName}
                  autoCapitalize="words"
                  required
                />
                <InputField
                  label="E-mail corporativo"
                  placeholder="nome@empresa.com.br"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  required
                />
                <InputField
                  label="Departamento / Área"
                  placeholder="Ex.: Tecnologia da Informação"
                  value={dept}
                  onChangeText={setDept}
                  autoCapitalize="words"
                  required
                />
                <InputField
                  label="Justificativa"
                  placeholder="Descreva o motivo do acesso solicitado..."
                  value={reason}
                  onChangeText={setReason}
                  multiline
                  numberOfLines={4}
                  textAlignVertical="top"
                  containerStyle={{ marginBottom: Spacing.sm }}
                />

                <InfoBox>
                  As credenciais serão enviadas ao e-mail informado após aprovação pelo gestor responsável.
                </InfoBox>

                <Button
                  label="Enviar Solicitação"
                  onPress={handleSubmit}
                  loading={loading}
                />

                <Text style={s.reqNote}>
                  Campos com <Text style={{ color: Colors.error }}>*</Text> são obrigatórios
                </Text>
              </>
            )}
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

  topbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.md,
    paddingBottom: Spacing.sm,
  },
  backBtn:   { flexDirection: 'row', alignItems: 'center', gap: 6 },
  backArrow: { color: Colors.white, fontSize: 22, lineHeight: 26 },
  backLabel: { ...Typography.body, color: Colors.muted, fontWeight: '500' },

  card: {
    backgroundColor: Colors.white,
    marginHorizontal: Spacing.md,
    marginTop: Spacing.sm,
    marginBottom: Spacing.md,
    borderRadius: Radius.lg,
    padding: Spacing.lg + 4,
    ...Shadow.card,
  },
  cardTitle: { ...Typography.heading, color: Colors.navy, marginBottom: 4 },
  cardSub:   { ...Typography.body, color: Colors.muted, marginBottom: Spacing.lg, lineHeight: 22 },

  reqNote: {
    ...Typography.caption,
    color: Colors.muted,
    textAlign: 'center',
    marginTop: Spacing.md,
  },

  // SUCCESS
  successBox:       { alignItems: 'center', paddingVertical: Spacing.sm },
  successCircle: {
    width: 76, height: 76, borderRadius: 38,
    backgroundColor: Colors.success,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: Spacing.md,
    ...Shadow.soft,
  },
  successCheck:     { fontSize: 34, color: Colors.white, fontWeight: '700' },
  successTitle:     { ...Typography.heading, color: Colors.navy, marginBottom: Spacing.sm },
  successMsg:       { ...Typography.body, color: Colors.muted, textAlign: 'center', lineHeight: 24, marginBottom: Spacing.md },
  successHighlight: { fontWeight: '700', color: Colors.navy },
  emailChip: {
    backgroundColor: Colors.accentLight,
    borderRadius: Radius.full,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: Spacing.sm,
  },
  emailChipText:    { ...Typography.body, color: Colors.accent, fontWeight: '600' },
  successNote:      { ...Typography.caption, color: Colors.muted, textAlign: 'center', marginBottom: Spacing.sm },

  footer: {
    ...Typography.caption,
    textAlign: 'center',
    color: Colors.muted,
    opacity: 0.7,
    paddingVertical: Spacing.lg,
  },
});
