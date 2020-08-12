import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import WhatsApp from '../components/whats'
export default class ConfirmarDeposito extends Component{
    constructor(props){
        super(props)
        this.state={
            valorInvestido: 1,   
        }
    }

    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            const userID = firebase.auth().currentUser.uid
            firebase.firestore().collection('users').doc(userID).onSnapshot(doc =>{
              var valorInvestido = doc.data().valorInvestido
              this.setState({valorInvestido: valorInvestido})
              console.log(valorInvestido)
              
            }) 
        }else{
            console.log('Erro em exibir valor a ser pago') 
        }
      })  
    }
    confirmDeposit = ()=>{
      this.props.navigation.navigate('PedirContaBancaria')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.userNameView}>
                        <WhatsApp />                        
                        <Text style={{color: '#fff',fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom:15}}>Confirmar Info Depósito</Text>

                </View>
                <View style={styles.cardViewIncome}>
                    <View style={{flex:1, padding:1}}> 
                        <Text>
                            Para concluir seu investimento
                            Basta realizar um TED ou DOC identificado
                            No valor de R$ <Text style={{fontWeight:'800'}}>{this.state.valorInvestido},00</Text> para a conta da LIVEB:  
                        </Text>
                        <View style={{justifyContent:"center", paddingHorizontal:20, paddingTop:20}}>
                            <View style={{backgroundColor:'#ddd', padding:10, borderRadius:10 }}>
                                <Text style={styles.textTitleBank}>
                                    Instituição: 033 - Santander
                                </Text>
                                <Text style={styles.textTitleBank}>
                                    Tipo de conta: Corrente
                                </Text>
                                <Text style={styles.textTitleBank}>
                                    Agência: 0257
                                </Text>
                                <Text style={styles.textTitleBank}>
                                    Número da conta: 13.007152-7
                                </Text>
                                <Text style={styles.textTitleBank}>
                                    Favorecido: LIVEB INVESTIMENTOS LTDA
                                </Text>
                                <Text style={styles.textTitleBank}>
                                    CNPJ: 37.868.391/0001-70
                                </Text>
                            </View>
                        </View>
                        <Text style={{marginTop:30}}>
                            O depóstio só pode ser realizada a partir de 
                            uma conta do mesmo titular cadastrado na LIVEB.
                            Assim que a transferência <Text style={{fontWeight:'800'}}>IDENTIFICADA</Text> for realizada, 
                            nossa equipe técnica analisará seu deposito e em até 48 horas uteis sua conta estara disponível</Text>
                    </View>
                    <TouchableOpacity onPress={this.confirmDeposit} style={styles.botaoComprar}>
                        <Text style={styles.texto}>OK! Farei o depósito</Text>
                    </TouchableOpacity>
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
        paddingBottom:20,
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
    botaoComprar:{
        height:42,
        borderRadius:30,
        backgroundColor: '#CC4E35',
        width: '80%',
        alignSelf:"center",
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        
        color: '#fff',
        fontWeight: "bold"
    },
    textTitleBank:{
        marginVertical:2,
        fontSize:15,
        fontWeight: '700'
    }
})