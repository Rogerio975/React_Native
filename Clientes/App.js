import { isCpfValid } from 'cpf-cnpj-validator';
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

    if (!isCpfValid(cpf)) {
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

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Text>E-mail:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text>Telefone:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setTelefone(text)}
        value={telefone}
      />
      <Text>CPF:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setCpf(text)}
        value={cpf}
      />
      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </View>
  );
};

export default CadastroClientes;