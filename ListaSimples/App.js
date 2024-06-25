import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View,Item } from 'react-native';

/**Objetivo:** Criar um aplicativo que exiba uma lista de itens.*/

export default function App() {
  const lista = ["Pitaya","Laranja","Melancia","Maça","Uva"]
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Text style={{fontSize:30, margin:10}}>
          Top 5 frutas
        </Text>
        <FlatList
          data={lista}
          renderItem={({item})=>(
            <View>
              <Text style={{fontSize:20}}>{item}</Text>
            </View>
          )}
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
  listContainer:{
    width:"60%",
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
