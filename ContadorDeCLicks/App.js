import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
/*
**Objetivo:** Criar um contador que incrementa um valor cada vez que um botão é 
pressionado.
**Instruções:**
*/

export default function App() {
  const [Count,setCount] = useState(0)
  return (
    <View style={styles.container}>
      <Text>{Count}</Text>
      <Button  mode="contained" onPress={() => setCount(Count+1)}>
        Press me
      </Button>
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
