import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';

/* **Objetivo:** Criar um aplicativo que muda o texto exibido com base no que o usuário digitar.*/

export default function App() {
  const [text,setText] = useState("")
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textContainer}>Insira um texto:</Text>
        <Text style={styles.textContainer}>{text}</Text>
      </View>
      <View>
        <TextInput style={styles.inputContainer}
          onChangeText={text => setText(text)}
        />
      </View>
      
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
  textContainer:{
    textAlign:"center",
    margin:10,
    fontSize:30
  },
  inputContainer:{
    width:300,
  }
});
