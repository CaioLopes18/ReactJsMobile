import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { List } from 'react-native-paper';
import { saveValues } from './add';
// Função que retorna um objeto com list e Lista
const Lista = (props) => {
  // Estado local para armazenar a lista
  const [list, setList] = useState([]);

  // Função para adicionar um item à lista
  const addItem = (item) => {
    setList(prevList => [...prevList, item]);
  };

  return (
    <View style={props.containerStyle}>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <List.Item
            title={item.type}
            description={item.description}
            right={(props) => <List.Item title={`${item.value}`} />}
          />
        )}
      />
    </View>
  );
};

export default Lista; // Exporta o componente Lista 

