import React from 'react';
import {StyleSheet, View} from 'react-native'
import Header from "./src/header/Header"
import Todos from "./src/todos/Todos"
import {Provider} from "react-redux"
import {store} from "./src/data/redux-store"

export  type TAppProps={}
const App:React.FC<TAppProps> = props => <Provider store={store}>
    <View style={styles.container}>

        <View style={styles.header}>
            <Header title="todos app"/>
        </View>

        <View  style={styles.mainContent}>
            <Todos/>
        </View>

    </View>
</Provider>

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flex: 0.5,
    },
    mainContent: {
        paddingVertical: 20,
        flex: 4
    }

})
