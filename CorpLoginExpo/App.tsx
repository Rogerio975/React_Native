import React, { useState } from 'react';
import LoginScreen from './src/screens/LoginScreen';
import RequestAccessScreen from './src/screens/RequestAccessScreen';

type Screen = 'login' | 'request';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');

  return screen === 'request'
    ? <RequestAccessScreen onBack={() => setScreen('login')} />
    : <LoginScreen onRequestAccess={() => setScreen('request')} />;
}
