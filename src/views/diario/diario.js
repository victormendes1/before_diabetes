import'react-native-gesture-handler';
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ListFoods from './cafe_manha/ListFoods.js';
import Almoco from './almoco/almoco';
import Lanche from './lanche/lanche';
import Janta from './janta/janta';
import Home from './home'

const Stack = createStackNavigator();

export default function Diario() {
return (
    <Stack.Navigator>
        <Stack.Screen name="Diario" component={Home}/>
        <Stack.Screen name="Manha" component={ListFoods}/>
        <Stack.Screen name="Almoco" component={Almoco}/>
        <Stack.Screen name="Lanche" component={Lanche}/>
        <Stack.Screen name="Janta" component={Janta}/>
    </Stack.Navigator> 
    );
}
