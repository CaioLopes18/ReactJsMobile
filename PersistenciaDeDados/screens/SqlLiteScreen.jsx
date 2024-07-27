import { View, StyleSheet } from "react-native";
import openDatabase from "../db";
import { useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import * as SQLite from "expo-sqlite";

const db = openDatabase();

export default function SqlLiteScreen() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const rows = db.getAllSync("SELECT * FROM usuarios", []);
    console.log(JSON.stringify(rows));
  }, [db]);

  const addUsuario = async () => {
    try {
      await db.withTransactionSync(() => {
        console.log(nome, email);
        db.runAsync("INSERT INTO usuarios (nome, email) VALUES (?,?)", [nome, email]);
      });
    } catch (e) {
      alert("Erro ao adicionar o usuário");
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nome"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <Button
          mode="contained"
          onPress={() => {
            addUsuario();
          }}
        >
          Save
        </Button>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
