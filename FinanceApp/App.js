import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddItem from './Add_item';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <AddItem>

        </AddItem>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%"
  },
});
