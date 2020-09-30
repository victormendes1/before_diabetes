import { FlatList, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import React, { Component } from 'react';
import database from './database.json';
import styles from './styles'

const Foods = database;

export default class ListFoods extends Component {

    
        constructor(props) {
        super(props);
        this.state = {text: ''};
    } 
    render(){
        return (
        //Screen
        <View> 
            
            <View style={styles.searchBar}>
            <TextInput
            style={styles.searchInput}
            placeholder = "Busque por alimentos"
            onChangeText = {(text) => this.setState({text})}
            value = {this.state.text}
            />
            </View>
            
            <FlatList
            data={Foods}
            renderItem={({item}) =>{
                return(
            <TouchableOpacity onPress={() => {
                Alert.alert(
                    `${item.name}`,
                    "Deseja adicionar?",
                    [{ text: "Não" },
                    { text: "Sim" /*, onPress: () => {
                    /*
                        Alert.alert(
                        "Quanto adicionar?"

                        )

                    } */
                }],
                )
                }}>
                <View style={styles.foodlist}>
                    <Text style={styles.title}>
                    {item.name}
                    </Text>
                    
                    <Text style={styles.subtitle2}>Cal:
                    {item.fat}
                    
                    </Text>
                </View>
            </TouchableOpacity>
            )}}/> 
            
        </View>
    )}
    
}


