/* Zona 1 : Importaciones */
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Button} 
from 'react-native';

/* Zona 2 : Main */
export default function App() {
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState('');


const simularCarga =()=>{
  setLoading(true);
  setMensaje('');
  setTimeout(() => {
    setLoading(false);
    setMensaje('CARGA COMPLETA');
  }, 3000);
};

  return (
    <View style = {styles.container}>
      <Text style = {styles.titulo}>
        Carga
      </Text>
      {loading ?(
        <>
        <ActivityIndicator size = "large" color = "#2D9CDB"/>
        <Text style = {styles.texto}>CARGANDO...</Text>
        </>
      ):(
        <>
        <Button title="Iniciar carga" onPress={simularCarga}/>
        {mensaje !== ''&& <Text style={styles.exito}>{mensaje}</Text>}
        </>
      )}
    </View>
  );
}

/* Zona 3 : Estetica del screen */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo:{
    fontSize:22,
    marginBottom:20,
  },
  texto:{
    marginTop: 15,
    color:'gray'
  },
  exito:{
    marginTop:20,
    color:'green',
    fontWeight:'bold'
  }
});
