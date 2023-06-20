import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'


  export default function BemVindo() {


    const navigation = useNavigation()

  return (
  

    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
        animation="flipInY"
        
          source={require('../../../assets/logo.png')}
          style={{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <Animatable.View delay={700} animation="fadeInUp"style={styles.containerForm}>
        <Text style={styles.title}>
          "Desperte para o futuro com a energia do sol: sua fonte de poder renovável está aqui!"
        </Text>
        <Text style={styles.text}>Faça o Login para começar</Text>

        <TouchableOpacity
         style={styles.button}
         onPress={()=> navigation.navigate('Login')}
         >
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#38a69d',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    width:'60%',
   backgroundColor:'#38a69d',
   borderRadius:50,
   paddingVertical:8,
    bottom:'15%',    
    alignSelf: 'center',    
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
  }
});
