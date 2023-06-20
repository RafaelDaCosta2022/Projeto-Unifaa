import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Button() {
 return (
   <View style={StyleSheet.container}>
    <TouchableOpacity style={styles.btnConteiner}>
        <Text style={styles.title}>Comprar</Text>
    </TouchableOpacity>
    
   </View>
  );
}
const styles = StyleSheet.create({
    container:{
        
        alignItems: 'center',
        justifyContent: 'center',
         paddingLeft: 40
       
    },
    btnConteiner:{
        width: '90%',
        height:50,
        backgroundColor:'#17181a',
        borderRadius:5,
        marginVertical: '5%',
        marginHorizontal: '5%',
        justifyContent: 'center',
        alignItems: 'center',
       

    },
    title:{
        fontSize:17,
        color: '#fff'
    }
})