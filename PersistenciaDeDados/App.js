import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PaperProvider } from 'react-native-paper';
import AsyncStorageTeste from './screens/AsyncStorageScreen';
import SqlLiteScreen from './screens/SqlLiteScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="asyncStorageTeste" component={AsyncStorageTeste}/>
        <Tab.Screen name="SqlLite" component={SqlLiteScreen}/>
      </Tab.Navigator>

  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
