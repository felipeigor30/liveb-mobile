import {  } from 'react-native-gesture-handler';
import React, { Component } from 'react'
import {} from 'react-native'
import TabNavigator from '../components/tabNavigator';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'



export default class Recipe extends Component{
    constructor(props){
        super(props)
        this.state={
          email: '',
          displayName: 'Liveber'
        }
      }
    componentDidMount(){

        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
            const {displayName,email} = firebase.auth().currentUser;
            this.setState({email, displayName})
          }else{
            this.setState({displayName: 'Liveber'})
          }
        })
        
        firebase.auth().onAuthStateChanged((user)=>{
          if(user){
              const userID = firebase.auth().currentUser.uid
              firebase.firestore().collection('users').doc(userID).onSnapshot(doc =>{
                var teste = doc.data().possuiPlano
                firebase.auth().onAuthStateChanged((user) => {
                    if (user  && teste === false) {
                        this.props.navigation.navigate("EscolherPlano")
                    } 
                })
              }) 
          }else{
              console.log('Erro na doc.data.plano') 
          }
        })
      
      }
    render(){
        return(
            <TabNavigator />
        )
    }
}