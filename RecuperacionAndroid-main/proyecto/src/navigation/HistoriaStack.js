import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Historia from '../containers/Historia';

const HStack = createNativeStackNavigator();

export default function HistoriaStack(){
   

    return(
        <HStack.Navigator>
            <HStack.Screen name= "Historia" component = {Historia}  options={{title: 'Historia', headerTitleAlign: 'center', headerStyle: { backgroundColor: "#AEE368"}}}/>

          
        </HStack.Navigator>
    );


}