// src/app/index.tsx
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';

export default function Home() {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, {name}!</Text>
      <Input
        placeholder="Digite seu nome"
        onChangeText={setName}
      />
      <Button title="Entrar" onPress={() => alert(`Olá, ${name}!`)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#19181F',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#453467',
  },
});