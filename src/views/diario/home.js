import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import styles from './styles';


export default function Home({navigation}) {
    return (
    <View style={styles.container}>
    <StatusBar style="dark"/>
    <Text style={styles.text}>
        Comece adicionado alguma refeição</Text>
    
    <TouchableOpacity 
    style={styles.opcao}
    onPress ={() => navigation.navigate('Manha')}>
    <Text 
    style={styles.txtOpc}>
        Adicionar Café da Manhã</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    style={styles.opcao}
    onPress ={() => navigation.navigate('Almoco')}>
    <Text
    style={styles.txtOpc}>
        Adicionar Almoço</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    style={styles.opcao}
    onPress ={() => navigation.navigate('Lanche')}>
    <Text
    style={styles.txtOpc}>
        Adicionar Lanche</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
    style={styles.opcao}
    onPress ={() => navigation.navigate('Janta')}>
    <Text
    style={styles.txtOpc}>
        Adicionar Janta</Text>
    </TouchableOpacity>
    </View>
    );
}

