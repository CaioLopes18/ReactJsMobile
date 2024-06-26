import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native'; 

/***Objetivo:** Adicionar uma imagem ao aplicativo.*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20}}>
        Inserindo uma imagem
      </Text>
      <Text>
        ReactLogo
      </Text>
      <Image 
      style={styles.imgContainer}
      source={require("./Src/Images/ReactLogo.png")}
      />
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
  imgContainer:{
    marginTop:10,
    width:100,
    height:100,
  }
});
