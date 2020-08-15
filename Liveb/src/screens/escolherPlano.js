import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Dimensions, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, RefreshControlComponent } from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import handleData from '../components/handleData'
import { concat } from 'react-native-reanimated'

const { width } = Dimensions.get("window");
const height = width * 1.3;


export default class EscolherPlano extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

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
                firebase.firestore().collection('pagamentos').doc(userID).set({
                    
                    pags: [
                        { id: 1, pagar: handleData(1), statusPagamento: false },
                        { id: 2, pagar: handleData(2), statusPagamento: false },
                        { id: 3, pagar: handleData(3), statusPagamento: false },
                        { id: 4, pagar: handleData(4), statusPagamento: false },
                        { id: 5, pagar: handleData(5), statusPagamento: false },
                        { id: 6, pagar: handleData(6), statusPagamento: false },
                    ],
                })
                this.props.navigation.navigate("ConfirmarPlanoGold")
            }
        }))



    }
    handlePlanPlatinum = () => {
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            possuiPlano: true,
            nomePlano: 'Plano PLATINUM',
            numeroPlano: 2,
            dataEscolhaPlano: firebase.firestore.Timestamp.fromDate(new Date())
        }).then(firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarPlanoPlatinum")
            }
        }))
        firebase.firestore().collection('pagamentos').doc(userID).set({
            pags: [
                { id: 1, pagar: handleData(1), statusPagamento: false },
                { id: 2, pagar: handleData(2), statusPagamento: false },
                { id: 3, pagar: handleData(3), statusPagamento: false },
                { id: 4, pagar: handleData(4), statusPagamento: false },
                { id: 5, pagar: handleData(5), statusPagamento: false },
                { id: 6, pagar: handleData(6), statusPagamento: false },
                { id: 7, pagar: handleData(7), statusPagamento: false },
                { id: 8, pagar: handleData(8), statusPagamento: false },
                { id: 9, pagar: handleData(9), statusPagamento: false },
                { id: 10, pagar: handleData(10), statusPagamento: false },
                { id: 11, pagar: handleData(11), statusPagamento: false },
                { id: 12, pagar: handleData(12), statusPagamento: false },
            ],
        })
    }
    handlePlanBlack = () => {
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            possuiPlano: true,
            nomePlano: 'Plano BLACK',
            numeroPlano: 3,
            dataEscolhaPlano: firebase.firestore.Timestamp.fromDate(new Date())
        })
            .then(firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.props.navigation.navigate("ConfirmarPlanoBlack")
                }
            }))
        firebase.firestore().collection('pagamentos').doc(userID).set({
            pags: [
                { id: 1, pagar: handleData(1), statusPagamento: false },
                { id: 2, pagar: handleData(2), statusPagamento: false },
                { id: 3, pagar: handleData(3), statusPagamento: false },
                { id: 4, pagar: handleData(4), statusPagamento: false },
                { id: 5, pagar: handleData(5), statusPagamento: false },
                { id: 6, pagar: handleData(6), statusPagamento: false },
                { id: 7, pagar: handleData(7), statusPagamento: false },
                { id: 8, pagar: handleData(8), statusPagamento: false },
                { id: 9, pagar: handleData(9), statusPagamento: false },
                { id: 10, pagar: handleData(10), statusPagamento: false },
                { id: 11, pagar: handleData(11), statusPagamento: false },
                { id: 12, pagar: handleData(12), statusPagamento: false },
                { id: 13, pagar: handleData(13), statusPagamento: false },
                { id: 14, pagar: handleData(14), statusPagamento: false },
                { id: 15, pagar: handleData(15), statusPagamento: false },
                { id: 16, pagar: handleData(16), statusPagamento: false },
                { id: 17, pagar: handleData(17), statusPagamento: false },
                { id: 18, pagar: handleData(18), statusPagamento: false },
                { id: 19, pagar: handleData(19), statusPagamento: false },
                { id: 20, pagar: handleData(20), statusPagamento: false },
                { id: 21, pagar: handleData(21), statusPagamento: false },
                { id: 22, pagar: handleData(22), statusPagamento: false },
                { id: 23, pagar: handleData(22), statusPagamento: false },
                { id: 24, pagar: handleData(24), statusPagamento: false },
            ],
        })
    }

    render() {
        return (
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
    container: {
        backgroundColor: '#CC4E35',
        margin: 0,
        flex: 1,
        paddingHorizontal: 0
    },
    scrollView: {
        flex: 1
    },
    view: {
        flex: 1,
    },
    viewCard: {
        backgroundColor: '#000',
        borderWidth: 1,
        borderColor: '#000',
        width,
        margin: 10

    },
    title: {
        marginTop: 20,
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    description: {

        justifyContent: "center",
        alignItems: "flex-start",
        marginHorizontal: 5,
        paddingHorizontal: 10,
        color: '#fff'
    },
    botaoView: {
        backgroundColor: '#cc4e35',
        borderRadius: 15,
        borderWidth: 2,
        height: '70%',
        width,
        borderColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    botaoTexto: {
        color: '#fff',
        fontSize: 15,

    }
})