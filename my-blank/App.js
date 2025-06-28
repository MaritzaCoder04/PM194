/* Zona 1 : Importaciones */
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView} 
from 'react-native';

/* Zona 2 : Main */
export default function App() {
  return (
    <ScrollView 
    contentContainerStyle={styles.background} 
    showsVerticalScrollIndicator={false}
    horizontal={true}>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
      <Text>Hola Mundo</Text>
    </ScrollView>
  )
}

/* Zona 3 : Estetica del screen */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay:{
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    color:'white',
    fontSize:32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle:{
    color:'white',
    fontSize: 18,
  }
});
