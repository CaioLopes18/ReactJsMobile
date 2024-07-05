import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { List } from 'react-native-paper';


const Lista = (props) => {

  return (
    <View style={props.containerStyle}>
  
    <View style={{flexGrow:1}}>
      <FlatList
        data={props.showList}
        renderItem={({ item }) => (
          <List.Item
            title={item.type}
            description={item.description}
            right={() => <List.Item title={`${item.value}`} />}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
 
    </View>
  );
};

export default Lista;
