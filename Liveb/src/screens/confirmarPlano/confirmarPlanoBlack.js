import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
const { width } = Dimensions.get("window");

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import handleData from '../../components/handleData'
export default class ConfirmarPlanoBlack extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        
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
                    this.props.navigation.navigate("ComprarCotasBlack")
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
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Conheça o plano</Text>
                </View>

                <Animatable.View style={styles.cardViewIncome} animation='fadeInUpBig'>
                    <Text style={styles.nomePlano}>black</Text>

                    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                        <View style={styles.viewTitleContent}>
                            <Text style={styles.titleInfo}>retorno</Text>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.nomeTipo}>Poupança</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno médio mensal </Text>
                                    <Text style={styles.description2}>R$ 130,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos três meses</Text>
                                    <Text style={styles.description}>R$ 390,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos seis meses</Text>
                                    <Text style={styles.description}>R$ 780,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos doze meses</Text>
                                    <Text style={styles.description}>R$ 1.560,00</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.nomeTipo}>CDI</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno médio mensal </Text>
                                    <Text style={styles.description2}>R$ 250,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos três meses</Text>
                                    <Text style={styles.description}>R$ 750,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos seis meses</Text>
                                    <Text style={styles.description}>R$ 1.500,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos doze meses</Text>
                                    <Text style={styles.description}>R$ 3.000,00</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.nomeTipo}>LIVEB</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno médio mensal </Text>
                                    <Text style={styles.description2}>R$ 4.000,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos três meses</Text>
                                    <Text style={styles.description}>R$ 12.000,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos seis meses</Text>
                                    <Text style={styles.description}>R$ 24.000,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos doze meses</Text>
                                    <Text style={styles.description}>R$ 48.000,00</Text>
                                </View>
                            </View>
                            <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                                <Text style={{fontSize:8, color:'#fff'}}>*Estimativa sobre um capital de R$100.000,00</Text></View>
                        </View>

                        <View style={styles.viewTitleContent}>
                            <Text style={styles.titleInfo}>estatísticas</Text>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.nomeTipo}>Poupança</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Máximo drawdown </Text>
                                    <Text style={styles.description2}>0%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Maior retorno mensal</Text>
                                    <Text style={styles.description}>0,13%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Menor retorno mensal</Text>
                                    <Text style={styles.description}>0,13%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses acima do CDI</Text>
                                    <Text style={styles.description}>0</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses abaixo do CDI</Text>
                                    <Text style={styles.description}>0</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses positivos</Text>
                                    <Text style={styles.description}>12</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses negativos</Text>
                                    <Text style={styles.description}>0</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Última cota divulgada</Text>
                                    <Text style={styles.description}>JUN/20</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.nomeTipo}>CDI</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Máximo drawdown </Text>
                                    <Text style={styles.description2}>0%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Maior retorno mensal</Text>
                                    <Text style={styles.description}>0,25%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Menor retorno mensal</Text>
                                    <Text style={styles.description}>0,25%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses acima do CDI</Text>
                                    <Text style={styles.description}>-</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses abaixo do CDI</Text>
                                    <Text style={styles.description}>-</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses positivos</Text>
                                    <Text style={styles.description}>12</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses negativos</Text>
                                    <Text style={styles.description}>0</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Última cota divulgada</Text>
                                    <Text style={styles.description}>JUN/20</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.nomeTipo}>Liveb</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Máximo drawdown </Text>
                                    <Text style={styles.description2}>0%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Maior retorno mensal</Text>
                                    <Text style={styles.description}>4,0%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Menor retorno mensal</Text>
                                    <Text style={styles.description}>4,0%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses acima do CDI</Text>
                                    <Text style={styles.description}>12</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses abaixo do CDI</Text>
                                    <Text style={styles.description}>0</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses positivos</Text>
                                    <Text style={styles.description}>12</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Meses negativos</Text>
                                    <Text style={styles.description}>0</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Última cota divulgada</Text>
                                    <Text style={styles.description}>JUN/20</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    <TouchableOpacity onPress={() => this.handlePlanBlack()} style={styles.button}>
                        <Text style={styles.buttonText}>Comprar cotas</Text>
                    </TouchableOpacity>
                </Animatable.View >
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CC4E35',
        margin: 0,
        flex: 1,
        paddingHorizontal: 0
    },
    viewTitle: {
        marginTop: 50,
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    nomePlano: {
        fontSize: 30,
        marginVertical: 20,
        alignSelf: "center",
        textTransform: "capitalize",
        fontWeight: 'bold',
        color:'#fff'
    },
    cardViewIncome: {
        paddingTop: 0,
        width,
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#4b0082',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    viewTitleContent: {
        backgroundColor: '#CC4E35',
        justifyContent: "center",
        height: 40,
        marginTop:20
    },
    titleInfo: {
        textTransform: "uppercase",
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        alignSelf: "center"
    },
    nomeTipo: {
        color: '#fff',
        marginTop: 15,
        fontSize: 15,
        fontWeight: '600',
        textAlign: 'justify'
    },
    viewInfo: {
        flexDirection: "row", justifyContent: "space-between", marginTop: 8,
    },
    description: {
        color: '#fff',
        fontSize: 12,
        textAlign: "justify"
    },
    description2: {
        color: '#fff',
        fontSize: 12,
        textAlign: "right",
    },
    button: {
        backgroundColor: '#CC4E35',
        height: 50,
        marginVertical: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "#fff",
        fontSize: 17,
    },


})