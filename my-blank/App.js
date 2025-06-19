/* Zona 1 : Importaciones */


import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native'; //importar button
import React,{useState} from 'react'; //se usa para cambiar texto


const Texto=({style})=>{
  const [contenido,setContenido]=useState('Hola Mundo RNative');//contenido ya tiene un valor de arranque
const actualizartexto=()=> {setContenido('Hola mundo como estas?')}; //a continuacion agregamos un view, un text y un boton
  return (
    <View style={{margin: 10}}> 
    <Text style={[styles.text, style]}>{contenido}</Text>
    <Button title='actualizarTexto' onPress={actualizartexto}color="purple"/> 
    </View>
  )
};
 


/* Zona 2 : Main */


export default function App() {
  return (
    <View style={styles.container}>
      <Texto style={styles.red}></Texto>
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
    justifyContent: 'center',
    flexDirection:'row-reverse'
  },
  text:{
    color:'white',
    fontSize:27,
  },
  red:{backgroundColor:'red'},
  blue:{backgroundColor:'blue'},
  green:{backgroundColor:'green'},
});
