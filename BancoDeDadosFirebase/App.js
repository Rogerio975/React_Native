import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AuthScreen from './AuthScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AuthScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0000FF', // Alterado para azul
    alignItems: 'center',
    justifyContent: 'center',
  },
});
