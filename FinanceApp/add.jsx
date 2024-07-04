import * as React from 'react';
import { View,StyleSheet} from 'react-native';
import { useState } from 'react';
import { Button, PaperProvider, TextInput } from 'react-native-paper';

export const saveValues = (a,b,c)=>{
  tempList = {
    "type":a,
    "value":b,
    "description":c
  }
  console.log(JSON.stringify(tempList))
}

const Add = (props) => {
  const [spentType,setSpentType] = useState("")
  const [spentValue,setSpentValue] = useState(0)
  const [spentDescription,setSpentDescription] = useState("")

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
          <Button icon="camera" mode="contained" onPress={() => saveValues(spentType,spentValue,spentDescription)}>
            Press me
        </Button>
        </View>
      </View>
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  container:{
    flexGrow:1,
    backgroundColor:"black",
    justifyContent:'center'
  },
  inputStyle:{
    marginTop:10,
    margin:10
  }
});
export default Add;