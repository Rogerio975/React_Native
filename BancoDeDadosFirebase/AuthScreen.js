import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { auth } from "./firebaseConfig";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Conta criada com sucesso!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login realizado!");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ marginVertical: 10, textAlign: 'center' }}>Email:</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderBottomWidth: 1, marginVertical: 10 }} />
      
      <Text style={{ marginVertical: 10, textAlign: 'center' }}>Senha:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderBottomWidth: 1, marginVertical: 10 }} />
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={{ marginVertical: 10 }}>
        <Text style={{ color: '#FF5733', textAlign: 'center' }}>Criar Conta</Text>
      </TouchableOpacity>
      <Button title="Login" onPress={handleLogin} style={{ marginVertical: 10 }} />
      
      {message ? <Text style={{ marginVertical: 10, textAlign: 'center' }}>{message}</Text> : null}
    </View>
  );
}