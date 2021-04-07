import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import AppHeader from "../AppHeader";
import db from "../config";
import firebase from 'firebase';


export default class ReadStoryScreen extends React.Component {
    
    render(){
        return(
            <View>
                <AppHeader />
                <Text>Read story</Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({

})