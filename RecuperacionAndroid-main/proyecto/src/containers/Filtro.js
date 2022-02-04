import React, {useState} from "react";
import { FlatList, Text, View } from "react-native";

const users = [
    { id: 1, nombre: 'Antonio Romero', edad: 32, género: 'Masculino', instrumento: 'Saxofón' },

    { id: 2, nombre: 'Sara Durán', edad: 35, género: 'Femenino', instrumento: 'Violín' },

    { id: 4, nombre: 'Raul Coronado', edad: 21, género: 'Masculino', instrumento: 'Trompeta' },

    { id: 5, nombre: 'Isabel Sánchez', edad: 45, género: 'Femenino', instrumento: 'Piano' },

    { id: 6, nombre: 'Josefa Navarro', edad: 77, género: 'Femenino', instrumento: 'Violín' },

    { id: 7, nombre: 'Juan Pedrosa', edad: 19, género: 'Masculino', instrumento: 'Saxofón' },

    { id: 9, nombre: 'Ramon Rey', edad: 50, género: 'Masculino', instrumento: 'Trompeta' },

    { id: 10, nombre: 'Esther Barros', edad: 33, género: 'Femenino', instrumento: 'Trompeta' },

    { id: 11, nombre: 'Ignacio Villalba', edad: 56, género: 'Masculino', instrumento: 'Piano' },

    { id: 12, nombre: 'Roberto Soria', edad: 42, género: 'Masculino', instrumento: 'Saxofón' },

    { id: 13, nombre: 'Cristina Macia', edad: 25, género: 'Femenino', instrumento: 'Guitarra' },

    { id: 14, nombre: 'Erica Escudero', edad: 39, género: 'Femenino', instrumento: 'Guitarra' },

    { id: 15, nombre: 'Angel Lima', edad: 63, género: 'Masculino', instrumento: 'Guitarra' }]

   export default function FiltroPantalla({route}) {

        console.log("-----instrumento: ", route.params.instrumento);
        function filtro({item}) {
          console.log("-----item: ", item.instrumento);
          if (item.instrumento == route.params.instrumento) {
            return <View>
              <Text>{item.nombre}</Text>
              <Text>{item.edad}</Text>
              <Text>{item.instrumento}</Text>
      
            </View>
          }
        }
        return (
      
          <View>
            <FlatList
              data={users}
              renderItem={filtro}
              kayExtractor={item => item.id} />
      
          </View>
        );
      
      
      }
      