import * as React from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HistoriaStack from './src/navigation/HistoriaStack';
import MusicoStack from './src/navigation/MusicoStack';






const Tab = createBottomTabNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Historia') {
              iconName = focused
                ? 'body'
                : 'body';
            } else if (route.name === 'Musicos') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'Blue',
          tabBarInactiveTintColor: '#AEE368',
        })}
      >
        <Tab.Screen name="Historia" component={HistoriaStack} options={{ headerStyle: { backgroundColor: '#AEE368'}, headerTitleAlign: "center"  }} />
        <Tab.Screen name="Musicos" component={MusicoStack}  options={{ headerStyle: { backgroundColor: '#AEE368' }, headerTitleAlign: "center"}} />

      </Tab.Navigator>
    </NavigationContainer >
  );
}









