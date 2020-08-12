
import 'react-native-gesture-handler'
import React,{Component} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'




export default class LoadingScreen extends Component{
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user => {
            this.props.navigation.navigate(user ? "App" : "Auth")
        })
    }
    render(){
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Carregando App</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );
  }
   
}
