
import { useEffect } from 'react';
import { PermissionsAndroid,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Button } from 'react-native-paper'

export default function App() {


  const registerLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert('Permission denied', 'Cannot access location');
      return;
    }
  }
  
  return (
    <View style={styles.container}>
      <Text>Permissions</Text>
      <Button mode="contained" onPress={()=>{registerLocation()}} >
        Request Location Permission
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
