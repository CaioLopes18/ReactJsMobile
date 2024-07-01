import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CheckRadioButton from './Button';
import CalculatorButton from './CalculatorButton';

/* aprender a criar componentes externos */

export default function App() {
  return (
    <View style={styles.container}>
      <CheckRadioButton/>
      <CalculatorButton title="teste" mode="contained" buttonColor="orange"/>
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
