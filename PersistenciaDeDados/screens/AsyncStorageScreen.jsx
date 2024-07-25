import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Button, PaperProvider, TextInput } from "react-native-paper";
import { useState } from "react";

export default function AsyncStorageTeste({navigation}) {
  const [nome, setNome] = useState("");
  const saveData = async (value) => {
    try {
      await AsyncStorage.setItem("@nomePessoa", value);
    } catch (e) {
      alert("Erro ao salvar o dado");
    }
  };
  const getData = async () =>{
    try {
      const value = await AsyncStorage.getItem("@nomePessoa");
      value != null ? alert(value) : alert("Dado não encontrado");
    }catch(e){
      alert("Erro ao recuperar o dado");
    }
  }
  const deleteData = async () =>{
    try{
      await AsyncStorage.removeItem("@nomePessoa");
    }
    catch(e){
      alert("Erro ao deletar o dado");
    }
  }
  return (
    <PaperProvider>
      <View style={styles.container}>
        <TextInput
          label="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <View style={{ marginTop: 20 ,alignItems:"center"}}>
          <Button mode="contained" onPress={() => {saveData(nome)}}>
            Save
          </Button>
        </View>
        <View style={{ marginTop: 20 ,alignItems:"center"}}>
          <Button mode="contained" onPress={() => {getData()}}>
            Get
          </Button>
        </View>
        <View style={{ marginTop: 20 ,alignItems:"center"}}>
          <Button mode="contained" onPress={() => {deleteData()}}>
            Delete
          </Button>
        </View>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
