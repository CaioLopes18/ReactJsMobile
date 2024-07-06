import { StyleSheet,View } from 'react-native';
import { useState } from 'react';
import {  Text, PaperProvider, BottomNavigation } from 'react-native-paper';
import Add from './addItem';
import Lista from './showList';
import PizzaGraph from './GraphPizza';

export default function App() {
  const [list, setList] = useState([
    {
      type: "alimentação",
      value: "24.90",
      description: "hamburguer"
    }
  ]);
  
  const listRoute= () =><Lista containerStyle={styles.listContainer} List={list}/>;
  
  const AlbumsRoute = () => <PizzaGraph list={list}/>
  
  const addRoute = () => <Add addItem={setList}  List={list}/>;
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'list', title: 'Lista', focusedIcon: 'folder'},
    { key: 'albums', title: 'Estatisticas', focusedIcon: 'database' },
    { key: 'add', title: 'Adicionar', focusedIcon: 'plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    list: listRoute,
    albums: AlbumsRoute,
    add: addRoute,
  });
  return (
    <PaperProvider>
      <View></View>
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      />
    </PaperProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
  listContainer:{
    flexGrow:1,
    padding:20
  }
});