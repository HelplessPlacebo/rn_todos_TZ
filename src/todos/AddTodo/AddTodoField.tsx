import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';
import {TTodo} from "../../data/todosReducer";

type TAddTodoFieldProps = {
    addTodoInputValue: string
    onAddTodo: (todo: TTodo) => void
    onInputChange: (text:string) => void
}
const AddTodoField: React.FC<TAddTodoFieldProps> = (props) => {
    return (
        <View style={styles.container}>

            <View style={styles.input}>
                <TextInput value={props.addTodoInputValue} onChangeText={props.onInputChange}
                           placeholder="please,enter the issue name" autoCorrect={false} autoCapitalize="none"/>
            </View>

            <View style={styles.button}>
                <Button onPress={() => props.onAddTodo({
                    id: Date.now(),
                    description: props.addTodoInputValue,
                    completed: false
                })}
                        title="add" color="#ED8D11"/>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: "#1ea0cb",
        borderStyle: "solid",
        width: "70%"
    },
    button: {
        width: 70
    }
})
export default AddTodoField