import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import Filtro from '../containers/Filtro';
import Musicos from '../containers/Musicos';





const UStack = createNativeStackNavigator();


export default function Usuariostack() {

    
    return (
      <UStack.Navigator initialRouteName='Musicos'>
        <UStack.Screen name="Musicos" component={ Musicos }  options={{ title: 'Musicos',headerStyle: { backgroundColor: '#AEE368'}, headerTitleAlign: "center", headerShown: false} }/>
        <UStack.Screen name="Filtro" component={Filtro} options={{ title: 'Filtro',headerStyle: { backgroundColor: 'red' }} }/>
      </UStack.Navigator>
    );
  }