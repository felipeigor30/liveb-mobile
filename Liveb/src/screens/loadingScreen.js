import React,{Component} from 'react'
import {SafeAreaView, Text} from 'react-native'
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'


export default class LoadingScreen extends Component{
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged(user =>{
            this.props.navigation.navigate(user ? 'Recipe' : 'Carousel')
        });
    }
    
    render(){
        return(
            <SafeAreaView>
                <Text></Text>
            </SafeAreaView>
        );
    }
}