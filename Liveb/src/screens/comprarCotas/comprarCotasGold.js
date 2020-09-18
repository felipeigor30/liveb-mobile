import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image,BackHandler } from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import WhatsApp from '../../components/whats'
export default class ComprarCotasGold extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1,
            valor: 1000,
            

        }
    }
    
    saveAmountQuotas = () => {
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            quantidadeValorCotas: this.state.count,
            valorInvestido: this.state.valor,
            investimentoPago: false,
            possuiCotaComprada: true
        }).then(firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarDeposito")
            } else {
                console.log('erro')
            
            }
        }))
    }
    increment = () => {
        this.setState(prevState => ({
            count: Math.min(prevState.count + 1, 10),
            valor: Math.min(prevState.valor + 1000, 10000)
        }));
    }
    decrement = () => {
        this.setState(prevState => ({
            count: Math.max(prevState.count - 1, 1),
            valor: Math.max(prevState.valor - 1000, 1000)
        }));
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userNameView}>
                    <WhatsApp />
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 15 }}>Comprar Cotas</Text>

                </View>
                <Animatable.View style={styles.cardViewIncome} animation='fadeInUpBig'>

                    <View style={{ flex: 2, justifyContent: "center" }}>
                        <Text style={{ fontSize: 18, textAlign: "center", marginBottom: 20, color: '#fff' }}>Adicione a quantidade de cotas que deseja!</Text>
                        <View style={{ flexDirection: 'row', justifyContent: "center", alignItems: "center" }}>
                            <TouchableOpacity onPress={this.decrement} style={styles.botao}>
                                <Text style={styles.texto}>-</Text>
                            </TouchableOpacity>
                            <Text style={styles.textoC}>{this.state.count}</Text>
                            <TouchableOpacity onPress={this.increment} style={styles.botao}>
                                <Text style={styles.texto}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ justifyContent: "center", }}>
                            <Text style={{ fontSize: 22, textAlign: "center", marginVertical: 10, color: '#fff' }}>Valor total do seu investimento</Text>
                            <Text style={{ fontSize: 18, textAlign: "center", fontWeight: '800', marginBottom: 20, color: '#fff' }}>R$ {this.state.valor},00</Text>
                        </View>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>


                        <TouchableOpacity onPress={() => this.saveAmountQuotas()} style={styles.botaoComprar}>
                            <Text style={styles.textoButton}>Comprar</Text>
                        </TouchableOpacity>
                    </View>

                </Animatable.View>



            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CC4E35'
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"

    },
    footer: {
        flex: 1,
        backgroundColor: '#4b0082',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    cardViewIncome: {
        paddingVertical: 50,
        paddingHorizontal: 30,
        backgroundColor: '#4b0082',
        flex: 2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    userNameView: {
        flex: 2,
        paddingHorizontal: 20,
        marginTop: 20,
        paddingTop: 30,
        justifyContent: "space-between",
    },
    userNameText: {
        color: '#fff',
        fontSize: 18,
    },
    botao: {
        backgroundColor: '#CC4E35',
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    texto: {
        color: '#fff',
        fontSize: 30
    },
    botaoComprar: {
        height: 42,
        borderRadius: 30,
        backgroundColor: '#CC4E35',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    textoButton: {
        color: '#fff',
        fontWeight: "bold"
    },
    textoC: {
        fontSize: 30,
        fontWeight: "bold",
        color: '#fff',
        marginHorizontal: 15
    }
})