import'react-native-gesture-handler';
import { FlatList, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListFoods from './cafe_manha/ListFoods.js';
import AddFoods from './AddFoods';
import styles from './styles';

const Stack = createStackNavigator();

export default function Diario({navigation}) {
return (
    <Stack.Navigator>
        <Stack.Screen name="Diario" component={Home}       options={{title: 'Diário'}}/>
        <Stack.Screen name="Manha"  component={ListFoods}  options={{title: 'Café da Manhã'}}/>
        <Stack.Screen name="Almoco" component={ListFoods}  options={{title: 'Almoço'}}/>
        <Stack.Screen name="Lanche" component={ListFoods}  options={{title: 'Lanche'}}/>
        <Stack.Screen name="Janta"  component={ListFoods}  options={{title: 'Janta'}}/>
        <Stack.Screen name="AddFoods"component={AddFoods}  options={{title: 'Informações'}}/>
    </Stack.Navigator> 
    );
}
//Tela de 
function Home({navigation}) {
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
