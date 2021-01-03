import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Alert} from 'react-native'
import {TputTodo, TTodo} from "../../data/todosReducer"

type TTodoEditModeProps = {
    todo: TTodo
    onStopEditing: () => void
    putTodo: TputTodo
}
const TodoEditMode: React.FC<TTodoEditModeProps> = (props) => {
    const [inputValue, setInputValue] = useState(props.todo.description)
    const onChangeHandler = (text: string) => setInputValue(text)
    const onSaveChanges = () => {
        if (inputValue.trim().length > 0) {
            props.putTodo({...props.todo, description: inputValue})
            props.onStopEditing()
        } else Alert.alert("name should be not empty!")
    }

    return (
        <View style={styles.container}>

            <View style={styles.textArea}>
                <TextInput style={styles.text} value={inputValue} placeholder="enter todo name"
                           onChangeText={onChangeHandler}/>
            </View>

            <View style={styles.controlButtonsArea}>

                <View>
                    <Button title="save" color="#31B44C" onPress={onSaveChanges}/>
                </View>

                <View style={{paddingHorizontal: 10}}>
                    <Button title="back" color="#7A7A7A" onPress={props.onStopEditing}/>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        paddingVertical: 10
    },
    textArea: {
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    text: {
        fontSize: 18,
        fontWeight: "600",
        color: "black",
        maxWidth: 130,
        borderBottomWidth: 2,
        borderBottomColor: "#1ea0cb",
        borderStyle: "solid",
    },
    controlButtonsArea: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
})
export default TodoEditMode