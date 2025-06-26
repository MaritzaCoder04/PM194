/* Zona 1 */
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Button, TextInput, ScrollView,
  Switch, Alert, ImageBackground
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

/* Zona 2 */
export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Simula carga de recursos, puede ir aquí si hay otros procesos
        setTimeout(async () => {
          setAppReady(true);
          await SplashScreen.hideAsync();
        }, 2000);
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  const showAlert = () => {
    if (name.trim() === '' || email.trim() === '') {
      Alert.alert('Campos incompletos', 'Por favor, completa todos los campos.');
      return;
    }

    if (!isEnabled) {
      Alert.alert('Términos no aceptados', 'Debes aceptar los términos y condiciones.');
      return;
    }

    Alert.alert('Registro exitoso', `Nombre: ${name}\nCorreo: ${email}`);
  };

  if (!appReady) return null; // No renderiza nada mientras carga

  return (
    <ImageBackground
      source={require('./assets/libros.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Nombre completo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.title}>Correo electrónico:</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu correo"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.title}>Aceptar términos y condiciones:</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchText}>{isEnabled ? 'Acepto' : 'No acepto'}</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>

        <View style={styles.button}>
          <Button title="Registrarme" onPress={showAlert} color="#6200ee" />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

/* Zona Estética */
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 17,
    color: 'white',
    marginBottom: 6,
  },
  input: {
    height: 44,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    width: '80%',
    fontSize: 15,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchText: {
    color: 'white',
    marginRight: 10,
  },
  button: {
    width: '80%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
