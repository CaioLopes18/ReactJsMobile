import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,FlatList } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { Modal, Portal, Text, Button,Picker, PaperProvider, TextInput,List, Icon, IconButton } from 'react-native-paper';


export default function App() {
  
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20};

  const [spentType,setSpentType] = useState("")
  const [spentValue,setSpentValue] = useState(0)
  const [spentDescription,setSpentDescription] = useState("")

  const [list,setList] = useState([])

  const addList =()=>{
    tempList = {
      "type":spentType,
      "value":spentValue,
      "description":spentDescription
    }
    const updatedItems = [...list, tempList]
    setList(updatedItems)
    hideModal()
  }

  return (
    <PaperProvider >
      <View style={styles.container}>
        <View style={{width:"100%", backgroundColor:"#fff"}}>
          <FlatList
            data={list}
            renderItem={({item})=>(
              <List.Item
                title={item.type}
                description={item.description}
                right={props =>
                 <List.Item title={`${item.value}`}/>
                }
              />
            )}
          />
          <View>
          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <TextInput onChangeText={Text=>setSpentType(Text)}/>
              <TextInput 
                onChangeText={
                  Text=>setSpentValue(Text)
                }
              />
              <TextInput
                onChangeText={
                  Text=>setSpentDescription(Text)
                }
              />
              <Button
              onPress={()=>{ 
                addList()
                }}>
                Enviar
              </Button>
            </Modal>
          </Portal>
          <View style={{
            position:"absolute",
            right:10,
            bottom:10
          }}> 
            <Button
            
            buttonColor='orange'
            onPress={showModal}
            >
              <Text style={{fontSize:20}}>+</Text>
            </Button>          
          </View>
        </View>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    flexGrow:1,
    alignItems:"flex-end",
    flexDirection:"row"
  },

});
