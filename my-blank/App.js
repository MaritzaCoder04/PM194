/* Zona 1 : Importaciones */

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch} from 'react-native'; //importar button
import React,{useState} from 'react'; //se usa para cambiar texto 


const Interruptor = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View >
      <Text >
        {isEnabled ? 'Activado': 'Desactivado'}
      </Text>
      <Switch
      trackColor={{false: '#767577', true:'#81b0ff'}}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      onValueChange={toggleSwitch}
      value={isEnabled}
      />
    </View>
  ) 
}

/* Zona 2 : Main */

export default function App(){
return (
    <View >
    <Interruptor/>
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
