import { FlatList, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import DialogInput from 'react-native-dialog-input';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import database from './database.json';
import styles from './styles'

const Foods = database;

export default function ListFoods({navigation}){
    return (
        
        <View> 
            <StatusBar style="dark"/>
            <View style={styles.searchBar}>
            <TextInput
            style={styles.searchInput}
            placeholder = "Busque por alimentos"
            
            />
            </View>
            
            <FlatList
            data={Foods}
            renderItem={(item) =>{
                return(
            <TouchableOpacity
                onPress ={() => navigation.navigate('AddFoods', {select:item})}>
                <View style={styles.foodlist}>
                    <Text style={styles.title}>
                    {item.name}
                    </Text>
                    
                    <Text style={styles.subtitle2}>Caloria:
                    {item.fat}
                    </Text>
                </View>
            </TouchableOpacity>
            )}}/> 
            
        </View>
    )}

