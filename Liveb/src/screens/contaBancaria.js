import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'


import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export default class ContaBancaria extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeCompleto: '',
            cpfBank: '',
            instituicao: '',
            agencia: '',
            conta: '',
            tipoConta: '',
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userID = firebase.auth().currentUser.uid
                firebase.firestore().collection('users').doc(userID).onSnapshot(doc => {
                    var nomeCompleto = doc.data().nomeCompleto
                    var cpfBank = doc.data().cpfBank
                    var instituicao = doc.data().instituicao
                    var agencia = doc.data().agencia
                    var conta = doc.data().conta
                    var tipoConta = doc.data().tipoConta
                    this.setState({ nomeCompleto: nomeCompleto })
                    this.setState({ instituicao: instituicao })
                    this.setState({ cpfBank: cpfBank })
                    this.setState({ agencia: agencia })
                    this.setState({ conta: conta })
                    this.setState({ tipoConta: tipoConta })
                })
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titlePage}>Conta Bancária</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/close.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView}>
                    <View style={styles.boxTitle}><Text style={styles.title}>Nome completo </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.nomeCompleto}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Instituição </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.instituicao}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>CPF </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.cpfBank}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Agencia </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.agencia}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Conta </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.conta}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Tipo </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.tipoConta}</Text></View>
                </View>
            </View>


        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CC4E35'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 30,
        margin: 30,

    },
    titlePage: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    },
    cardView: {
        backgroundColor: '#4b0082',
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    boxTitle: {

    },
    title: {
        marginVertical: 10,
        fontSize: 12,

        color: '#fff'
    },
    boxInfo: {
        backgroundColor: '#F3F3F3',
        height: 52,
        borderRadius: 10,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    info: {
        fontWeight: '300',
        fontSize: 18,
        color: '#535353',
        textTransform: "lowercase",
    }
})




