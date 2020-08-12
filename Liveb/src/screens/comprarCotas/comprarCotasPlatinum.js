import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image} from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import WhatsApp from '../../components/whats'
export default class ComprarCotasPlatinum extends Component{
    constructor(props){
        super(props)
        this.state={
            count: 1,
            valor: 5000
        }
    }
    saveAmountQuotas = () => { 
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            quantidadeValorCotas: this.state.count,
            valorInvestido: this.state.valor,
            investimentoPago: false
        }).then(firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarDeposito")
            } else { 
                console.log('erro') 
            }
        }))
    }
    increment = () =>{
        this.setState(prevState => ({
            count: Math.min(prevState.count + 1, 100),
            valor: Math.min(prevState.valor + 5000, 500000)
          }));
    }
    decrement = () => {
        this.setState(prevState => ({
          count: Math.max(prevState.count - 1, 1),
          valor: Math.max(prevState.valor - 5000, 5000)
        }));
      };

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.userNameView}>
                    <WhatsApp />       
                    <Text style={{color: '#fff',fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom:15}}>Comprar Cotas</Text>
                </View>
            <View style={styles.cardViewIncome}>

                <View style={{flex:2, justifyContent: "center"}}>
                    <Text style={{fontSize:18, textAlign:"center", marginBottom:20,}}>Quantas cotas deseja? </Text>
                    <View style={{flexDirection: 'row', justifyContent:"center", alignItems:"center"}}>
                    <TouchableOpacity onPress={this.decrement} style={styles.botao}>
                        <Text style={styles.texto}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.textoC}>{this.state.count}</Text>
                    <TouchableOpacity onPress={this.increment} style={styles.botao}>
                        <Text style={styles.texto}>+</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{justifyContent:"center",}}>
                        <Text style={{fontSize:22, textAlign:"center", marginVertical:10}}>Valor total</Text>
                        <Text style={{fontSize:18, textAlign:"center", fontWeight: '800', marginBottom:20}}>{this.state.valor}</Text>
                    </View>
                </View>
                <View style={{flex:2, justifyContent: "center", alignItems:"center"}}>
                    
                    
                    <TouchableOpacity onPress={this.saveAmountQuotas} style={styles.botaoComprar}>
                        <Text style={styles.textoButton}>COMPRAR</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
                
                
            
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#CC4E35'
    },
    cardViewIncome:{
        paddingTop:20,
        paddingHorizontal:30,
        backgroundColor: '#fff',
        flex:6,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,  
    },
    userNameView:{
        flex:1,
        paddingHorizontal:20,
        marginTop:20,
        paddingTop:30,
        justifyContent: "space-between",
    },
    userNameText:{
        color: '#fff',
        fontSize: 18,
    },
    botao:{
        backgroundColor: '#CC4E35',
        height: 40,
        width: 40,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: 'center'
    },
    viewButton:{
        width:'100%',        
        justifyContent: "center",
        alignItems: "center",
        bottom:40
        
    },
    botaoComprar:{
        height:42,
        borderRadius:30,
        backgroundColor: '#CC4E35',
        width: '80%',
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        fontSize:30,
        color: '#fff',
        fontWeight: "bold"
        
    },
    textoButton:{
        color: '#fff',
        fontWeight: "bold"
    },
    textoC:{
        fontSize:30,
        fontWeight: "bold",
        marginHorizontal:15
    }
})