import React from 'react';
import { useEffect } from 'react';
import { View, Text, Image, ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import Dot from '../../componet/Dot';
import SizeButton from '../../componet/SizeButton';
import Button from '../../componet/Button';
import Footer from '../../componet/Footer';

export default function Detalhes({navigation}) {
  useEffect(()=> {
    navigation.setOptions({
         headerTitle: 'Detalhes Dos Produtos'
    })
},[])
  

 return (
   <ScrollView style={styles.container}>
    <Image
    source={require('../../../assets/detail.png')}
    style={styles.image}
    resizeMode='cover'
    />   
    <View>

      <View>
        <Text style={[styles.title, {fontSize:24}]}>R$1.179</Text>
      </View>

      <View opacity={0.4}>
        <Text style={[styles.title, {fontSize:30}]}> Kit 2xpainel  Solar 150w Contro30a Cabo</Text>
      </View>

      <View style={styles.dotContainer}>
        <Dot color="#2379f4"/>
        <Dot color="#fb6e53"/>
        <Dot color="#ddd"/>
        <Dot color="#000"/>
      </View>

      <View styles={{flexDirection:'row', width: '100%'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeButton bgColor="#17181a" color="#FFF">450W</SizeButton>
          <SizeButton>350W</SizeButton>
          <SizeButton>250W</SizeButton>
          <SizeButton>150W</SizeButton>             
        </ScrollView>
      </View>

      <View style={styles.textContent}>
        <Text style={styles.textTitle}>
        Kit 2xpainel Placa Energia Solar 150w Contro30a Cabo E Mc4
        </Text>
        <Text style={styles.textContent}>
        Função fotocélula acendimento automático ao cair da noite e desligamento conforme seu ajuste de horário
        </Text>
        <Text style={styles.textList}>
        Informações técnicas placa solar 155 Wp
        </Text>
        <Text style={styles.textList}>
        Potência máxima (Pmax): 155W
        Tensão de máxima potência (Vm): 20,64V
        Corrente da máxima potência (Im): 7,51A
        Tensão de circuito aberto (Voc): 24,46V
        Corrente do curto-circuito (Isc): 8,31A
        Tipo de células: Silício Monocristalino
        Eficiência do módulo: 18,05%
        Tolerância de potência: +/- 5W
        Dimensões (mm): 1270 x 676 x 30 (mm)
        Peso (Kg): 11
        </Text>
      </View>
      <Button/>
      <View style={styles.line}/>

      <Footer/>

    </View>
   </ScrollView>   
 );
}

const styles= StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor:'#fff'

  },
  image:{
    width:'100%'   

  },
  title:{
  fontSize:25,
  fontWeight: 'bold',
paddingHorizontal:'14%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '5%'


  },
  textContent:{
    fontSize:18,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal:'2%'
  },
  textTitle:{
    fontSize:22,
    marginVertical: '2%'
  },
  textList:{
    fontSize:16,
    lineHeight:25

  },
  line:{
    borderWidth: 1,
    borderBottomColor:'#DDD',
    marginVertical: '2%'

  }
  



})