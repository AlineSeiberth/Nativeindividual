import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { NubankLogin } from './src/screens/NubankLogin';

export default function App() {
  return (
    <>
   <Home/>
    <StatusBar style="light"/>
    </>
  );
}

