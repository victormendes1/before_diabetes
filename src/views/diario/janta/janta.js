import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';


export default function Janta() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Adicione sua Janta.</Text>
    </View>
  );
}

