import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerStyle: { backgroundColor: '#f4511e' } }}>
      <Stack.Screen name="index" options={{ title: 'Início' }} />
      <Stack.Screen name="perfil" options={{ title: 'Meu Perfil' }} />
    </Stack>
  );
}