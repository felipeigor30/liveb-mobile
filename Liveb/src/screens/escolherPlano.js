import 'react-native-gesture-handler'
import React, { Component } from 'react'
import {View, Dimensions,Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import handleData from '../components/handleData'

const { width } = Dimensions.get("window") ;
const height = width * 1.3;


export default class EscolherPlano extends Component{
    constructor(props){
        super(props)
        
    }


    handlePlanGold = () => { 
        
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({    
            possuiPlano: true,
            nomePlano: 'Plano GOLD',
            numeroPlano: 1,
            
            dataEscolhaPlano: firebase.firestore.Timestamp.fromDate(new Date())
                
        }).then(firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarPlanoGold")
            }
        }))
    
        firebase.firestore().collection('pagamentos').doc(userID).update({
            id0030: '1',
            id0060: '2',
            id0090: '3',
            id0150: '4',
            id0150: '5',
            id0180: '6',
            pagar0030: handleData(1),
            pagar0060: handleData(2),
            pagar0090: handleData(3),
            pagar0120: handleData(4),
            pagar0150: handleData(5),
            pagar0180: handleData(6),
            statusPagamento0030: false,
            statusPagamento0060: false,
            statusPagamento0090: false,
            statusPagamento0120: false,
            statusPagamento0150: false,
            statusPagamento0180: false,
        })
    
    }
    handlePlanPlatinum = () => { 
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            possuiPlano: true,
            nomePlano: 'Plano PLATINUM',
            numeroPlano: 2,
            pagamentos: {
                pg1: { id: '1', pagar:handleData(1), statusPagamento: false},
                pg2: { id: '2', pagar:handleData(2), statusPagamento: false},
                pg3: { id: '3', pagar:handleData(3), statusPagamento: false},
                pg4: { id: '4', pagar:handleData(4), statusPagamento: false},
                pg5: { id: '5', pagar:handleData(5), statusPagamento: false},
                pg6: { id: '6', pagar:handleData(6), statusPagamento: false},
            },
            dataEscolhaPlano: firebase.firestore.Timestamp.fromDate(new Date())  
        }).then(firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarPlanoPlatinum")
            } 
        }))
    }
    handlePlanBlack = () => { 
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            possuiPlano: true,
            nomePlano: 'Plano BLACK',
            numeroPlano: 3,
            pagamentos: {
                pg1: { id: '1', pagar:handleData(1), statusPagamento: false},
                pg2: { id: '2', pagar:handleData(2), statusPagamento: false},
                pg3: { id: '3', pagar:handleData(3), statusPagamento: false},
                pg4: { id: '4', pagar:handleData(4), statusPagamento: false},
                pg5: { id: '5', pagar:handleData(5), statusPagamento: false},
                pg6: { id: '6', pagar:handleData(6), statusPagamento: false},
            },
            dataEscolhaPlano: firebase.firestore.Timestamp.fromDate(new Date())   
        })
        .then(firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarPlanoBlack")
            } 
        }))
    }
    componentDidMount(){
    }
    render(){
        return( 
            <SafeAreaView style={styles.container}>
                <View style={styles.view}>
                <View>
                    <Text style={styles.title}>Escolha seu plano</Text>
                </View>
                <ScrollView 
                horizontal={true} 
                style={styles.scrollView}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity
                    style={styles.botaoView} 
                    onPress={this.handlePlanGold}>
                        
                        <Text style={styles.botaoTexto}>PLANO GOLD</Text>
                            <View style={styles.description}>
                                <Text>4,5% no trimestre (1,5% mês)</Text>
                                <Text>R$: 1.000,00 cota mínima.</Text>
                                <Text>R$: 10.000,00 cota máxima.</Text>    
                                <Text>6 meses de investimento ( 9% lucro total )</Text>
                                <Text>Recebimento trimestral lucro</Text>    
                                <Text>Saque investimento inicial após 6 meses.</Text>    
                            </View>
                        
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoView} onPress={this.handlePlanPlatinum}>
                        
                            <Text style={styles.botaoTexto}>PLANO PLATINUM</Text>
                            <View style={styles.description}>
                                <Text >4,5% no trimestre (1,5% mês)</Text>
                                <Text>R$: 1.000,00 cota mínima.</Text>
                                <Text>R$: 10.000,00 cota máxima.</Text>    
                                <Text>6 meses de investimento ( 9% lucro total )</Text>
                                <Text>Recebimento trimestral lucro</Text>    
                                <Text>Saque investimento inicial após 6 meses.</Text>    
                            </View>
                      
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.botaoView} onPress={this.handlePlanBlack}>
                        <Text style={styles.botaoTexto}>PLANO BLACK</Text>
                        <View style={styles.description}>
                                <Text>4,5% no trimestre (1,5% mês)</Text>
                                <Text>R$: 1.000,00 cota mínima.</Text>
                                <Text>R$: 10.000,00 cota máxima.</Text>    
                                <Text>6 meses de investimento ( 9% lucro total )</Text>
                                <Text>Recebimento trimestral lucro</Text>    
                                <Text>Saque investimento inicial após 6 meses.</Text>    
                            </View>
                    </TouchableOpacity>
                </ScrollView>
                </View>
            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CC4E35',
        margin: 0,
        flex:1, 
        paddingHorizontal: 0 
    },
    scrollView:{
        flex:1
    },
    view:{
        flex:1,
    },
    viewCard:{
        backgroundColor: '#000',
        borderWidth:1,
        borderColor: '#000',
        width,
        margin:10
        
    },
    title:{
        marginTop: 20,
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    description:{
        
        justifyContent: "center",
        alignItems: "flex-start",
        marginHorizontal:5,
        paddingHorizontal:10
    },
    botaoView:{
        backgroundColor: '#cc4e35',
        borderRadius: 15,
        borderWidth: 2,
        height: '70%',
        width ,
        borderColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    botaoTexto:{
        color: '#fff',
        fontSize:15,
        
    }
})