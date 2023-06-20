import React from 'react';
import { View, Text ,StyleSheet, ScrollView, Image, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'


import Painel from '../../componet/Painel';

export default function Home() {
const navigation = useNavigation();

 return (
   <View style={styles.container}> 
    <View style={styles.header}>
      <Image
      source={require('../../../assets/banner.png')}
      style={styles.image}
      />

      <View style={styles.textContainer}>
        <Text style={styles.text}>PAINEL</Text>
        <Text style={[styles.text,{color: '#CECECF'}]}>•</Text>
        <Text style={styles.text}>SOLAR</Text>
        <TouchableOpacity style={{position: 'absolute', right:0, alignSelf: 'center'}}>
          <MaterialIcons
          name="filter-list"
          size={40}
          color="#000"          
          />
        </TouchableOpacity>
      </View>

    </View>
      <View style={styles.line}/>

    <ScrollView>
        <Text style={styles.text}>LANÇAMENTO</Text>
        <View style={{flexDirection:'row', justifyContent:'space-around' }}>
         <Painel img={require('../../../assets/1.png')} cost="R$489,00" onClick={()=>navigation.navigate('Detail')} >
         Painel Solar 155w Monocristalino
         </Painel>
         <Painel img={require('../../../assets/2.png')} cost="R$855,00"onClick={()=>navigation.navigate('Detail')}>
         Painel Solar Portátil - 61w
         </Painel>
        </View>    

        <View style={{flexDirection:'row', justifyContent:'space-around',  }}>
         <Painel img={require('../../../assets/3.png')} cost="R$1.179"onClick={()=>navigation.navigate('Detail')}>
         Kit 2xpainel  Solar 150w Contro30a Cabo
         </Painel>
         <Painel img={require('../../../assets/5.png')} cost="R$160,90"onClick={()=>navigation.navigate('Detail')}>
         Kit Bateria Portátil Painel Solar 2
         </Painel>
        </View>    

        <View style={{flexDirection:'row', justifyContent:"space-around" }}>
         <Painel img={require('../../../assets/4.png')} cost="73,98"  onClick={()=>navigation.navigate('Detail')}>
         Novo Placa Solar 7,2v 6w C/ Usb P/ Camping/carrega Aparelhos
         </Painel>
         <Painel img={require('../../../assets/6.png')} cost='R$120,90'onClick={()=>navigation.navigate('Detail')}>
         Kit Bomba D'agua 45w 60metros 1400 Litros/dia+
         </Painel>
        </View>    
    </ScrollView>     


   </View>
 );
}

const styles = StyleSheet.create({
  container:{
    
    flex:1,
    width:'100%',
   
    backgroundColor:"#fff"
  },
header:{
  marginBottom: 3
},
image:{
  width:'100%',
 
  
},
textContainer:{
  flexDirection: 'row',
  marginVertical: '5%',
  marginHorizontal: '5%',  
},
text:{
  fontSize: 23,
  fontWeight: 'bold',
  marginHorizontal: '1%'
},
line:{
  borderBottomColor: '#D8d8d8',
  borderBottomWidth: 1

  
}

})