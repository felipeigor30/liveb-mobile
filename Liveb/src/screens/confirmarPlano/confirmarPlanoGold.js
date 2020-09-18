import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
const { width } = Dimensions.get("window");
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import handleData from '../../components/handleData'
export default class ConfirmarPlanoGold extends Component {
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
                        { id: 1, pagar: handleData(3), statusPagamento: false },
                        { id: 2, pagar: handleData(6), statusPagamento: false },
                    ],
                })
                this.props.navigation.navigate("ComprarCotasGold")
            }
        }))

    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../../assets/backButton.png')} style={{marginHorizontal:20,}} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Conheça o plano</Text>
                </View>

                <Animatable.View style={styles.cardViewIncome} animation='fadeInUpBig'>
                    <Text style={styles.nomePlano}>gold</Text>

                    <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                        <View style={styles.viewTitleContent}>
                            <Text style={styles.titleInfo}>rendimentos</Text>
                        </View>
                        <View>
                            <View>
                                <Text style={styles.nomeTipo}>Poupança</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno médio mensal </Text>
                                    <Text style={styles.description2}>R$ 13,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos três meses</Text>
                                    <Text style={styles.description}>R$ 39,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos seis meses</Text>
                                    <Text style={styles.description}>R$ 78,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos doze meses</Text>
                                    <Text style={styles.description}>R$ 156,00</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.nomeTipo}>CDI</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno médio mensal </Text>
                                    <Text style={styles.description2}>R$ 25,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos três meses</Text>
                                    <Text style={styles.description}>R$ 75,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos seis meses</Text>
                                    <Text style={styles.description}>R$ 150,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos doze meses</Text>
                                    <Text style={styles.description}>R$ 300,00</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={styles.nomeTipo}>LIVEB</Text>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno médio mensal </Text>
                                    <Text style={styles.description2}>R$ 150,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos três meses</Text>
                                    <Text style={styles.description}>R$ 400,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos seis meses</Text>
                                    <Text style={styles.description}>R$ 900,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos doze meses</Text>
                                    <Text style={styles.description}>R$ 1.500,00</Text>
                                </View>
                            </View>
                            <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}><Text style={{fontSize:8, color:'#fff'}}>*Estimativa sobre um capital de R$10.000,00</Text></View>
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
                                    <Text style={styles.description}>1,5%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Menor retorno mensal</Text>
                                    <Text style={styles.description}>1,5%</Text>
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
                    <TouchableOpacity onPress={() => this.handlePlanGold()} style={styles.button}>
                        <Text style={styles.buttonText}>Comprar cotas</Text>
                    </TouchableOpacity>
                </Animatable.View>
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
        flexDirection: "column"
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