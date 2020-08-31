import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity, Image} from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


export default class DadosPessoaisScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            sobrenome: '',
            email: '',
            cpf: '',
            telefone: '',
        }
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userID = firebase.auth().currentUser.uid
                firebase.firestore().collection('users').doc(userID).onSnapshot(doc => {
                    var nome = doc.data().name
                    var sobrenome = doc.data().lastName
                    var email = doc.data().email
                    var cpf = doc.data().cpf
                    var telefone = doc.data().phone
                    this.setState({ nome: nome })
                    this.setState({ sobrenome: sobrenome })
                    this.setState({ email: email })
                    this.setState({ cpf: cpf })
                    this.setState({ telefone: telefone })
                })
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titlePage}>Dados Pessoais</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/close.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView}>
                    <View style={styles.boxTitle}><Text style={styles.title}>Nome </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.nome} {this.state.sobrenome}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>E-mail </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.email}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>CPF </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.cpf}</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Telefone </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>{this.state.telefone}</Text></View>
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
    boxTitle:{

    },
    title:{
        marginVertical:10,
        fontSize:12,
        
        color: '#fff'
    },
    boxInfo:{
        backgroundColor: '#F3F3F3',
        height:52,
        borderRadius:10,
        justifyContent: "center",
        paddingHorizontal: 20
    },
    info:{
        fontWeight: '300',
        fontSize:18,
        color: '#535353',
        textTransform: "lowercase",
        
        
    
    }
});

