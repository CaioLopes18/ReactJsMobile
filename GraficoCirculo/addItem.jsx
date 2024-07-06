import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const Add = (props) => {
    const [spentType, setSpentType] = useState("");
    const [spentValue, setSpentValue] = useState("0");
    const [spentDescription, setSpentDescription] = useState("");

    const handlePress = () => {
        const novoObjeto = {
            type: spentType,
            value: spentValue,
            description: spentDescription
        };
        props.addItem([...props.list, novoObjeto]);
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.inputStyle}
                label="Tipo de gasto"
                value={spentType}
                onChangeText={text => setSpentType(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label="Valor Gasto"
                value={spentValue}
                onChangeText={text => setSpentValue(text)}
            />
            <TextInput
                style={styles.inputStyle}
                label="Descrição"
                value={spentDescription}
                onChangeText={text => setSpentDescription(text)}
            />
            <Button mode="contained" onPress={handlePress}>
                Adicionar
            </Button>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center'
    },
    inputStyle: {
        marginTop: 10,
        margin: 10
    }
});

export default Add;
