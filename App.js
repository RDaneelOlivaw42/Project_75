import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import LoginScreen from "./Screens/LoginScreen";
import ReadStoryScreen from "./Screens/ReadStoryScreen";
import WriteStoryScreen from "./Screens/WriteStoryScreen"; 

export default class App extends React.Component {

  render(){
    return(
      <AppContainer />
    )
  }

}


const TabNavigator = createBottomTabNavigator(
{
  WriteStory: { screen: WriteStoryScreen },
  ReadStory: { screen: ReadStoryScreen }
},

{
  defaultNavigationOptions: ({navigation})=>({

    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;

      if(routeName === "WriteStory"){
        return(
          <Image 
          source = {require("./assets/write.png")}
          style = {{width: 40, height: 40}}/>
        )
      }
      else if(routeName === "ReadStory"){
        return(
          <Image 
          source = {require("./assets/read.png")}
          style = {{width: 40, height: 40}}/>
        )
      }

    }
  })

}
);

const SwitchNavigator = createSwitchNavigator({
  Login: { screen: LoginScreen },
  TabNavigator: { screen: TabNavigator }
});

const AppContainer = createAppContainer(SwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});