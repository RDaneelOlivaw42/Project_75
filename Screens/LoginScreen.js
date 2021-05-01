import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import AppHeader from '../AppHeader';


export default class LoginScreen extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            emailID: '',
            password: ''
        }
    }


    login = async (email, password)=>{

        if(email && password){
            try{
                const response = await firebase.auth().signInWithEmailAndPassword(email, password);

                if(response){
                    this.props.navigation.navigate('WriteStory');
                }
            }

            catch(error){
                switch(error.code){
                    case 'auth/user-not-found':
                        alert("User does not exist")
                        console.log("User does not exist")
                    break;

                    case 'auth/invalid-email':
                        alert("Incorrect Email ID or Password")
                        console.log("Invalid")
                    break;
                }
            }
        }

        else{
            alert("Enter Email ID and Password");
        }

    }


    render(){
        return(
            <KeyboardAvoidingView>
                <AppHeader />

                <View style = {styles.loginView}>
                    <TextInput 
                      placeholder = "Enter Email ID"
                      onChangeText = {(text)=>{
                          this.setState({
                              emailID: text
                          })
                      }}
                      keyboardType = 'email-address'
                      style = {styles.loginBox}/>

                    <TextInput 
                      placeholder = "Enter Password"
                      onChangeText = {(text)=>{
                          this.setState({
                              password: text
                          })
                      }}
                      style = {styles.loginBox}
                      secureTextEntry = {true}/>
                </View>

                <View>
                    <TouchableOpacity
                      style = {styles.loginButton}
                      onPress = {()=>{
                          this.login(this.state.emailID, this.state.password);
                      }}>
                        <Text style = {{fontSize: 18}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>

            </KeyboardAvoidingView>
        )
    }

}


const styles = StyleSheet.create({

    loginView: {
        marginTop: 70
    },

    loginBox: {
        width: '35%',
        height: 50,
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#11487E',
        margin: 30,
        padding: 10,
        borderRadius: 5,
        fontSize: 16
    },

    loginButton: {
      height: 50, 
      width: 110, 
      borderWidth: 1, 
      marginTop: 45, 
      padding: 5, 
      borderRadius: 7,
      alignSelf: 'center',
      justifyContent: 'center',
      textAlign: 'center'
    }

})