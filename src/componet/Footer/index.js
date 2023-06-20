import React from 'react';
import { View,Text, StyleSheet, ScrollView, Image,SafeAreaView } from 'react-native';
import Painel from '../Painel';


export default function Footer() {
 return (
    <View>
        <Text style={StyleSheet.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
        <View style={{flexDirection: 'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{marginHorizontal: 10}}>
                    <Painel img={require('../../../assets/1.png')} cost='489,00'>
                    Painel Solar 155w Monocristalino
                    </Painel>                             
                </View>

                <View style={{marginHorizontal: 10}}>
                    <Painel img={require('../../../assets/2.png')} cost='R$855,00'>
                    Painel Solar Portátil - 61w
                    </Painel>                             
                </View>

                <View style={{marginHorizontal: 10}}>
                    <Painel img={require('../../../assets/4.png')} cost='R$120,90'>
                    Novo Placa Solar 7,2v 6w C/ Usb P/ Camping/carrega Aparelhos
                    </Painel>                             
                </View>

            </ScrollView>
        </View>
 </View>  
 
 );
}

const style = StyleSheet.create({
    title:{
        fontSize:24,
        marginVertical:'2%',
        paddingHorizontal:'2%'
        
          
    }
    
})