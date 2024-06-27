import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Switch } from 'react-native-paper';
import { useState } from 'react';

/* **Objetivo:** Implementar uma caixa de verificação usando um `Switch` */ 

export default function App() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [txt,setTxt]= useState("Desligado")
  const [background,setBackground] = useState("white")
  const lamp = {
    baseLampada:{
      backgroundColor:"black",
      width:30,
      height:30,
      borderBottomRightRadius:10,
      borderBottomLeftRadius:10
    },
    topoLampada:{
      backgroundColor: `${background}`,
      width: 50,
      height: 50,
      borderRadius: 10,
      borderColor: 'gray',
      borderWidth: 1,
    },
    lampadaContainer:{
      alignItems: 'center',
      justifyContent: 'center',
    },
  }
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    if (isSwitchOn === true){
      setTxt("Desligado")
      setBackground("white")
    } else{
      setTxt("Ligado")
      setBackground("yellow")
    }
  }
  
  return (
    <View style={styles.container}>
        <View style={lamp.lampadaContainer}>
          <View style={lamp.topoLampada}>
          </View>
          <View style={lamp.baseLampada}>
          </View>
        </View>
          <Text>
            {txt}
          </Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
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

