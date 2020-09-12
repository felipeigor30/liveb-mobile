import {  } from 'react-native-gesture-handler';
import React, { Component } from 'react'
import {BackHandler} from 'react-native'
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

    // backAction = () => {
    //     return true;
    // };
    
    componentWillUnmount() {
        // this.backHandler.remove();
    }
    componentDidMount(){
      // this.backHandler = BackHandler.addEventListener(
      //   "hardwareBackPress",
      //   this.backAction
      // );
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
                var possuiPlano = doc.data().possuiPlano
                var possuiContaBancaria = doc.data().possuiContaBancaria
                var possuiCotaComprada = doc.data().possuiCotaComprada
                var confirmouContrato = doc.data().confirmouContrato
                var investimentoPago = doc.data().investimentoPago
                var numeroPlano = doc.data().numeroPlano
                firebase.auth().onAuthStateChanged((user) => {
                    if (user  && possuiPlano === false) {
                        this.props.navigation.navigate("EscolherPlano")
                    }else if(user && possuiPlano === true && numeroPlano === 1 && possuiCotaComprada === false){
                        this.props.navigation.navigate("ComprarCotasGold")
                    }else if(user && possuiPlano === true && numeroPlano === 2 && possuiCotaComprada === false){
                      this.props.navigation.navigate("ComprarCotasPlatinum")
                    }else if(user && possuiPlano === true && numeroPlano === 3 && possuiCotaComprada === false){
                      this.props.navigation.navigate("ComprarCotasBlack")
                    }else if(user && possuiPlano === true && possuiCotaComprada === true && possuiContaBancaria === false){
                      this.props.navigation.navigate("ConfirmarDeposito")
                    }else if(user && possuiPlano === true && possuiCotaComprada === true && possuiContaBancaria === true && confirmouContrato === false && numeroPlano === 1 ){
                      this.props.navigation.navigate("ContratoGold")
                    }else if(user && possuiPlano === true && possuiCotaComprada === true && possuiContaBancaria === true && confirmouContrato === false && numeroPlano === 2){
                      this.props.navigation.navigate("ContratoPlatinum")
                    }else if(user && possuiPlano === true && possuiCotaComprada === true && possuiContaBancaria === true && confirmouContrato === false && numeroPlano === 3){
                      this.props.navigation.navigate("ContratoBlack")
                    }else if(user && possuiPlano === true && possuiCotaComprada === true && possuiContaBancaria === true && confirmouContrato === true && investimentoPago === false) {
                      this.props.navigation.navigate("AguardandoPagamento")
                    }
                })
              }) 
          }
        })
      
      }
    render(){
        return(
          
            <TabNavigator />
        )
    }
}