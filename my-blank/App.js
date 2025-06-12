/* Zona 1 : Importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{useState} from 'react';

const Texto=()=>{
  const [contenido,setContenido]=useState('Hola Mundo RNative')//contenido ya tiene un valor de arranque 
  const actualizaTexto=()=>{setContenido('Estado actualizado del Text')} //funcion arrow :)
  return (
    <Text onPress={actualizaTexto}> {contenido} </Text>//como es arrow no se ponen parentesis
  )
};

const Boton=()=>{
  const [contenido,setContenido]=useState('TLABAJA!!')
  const actualizaBoton=()=>{setContenido('DEJA DE TLABAJAL!!')}
  return (
    <Button title={contenido} onPress={actualizaBoton}> {contenido} </Button>
  )
};

/* Zona 2 : Main */

export default function App() {
  return (
    <View style={styles.container}>
      <Boton ></Boton>
      <Texto ></Texto>
      <Texto ></Texto>
      <Texto ></Texto>
      <StatusBar style="auto" />
    </View>
  );
}

/* Zona 3 : Estetica del screen */

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
