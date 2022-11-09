

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View ,Button,Text,Pressable} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [textItem,setTextItem]= useState('')
  const [itemList,setItemList]=useState([])


  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }


  return (
    <View style={styles.container}>
        <View style={styles.itemcontainer}>
          <Text>Esta es mi primer aplicación</Text>
        <TextInput value={textItem}  placeholder="Add 1" style={{borderBottomColor:'black',borderBottomWidth:.5,width:200,height:20}} />
        <Button title='Agregar' />
        </View>
        <View style={styles.itemcontainer} >
        <TextInput placeholder="Add Item1 " style={{borderBottomColor:'black',borderBottomWidth:.5,width:200,height:20}} />
        <TextInput placeholder="Add Item2" style={{borderBottomColor:'black',borderBottomWidth:.5,width:200,height:20}} />
        <TextInput placeholder="Add Item3" style={{borderBottomColor:'black',borderBottomWidth:.5,width:200,height:20}} />
        <Pressable>
        <Text>*</Text>
        </Pressable>
        <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
        </View>
    </View>    

  );
}

const styles = StyleSheet.create({
  container: {
  paddin:10,
  marginTop:60
  },
  itemcontainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    
  },


});
