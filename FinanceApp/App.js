import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import * as React from 'react';

import {  Text, PaperProvider, BottomNavigation } from 'react-native-paper';
import Add from './add';
import Lista from './list';

const listRoute= () =><Lista containerStyle={styles.listContainer}/>;

const AlbumsRoute = () => <Text>Teste</Text>;

const RecentsRoute = () => <Add/>;


export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'list', title: 'Lista', focusedIcon: '', unfocusedIcon: ''},
    { key: 'albums', title: 'Estatisticas', focusedIcon: '' },
    { key: 'recents', title: 'Adicionar', focusedIcon: 'plus' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    list: listRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
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