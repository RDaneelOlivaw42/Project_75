import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class AppHeader extends React.Component {
    
    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.text}>STORY HUB</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: 70,
        backgroundColor: '#F3ECDA',
        alignItems: "center",
        justifyContent: "center"
    },

    text: {
        fontSize: 36,
        fontWeight: "bold",
        color: "#00487E",
        textShadowColor: "#6A93A6",
        textShadowOffset: {width: 5, height: 5},
        textShadowRadius: 3
    }

})