import { StyleSheet } from "react-native"
import { Button } from "react-native-paper"

export default function CalculatorButton(props) {
    return (
        <Button
            style={styles.button}
            buttonColor={props.buttonColor}
            mode={props.mode}
            onPress={() => console.log("teste")}
        >
        {props.title}
        </Button>
    )
}

const styles = StyleSheet.create({
    button: {
        margin: 2,
    }
})