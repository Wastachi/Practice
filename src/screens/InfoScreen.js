import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const InfoScreen = () => {
  const navigation = useNavigation(); // Este es un hook que servirá para la navegación 

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Information Screen</Text>

      {/* Es un botón que tiene un pequeño contenedor */}
      <View style={styles.smallButtonContainer}>
        <Button
          title="Go back"
          onPress={() => navigation.navigate('Details')} 
        />
      </View>

      {/* Botón con opacidad, es decir, sin contenedor */}
      <TouchableOpacity 
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.textButton}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  textButton: {
    fontSize: 18,
    color: 'black', // Color igual al del título
    textDecorationLine: 'none', // No lleva subrayado
    marginTop: 20, // Definir espacio entre botón
  },
  smallButtonContainer: {
    width: '40%', // Porcentaje que hará al botón más pequeño y centrado
    marginVertical: 10, // Un espacio vertical entre botón
  },
});

export default InfoScreen;

