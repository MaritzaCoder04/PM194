/* Zona 1 : Importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Texto=({style})=>{
  const [contenido,setContenido]=useState('Hola Mundo RNative')//contenido ya tiene un valor de arranque 
  const actualizaTexto=()=>{setContenido('Estado actualizado del Text')} //funcion arrow :)
  return (
    <Text style={[styles.text, style]} onPress={actualizaTexto}> {contenido} </Text>//como es arrow no se ponen parentesis
  )
};

/* Zona 2 : Main */

export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red} ></Texto>
      <Texto style={styles.blue}></Texto>
      <Texto style={styles.green}></Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3 : Estetica del screen */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'baseline',
    flexDirection: 'row',
    justifyContent: 'centers'
  },
  text:{
    color:'white',
    fontSize:27
  },
  red:{backgroundColor:'red'},
  blue:{backgroundColor:'blue'},
  green:{backgroundColor:'green'},
});
