import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';

export default function App() {

  const [checked, setChecked] = useState(false);
  const [tema,setTema] = useState("Black")
  function trocarTema(){
    setChecked(!checked);
    if (checked === true){
      setTema("white")
    } else{
      setTema("#4e4e4e")
    }
  }

  return (
    <View style={[styles.container,{backgroundColor:`${tema}`}]}>
      <Text style={{fontSize:20}}>
        Trocando tema do app
      </Text>
      <Checkbox
      status={checked ? 'checked' : 'unchecked'}
      onPress={() => trocarTema()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
