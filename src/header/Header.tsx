import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type THeaderProps={
    title : string
}
const Header:React.FC<THeaderProps>=(props)=>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical : 20,
        height:"100%",
        backgroundColor: '#12b2ff',
        alignItems: 'center',
    },
    text:{
        paddingVertical : 10,
        color :"white",
        fontSize : 20,
    }
})
export default Header