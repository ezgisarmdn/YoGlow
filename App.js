import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainNavigator from './navigation/MainNavigator';

export default function App() {
  return (
    <PaperProvider>
       <MainNavigator/>
    </PaperProvider>
  );
}
