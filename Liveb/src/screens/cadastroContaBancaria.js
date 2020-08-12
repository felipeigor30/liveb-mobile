import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions} from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import WhatsApp from '../components/whats'
export default class CadastroContaBancaria extends Component{
    constructor(props){
        super(props)
        this.state={
            nomeCompleto: '',
            cpfBank: '',
            instituicao: '',
            agencia: '',
            conta: '',
            tipoConta: ''
        }
    }
    saveBankDetails = () =>{
      const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            nomeCompleto: this.state.nomeCompleto,
            cpfBank: this.state.cpfBank,
            instituicao: this.state.instituicao,
            agencia: this.state.agencia,
            conta: this.state.conta,
            tipoConta: this.state.tipoConta,
        }).then(firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userID = firebase.auth().currentUser.uid
                firebase.firestore().collection('users').doc(userID).onSnapshot(doc =>{
                  var plano = doc.data().numeroPlano
                  firebase.auth().onAuthStateChanged((user) => {
                      
                    if (user  && plano === 1) {
                        this.props.navigation.navigate("ContratoGold")
                    } else if(user  && plano === 2){ 
                        this.props.navigation.navigate("ContratoPlatinum")
                    }else if(user  && plano === 3){
                        this.props.navigation.navigate("ContratoBlack")
                    }else{
                        console.log('Erro ao recuperar plano')
                    }
                  })
                })
                
            } else { 
                console.log('erro') 
            }
        }))
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.userNameView}>
                      <WhatsApp />                                
                        <Text style={{color: '#fff',fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom:15}}>Cadastar Conta Bancaria</Text>

                </View>
                <View style={styles.cardViewIncome}>
                <View style={{flex:1}}>
                <TextInput style={styles.inputNome} 
                placeholder="Nome completo" 
                autoCapitalize="none"
                placeholderTextColor="#535353"
                onChangeText={nomeCompleto => this.setState({nomeCompleto})}
                value={this.state.nomeCompleto}
                />
                <TextInput style={styles.inputNome} 
                placeholder="CPF" 
                autoCapitalize="none"
                placeholderTextColor="#535353"
                onChangeText={cpfBank => this.setState({cpfBank})}
                value={this.state.cpfBank}
                />
                <TextInput style={styles.inputNome} 
                placeholder="Banco" 
                autoCapitalize="none"
                placeholderTextColor="#535353"
                onChangeText={instituicao => this.setState({instituicao})}
                value={this.state.instituicao}
                />
                <TextInput style={styles.inputNome} 
                placeholder="Agencia" 
                autoCapitalize="none"
                keyboardType='number-pad' 
                placeholderTextColor="#535353"
                onChangeText={agencia => this.setState({agencia})}
                value={this.state.agencia}
                />
                <TextInput style={styles.inputNome} 
                placeholder="Conta" 
                autoCapitalize="none"
                keyboardType='number-pad'
                placeholderTextColor="#535353"
                onChangeText={conta => this.setState({conta})}
                value={this.state.conta}
                />
                <TextInput style={styles.inputNome} 
                placeholder="Op" 
                autoCapitalize="none"
                placeholderTextColor="#535353"
                onChangeText={tipoConta => this.setState({tipoConta})}
                value={this.state.tipoConta}
                />
                
                <View style={styles.viewButton}>
                    <TouchableOpacity
                    onPress={this.saveBankDetails}
                    style={styles.botaoCadastrar}>
                        <Text style={styles.texto}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
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
    inputNome:{
        backgroundColor: "rgba(243,243,243,0.3)",
        width: '100%',
        height: 50,
        color: '#000',
        borderRadius: 20,
        marginTop:20,
        paddingHorizontal:20
    },
    botao:{
        backgroundColor: '#f7aacF',
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: 'center'
    },
    viewButton:{
            marginTop:30,
        justifyContent: "center",
        alignItems: "center",
        
        
    },
    botaoCadastrar:{
        height:42,
        borderRadius:20,
        backgroundColor: '#CC4E35',
        width: '80%',
        justifyContent: "center",
        alignItems: "center"
    },
    texto:{
        color: '#fff',
        fontWeight: "bold"
    },
    
})