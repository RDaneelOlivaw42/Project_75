import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import AppHeader from "../AppHeader";
import db from "../config";
import firebase from 'firebase';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      search: '',
      allStories: [],
      searchedStory: [],
      filterState: ''
    }
  }


  searchStory = async (text)=>{
    var enteredText = text.split("");

    if(enteredText[0] === 'T'){
      const transaction = await db
      .collection("story")
      .where("title","==",text)
      .get()

      transaction.docs.map((doc)=>{
        this.setState({
          searchedStory: [...this.state.searchedStory, doc.data()]
        })
      });
    }

    else if(enteredText[0] === 'A'){
      const transaction = await db
      .collection("story")
      .where("author","==",text)
      .get();

      transaction.docs.map((doc)=>{
        this.setState({
          searchedStory: [...this.state.searchedStory, doc.data()]
        })
      });
    }

    else if(enteredText[0] === 'S'){
      const transaction = await db
      .collection("story")
      .where("story","==",text)
      .get();

      transaction.docs.map((doc)=>{
        this.setState({
          searchedStory: [...this.state.searchedStory, doc.data()]
        })
      })
    }
  }


  componentDidMount = async ()=>{
    const query = await db.collection("story").get();

    query.docs.map((doc)=>(
      this.setState({
        allStories: [...this.state.allStories, doc.data()],
      })
    ));

    console.log(this.state.allStories);
  }


  render(){

    return(
      <View>
        <AppHeader />


        <View style = {styles.searchStyle}>
          <TextInput 
            placeholder = "Filter and search for Title, Author or Story"
            style = {styles.searchBarStyle}
            placeholderTextColor = '#F3ECDA'
            onChangeText = {(text)=>{
              this.setState({ search: text })
            }}
            defaultValue = {this.state.filterState}
            />

            <TouchableOpacity
              onPress = {()=>{
                this.searchStory(this.state.search)
              }}
              style = {styles.searchButton}>
              <Image source = {require('../assets/searchIcon.png')} style = {styles.iconImage}/>
            </TouchableOpacity>
        </View>


        <View style = {styles.filterView}>
          <Text style = {styles.labelText}>FILTER: </Text>

          <TouchableOpacity 
            style = {styles.filterButton}
            onPress = {()=>{
              this.setState({
                filterState: 'Title: '
              })
            }}>
              <Text style = {styles.filterButtonText}>TITLE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = {styles.filterButton}
            onPress = {()=>{
              this.setState({
                filterState: 'Author: '
              })
            }}>
            <Text style = {styles.filterButtonText}>AUTHOR</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style = {styles.filterButton}
            onPress = {()=>{
              this.setState({
                filterState: 'Story: '
              })
            }}>
            <Text style = {styles.filterButtonText}>STORY</Text>
          </TouchableOpacity>
        </View>


        <ScrollView>
          {this.state.searchedStory.map((item, index)=>{
            return(
            <View style = {{margin: 6}}> 
              <View style = {styles.lineLeft} /> 
              <Text style = {styles.showText}>Search Results</Text> 
              <View style = {styles.lineRight}/>
              <Text style = {{marginTop: 10}}>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text>{item.story}</Text>
            </View>
            )
          })}
        </ScrollView>

      </View>
    )
  }

}

const styles = StyleSheet.create({

  searchStyle: {
      marginTop: 20,
      backgroundColor: '#11487E',
      width: '99%',
      height: 60,
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 20
  },

  searchBarStyle: {
      backgroundColor: "#6A93A6",
      width: '93%',
      alignSelf: 'flex-start',
      marginLeft: 20,
      height: 40,
      borderRadius: 5,
      paddingLeft: 10,
      color: '#fff'
  },

  searchButton: {
    width: '4%',
    alignSelf: 'flex-end',
    backgroundColor: '#F3ECDA',
    height: 30,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: -30,
    marginRight: 10,
  },

  iconImage: {
    alignSelf: 'center',
    width: 30, 
    height: 30
  },

  showText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: -10
  },

  lineLeft: {
    backgroundColor: 'black',
    width: '45%',
    alignSelf: 'flex-start',
    height: 2
  },

  lineRight: {
    backgroundColor: 'black',
    width: '45%',
    alignSelf: 'flex-end',
    height: 2,
    marginTop: -10
  },

  filterView: {
    flex: 4,
    flexDirection: 'row',
  },

  labelText: {
    fontSize: 20,
    padding: 9
  },

  filterButtonText: {
    fontSize: 20,
    backgroundColor: '#82B7CF',
    padding: 9,
    marginRight: 12
  }

});

/*
<FlatList 
          data = {this.state.allStories}
          
          renderItem = {({item})=>(
            <View style = {{borderBottomWidth: 2, margin: 6}}>
              <Text>{item.title}</Text>
              <Text>{item.author}</Text>
              <Text style = {{height: 30,overflow: 'scroll', marginBottom: 10}}>{item.story}</Text>
            </View>
          )}

          keyExtractor = {(item, index)=> index.toString()}
        />

*/