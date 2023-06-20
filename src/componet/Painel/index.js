import React from 'react';
import { View, Text,TouchableOpacity,Image, StyleSheet} from 'react-native';

export default function Painel(props) {

function filterDesc(desc){
  if(desc.length < 27){
    return desc;
  }
  return `${desc.substring(0,23)}...`
}

 return (
 <TouchableOpacity style={styles.container} onPress={props.onClick}>
    <Image
    source={props.img}
    style={styles.painelImg}
    />
    <Text style={styles.painelText}>
      {filterDesc(props.children)}</Text>
    <View opacity={0.4}>
      <Text style={styles.painelText}>{props.cost}</Text>
    </View>
    
    
 </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
        paddingVertical: '2%',
        paddingHorizontal: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
      painelImg:{
        width:'100%'
        
      },
      painelText:{
        fontSize:23
      }

})