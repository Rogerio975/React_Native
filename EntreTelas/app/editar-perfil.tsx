import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditarPerfilScreen() {
  const router = useRouter();

  // Estado para os campos editáveis
  const [companyName, setCompanyName] = useState('EntreTelas Corp');
  const [industry, setIndustry] = useState('Tecnologia & Entretenimento');
  const [description, setDescription] = useState(
    'Líder em soluções digitais para o mercado audiovisual. Transformando a maneira como o mundo consome conteúdo através de inovação e criatividade.'
  );
  const [email, setEmail] = useState('contato@entretelas.com.br');
  const [address, setAddress] = useState('Av. Paulista, 1000 - São Paulo, SP');

  const handleSave = () => {
    // Aqui você pode implementar a lógica para salvar os dados
    // Por exemplo, enviar para uma API ou armazenar localmente
    console.log('Dados salvos:', { companyName, industry, description, email, address });
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
    router.back();
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.content}>
        <ThemedText type="title" style={styles.title}>Editar Perfil</ThemedText>

        {/* Campo Nome da Empresa */}
        <View style={styles.inputGroup}>
          <ThemedText type="defaultSemiBold" style={styles.label}>Nome da Empresa</ThemedText>
          <TextInput
            style={styles.input}
            value={companyName}
            onChangeText={setCompanyName}
            placeholder="Digite o nome da empresa"
          />
        </View>

        {/* Campo Setor */}
        <View style={styles.inputGroup}>
          <ThemedText type="defaultSemiBold" style={styles.label}>Setor</ThemedText>
          <TextInput
            style={styles.input}
            value={industry}
            onChangeText={setIndustry}
            placeholder="Digite o setor"
          />
        </View>

        {/* Campo Descrição */}
        <View style={styles.inputGroup}>
          <ThemedText type="defaultSemiBold" style={styles.label}>Descrição</ThemedText>
          <TextInput
            style={[styles.input, styles.textArea]}
            value={description}
            onChangeText={setDescription}
            placeholder="Digite a descrição"
            multiline
            numberOfLines={4}
          />
        </View>

        {/* Campo Email */}
        <View style={styles.inputGroup}>
          <ThemedText type="defaultSemiBold" style={styles.label}>Email</ThemedText>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Digite o email"
            keyboardType="email-address"
          />
        </View>

        {/* Campo Endereço */}
        <View style={styles.inputGroup}>
          <ThemedText type="defaultSemiBold" style={styles.label}>Endereço</ThemedText>
          <TextInput
            style={styles.input}
            value={address}
            onChangeText={setAddress}
            placeholder="Digite o endereço"
          />
        </View>

        {/* Botões */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.cancelButton]} onPress={handleCancel}>
            <ThemedText style={styles.cancelButtonText}>Cancelar</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.saveButton]} onPress={handleSave}>
            <ThemedText style={styles.saveButtonText}>Salvar</ThemedText>
          </TouchableOpacity>
        </View>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  button: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  cancelButtonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  saveButton: {
    backgroundColor: '#f4511e',
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});