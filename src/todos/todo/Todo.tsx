import React, {useState} from 'react'
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import EditIcon from "../../../assets/editIcon.jpeg"
import DeleteIcon from "../../../assets/deleteIcon.jpeg"
import TodoEditMode from "./TodoEditMode";
import {TdeleteTodo, TputTodo, TTodo} from "../../data/todosReducer";

type TTodoProps={
    deleteTodo:TdeleteTodo
    putTodo : TputTodo
    todo : TTodo
}
const Todo : React.FC<TTodoProps> = (props) => {
    const onDelTodo = () => props.deleteTodo(props.todo.id)
    const [isEditing, setIsEditing] = useState(false)
    const onStartEditing = () => setIsEditing(true)
    const onStopEditing = () => setIsEditing(false)

    return (
        <View>
            {
                isEditing
                    ? <TodoEditMode putTodo={props.putTodo} onStopEditing={onStopEditing} todo={props.todo}/>
                    : <View style={styles.container}>
                        <View style={styles.textArea}>

                            <Text style={styles.text}>
                                {props.todo.description}
                            </Text>

                        </View>

                        <View style={styles.controlButtonsArea}>

                            <View style={styles.imgContainer}>
                                <TouchableOpacity onPress={onStartEditing}>
                                    <Image style={styles.img} source={EditIcon}/>
                                </TouchableOpacity>
                            </View>

                            <View style={{paddingHorizontal: 10}}>
                                <TouchableOpacity onPress={onDelTodo}>
                                    <Image style={styles.img} source={DeleteIcon}/>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
            }

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
        maxWidth: 185
    },
    controlButtonsArea: {
        flexDirection: "row",
    },
    imgContainer: {
        paddingHorizontal: 10
    },
    img: {
        width: 25,
        height: 25,

    }
})
export default Todo