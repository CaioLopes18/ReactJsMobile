import * as React from 'react';
import { View,StyleSheet} from 'react-native';
import { useState } from 'react';
import { Button, PaperProvider, TextInput } from 'react-native-paper';


const Add = (props) => {
  

  const [spentType,setSpentType] = useState("")
  const [spentValue,setSpentValue] = useState(0)
  const [spentDescription,setSpentDescription] = useState("")

  const handlePress = (a,b,c) => {
    const novoObjeto = {
      type: a,
      value: b,
      description: c
    };
    props.addItem([...props.List,novoObjeto])
  };
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View>
        <TextInput
          style={styles.inputStyle}
          label="Tipo de gasto"
          value={spentType}
          onChangeText={text => setSpentType(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Valor Gasto"
          value={spentValue}
          onChangeText={text => setSpentValue(text)}
        />
        <TextInput
          style={styles.inputStyle}
          label="Descrição"
          value={spentDescription}
          onChangeText={text => setSpentDescription(text)}
        />
        </View>
        <View style={{alignItems:'center'}}>
          <Button mode="contained" onPress={()=>{
            handlePress(spentType, spentValue, spentDescription)
          }}>
            Adicionar
        </Button>
        </View>
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    justifyContent:'center'
  },
  inputStyle:{
    marginTop:10,
    margin:10
  }
});
export default Add;