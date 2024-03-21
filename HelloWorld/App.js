import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph.title}>Hello World!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(138,43,226)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: 'white',
    title: {
      fontSize: 28,
      color: 'white', // Adicionando a cor branca aqui
    }
  },
});
