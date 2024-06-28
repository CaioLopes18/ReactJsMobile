import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
/* **Objetivo:** Mostrar um alerta quando um botão é pressionado */
export default function App() {
  function showAlert(){
    Alert.alert(
      "Titulo do Alerta",
      "Descrição do alerta",
      [
        {
          text: "Cancel",
          onPress: ()=>{  Alert.alert("Cancelado","Você cancelou")}
        },
        {
          text: "Confirmar",
          onPress: ()=>{ Alert.alert("Confirmado","Você confirmou")}
        }
      ],
      {
        cancelable: true,
        onDismiss: ()=>{
          Alert.alert("Você clicou fora da área","Sua ação foi cancelada")
        }
      }
    );
  }
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={()=>{ showAlert()}}>
          Botão de alerta
      </Button>
      <StatusBar style="auto" />
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
