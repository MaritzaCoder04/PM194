/* Zona 1 : Importaciones */
import * as SplashScreen from 'expo-splash-screen';
import React,{useEffect, useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';

/* Zona 2 : Main */
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [splash, setAppready] = useState(false);
  useEffect(() => {
    setTimeout(async () => {
      setAppready(true);
      await SplashScreen.hideAsync();
    }, 2000);
  }, []);
}



/* Zona 3 : Estetica del screen */

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title:{
    color:'#333',
    fontSize:17,
    marginBottom: 6,
    alingSelf: 'flex-start',
  },
  input: {
  heignt: 44,
  borderColor: '#bbb',
  borderWidth: 1,
  paddingHorizontal: 10,
  marginBottom: 16,
  borderRadius: 8,
  backgroundColor: '#fff',
  widht: '100%',
  fontSize: 15,
  },
});
