import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { NubankLogin } from './src/screens/NubankLogin/NubankLogin';

export default function App() {
  return (
    <>
   <NubankLogin/>
    <StatusBar style="light"/>
    </>
  );
}

