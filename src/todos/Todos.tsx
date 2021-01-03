import React, {useState} from 'react'
import {StyleSheet, View, Keyboard, Alert, FlatList} from 'react-native'
import AddTodoField from "./AddTodo/AddTodoField"
import Todo from "./todo/Todo"
import {addTodo, deleteTodo, putTodo, TaddTodo, TdeleteTodo, TputTodo, TTodo, TTodos} from "../data/todosReducer"
import {connect} from "react-redux"
import {TGlobalState} from "../data/redux-store"

export type TTodosOwnProps = {}

type T_MSTP_Todos = {
    todos: TTodos
}
type T_MDTP_Todos = {
    addTodo: TaddTodo
    deleteTodo: TdeleteTodo
    putTodo: TputTodo
}


const Todos: React.FC<TTodosOwnProps & T_MSTP_Todos & T_MDTP_Todos> = (props) => {
    const [addTodoInputValue, setAddTodoInputValue] = useState("")
    const onInputChange = (text: string) => {
        setAddTodoInputValue(text)
    }
    const onAddTodo = (todo: TTodo) => {
        if (addTodoInputValue.trim()) {
            setAddTodoInputValue("")
            Keyboard.dismiss()
            props.addTodo(todo)
        } else Alert.alert("todo name should be not empty")
    }

    return (
        <View style={styles.container}>

            <View style={styles.AddTodoArea}>
                <AddTodoField addTodoInputValue={addTodoInputValue} onInputChange={onInputChange} onAddTodo={onAddTodo}/>
            </View>

            <FlatList style={styles.todoContainer}
                      keyExtractor={item => item.id.toString()}
                      data={props.todos}
                      renderItem={({item}) => (
                          <View style={styles.todo}>
                              <Todo todo={item}
                                    deleteTodo={props.deleteTodo} putTodo={props.putTodo}/>
                          </View>
                      )}>
            </FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    AddTodoArea: {
        paddingVertical: 30
    },
    todoContainer: {
        marginBottom: 80
    },
    todo: {
        borderColor: "#999797",
        borderRadius: 7,
        borderWidth: 2,
        borderStyle: "solid",
        marginBottom: 20,
        paddingVertical: 5,
    }
})

const MSTP = (state: TGlobalState): T_MSTP_Todos => ({
        todos: state.todosData.todos
    }
)
export default connect<T_MSTP_Todos, T_MDTP_Todos, TTodosOwnProps, TGlobalState>
(MSTP, {addTodo, deleteTodo, putTodo})(Todos)