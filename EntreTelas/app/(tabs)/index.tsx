import { Text, View } from 'react-native';

import { Link } from 'expo-router';

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Bem-vindo à Home!</Text>
      <Link href="/perfil" style={{ color: 'blue', marginTop: 20 }}>
        Ir para Perfil
      </Link>
    </View>
  );
}