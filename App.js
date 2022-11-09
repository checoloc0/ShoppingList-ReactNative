import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View ,Button,Text,Pressable,FlatList, TouchableOpacity, Modal, Alert} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [textItem,setTextItem]= useState('');
  const [itemList,setItemList]=useState([]);
  const [itemSelected, setItemSelected] = useState ({});
  const [modalVisble, setModalVisble]= useState(false);


const onHandleChangeItem = (t) => {
  setTextItem(t)
 // console.log(t)
}
const addItem = () => {
    setItemList(currentItems=> [
      ...currentItems,
      {id: Math.random().toString(),value:textItem}
    ])
    setTextItem()
}

const selectedItem = (id) => {
  setItemSelected(itemList.filter((item) => item.id === id) [0]);
  setModalVisble(true);
}

const deleteItem= (id)=> {
  setItemList((currentState)=>  
    currentState.filter((item)=> item.id !== itemSelected.id)

    );
      setItemSelected ({});
      setModalVisble(false);
}

const renderItem =({item}) =>(
  <TouchableOpacity  onPress={ ()=> selectedItem(item.id)  } >
  <Text> {item.value}  </Text>
  </TouchableOpacity>    

)







  return (
    <View style={styles.container}>
        <Text style = {{fontSize:30}}>Shopping List :)</Text>
        <View style={styles.inputcontainer}>
  
          <TextInput value={textItem} onChangeText={onHandleChangeItem} placeholder="new item"
           style={{borderBottomColor:'black',borderBottomWidth:.5,width:200,height:20}} />

        <TouchableOpacity  onPress={addItem}>     
        <Text> Add</Text>
        
        </TouchableOpacity>
    </View>
      <View>
          <FlatList data={itemList}
            renderItem={ renderItem } keyExtractor={(item)=> item.id}/>

      </View>

      <Modal animationType='slide'
            transparent={true}
            visible={modalVisble}
            onRequestClose={ ()=>{
                Alert.alert("Modal has been closed,");
              setModalVisble(!modalVisble);
            }

            }
      >
        <View style={styles.centeredView} >
            <View >
                <Text>Quieres Eliminar este elemento?</Text>
                <Pressable onPress={()=> deleteItem()} style={{backgroundColor:'blue'}}>
                    <Text>Eliminar</Text>

                </Pressable>

            </View>
        </View>
      </Modal>
            



        
 {/*
<View>
          {itemList.map ((item)=>(
              <View >
                <Text> {item.value}  </Text>

              </View>
         ) )}
        </View>*/

 }
    </View>    

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#344955",
    alignItems: "center",
    paddingTop: 100,
  },
  inputcontainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
  },
  button: {
    backgroundColor: "#F9AA33",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
   centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
});
