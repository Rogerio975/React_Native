import { isCPF } from 'cpf-cnpj-validator';
import React, { useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import validator from 'validator';

const CadastroClientes = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');

  const handleCadastro = () => {
    if (!validator.isEmail(email)) {
      Alert.alert('Erro', 'E-mail inválido');
      return;
    }

    if (!validator.isMobilePhone(telefone, 'pt-BR')) {
      Alert.alert('Erro', 'Telefone inválido');
      return;
    }

    if (cpf.replace(/\D/g, '').length !== 11) {
      Alert.alert('Erro', 'CPF deve conter 11 dígitos');
      return;
    }

    if (!isCPF(cpf)) {
      Alert.alert('Erro', 'CPF inválido');
      return;
    }

    // Aqui você pode enviar os dados do cliente para o backend ou realizar outras operações
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    console.log('CPF:', cpf);
    // Reiniciar os campos após o cadastro
    setNome('');
    setEmail('');
    setTelefone('');
    setCpf('');
  };

  const formatTelefone = (text) => {
    const cleaned = text.replace(/\D/g, '');
    let formatted = cleaned.replace(/(\d{2})(\d{4,5})(\d{0,4})/, '($1) $2-$3');
    if (formatted.length > 15) {
      formatted = formatted.substr(0, 15); // Limita para no máximo 9 dígitos após o DDD
    }
    return formatted;
  };

  const formatCPF = (text) => {
    let cleaned = text.replace(/\D/g, '');
    if (cleaned.length > 11) {
      cleaned = cleaned.substr(0, 11); // Limita para no máximo 11 dígitos
    }
    let formatted = cleaned.replace(/(\d{3})(\d{3})(\d{3})(\d{0,2})/, '$1.$2.$3-$4');
    return formatted;
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, textAlign: 'center' }}
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Text>E-mail:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, textAlign: 'center' }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text>Telefone:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, textAlign: 'center' }}
        onChangeText={text => setTelefone(formatTelefone(text))}
        value={telefone}
        keyboardType="phone-pad"
      />
      <Text>CPF:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, textAlign: 'center' }}
        onChangeText={text => setCpf(formatCPF(text))}
        value={cpf}
        keyboardType="numeric"
      />
      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </View>
  );
};

export default CadastroClientes;