import { StatusBar } from 'expo-status-bar';
import {  StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper'

/* **Objetivo:** Posicionar dois componentes lado a lado */
export default function App() {
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={()=>{console.log("teste")}} >
          Botão 1
      </Button>
      <Button mode="contained" onPress={()=>{console.log("teste")}} >
          Botão 2
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
    flexDirection:"row"
  },
});
