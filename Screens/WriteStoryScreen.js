import React from 'react';
import { View, Text, StyleSheet, TextInput , TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import AppHeader from "../AppHeader";
import db from "../config";
import firebase from 'firebase';


export default class WriteStoryScreen extends React.Component{


    constructor(){
        super();
        this.state = {
            storyTitle: '',
            storyAuthor: '',
            story: '',
            transactionMessage: '',
        }
    }


    submitStory = async ()=>{
        var title = this.state.storyTitle;
        var author = this.state.storyAuthor;
        var story = this.state.story;

        db.collection("story").add({
            'title': title,
            'author': author,
            'story': story
        });

        this.setState({
            storyTitle: '',
            storyAuthor: '',
            story: '',
            transactionId: "Story Submitted!"
        });

    }


    render(){
        return(
            <KeyboardAvoidingView>
                <AppHeader />

                <TextInput 
                  placeholder = "Story Title"
                  style = {styles.titleInputBox}
                  placeholderTextColor =  "#F3ECDA"
                  onChangeText = {(text)=>{
                      this.setState({ storyTitle: text })
                  }}/>

                <TextInput 
                  placeholder = "Author Name"
                  style = {styles.authorInputBox}
                  placeholderTextColor = "#F3ECDA"
                  onChangeText = {(text)=>{
                      this.setState({ storyAuthor: text })
                  }}/>

                <TextInput 
                  multiline
                  placeholder = "Story"
                  style = {styles.storyInputBox}
                  placeholderTextColor = "#F3ECDA"
                  onChangeText = {(text)=>{
                      this.setState({ story: text })
                  }}/>

                <TouchableOpacity 
                  style = {styles.submitButton}
                  onPress = {async ()=>{
                      this.submitStory();
                      ToastAndroid.show("Story Submitted", ToastAndroid.SHORT);
                      alert("Submitted I think");
                  }}>
                    <Text style = {styles.submitButtonText}>SUBMIT</Text>  
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }

}

const styles = StyleSheet.create({

    titleInputBox: {
        height: 40,
        backgroundColor: "#78A6BD",
        borderColor: "#11487E",
        borderWidth: 2,
        margin: 50,
        marginBottom: 20,
        color: "#fff",
        overflow: "scroll",
        paddingLeft: 20,      
    },

    authorInputBox: {
        height: 40,
        backgroundColor: "#78A6BD",
        borderColor: "#11487E",
        borderWidth: 2,
        margin: 50,
        marginBottom: 20,
        color: "#fff",
        overflow: "scroll",
        paddingLeft: 20,
    },

    storyInputBox: {
        height: 340,
        backgroundColor: "#78A6BD",
        borderColor: "#11487E",
        borderWidth: 2,
        margin: 50,
        color: "#fff",
        overflow: "scroll",
        padding: 20,
        marginBottom: 30
    },

    submitButton: {
        width: 110,
        height: 45,
        backgroundColor: "#11487E",
        alignSelf: "center",
    },

    submitButtonText: {
        fontSize: 20,
        color: "#F3ECDA",
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 11
    }

})