import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import Donut from './donut';
import Add from './addItem';

export default function App() {
  const [list, setList] = useState([
    {
      type: "alimentação",
      value: "24.90",
      description: "hamburguer"
    }
  ]);

  return (
    <View style={styles.container}>
       <Add addItem={setList} list={list} />
      <Donut list={list} />
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
