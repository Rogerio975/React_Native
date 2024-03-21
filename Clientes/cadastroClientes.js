import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const CadastroClientes = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleCadastro = () => {
    // Aqui você pode enviar os dados do cliente para o backend ou realizar outras operações
    console.log('Nome:', nome);
    console.log('Email:', email);
    console.log('Telefone:', telefone);
    // Reiniciar os campos após o cadastro
    setNome('');
    setEmail('');
    setTelefone('');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Nome:</Text>
      <TextInput
        style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={text => setNome(text)}
        value={nome}
      />
      <Text>Email:</Text>
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
      <Button
        title="Cadastrar"
        onPress={handleCadastro}
      />
    </View>
  );
};

export default CadastroClientes;