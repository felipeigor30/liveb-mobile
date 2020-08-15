import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { } from 'react-navigation'
import firebase from '@react-native-firebase/app'


export default class ContaLiveb extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titlePage}>Conta Liveb</Text>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                        <Image source={require('../assets/close.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardView}>
                    <View style={styles.boxTitle}><Text style={styles.title}>Empresa </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>LIVEB INVESTIMENTOS LTDA</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>CNPJ </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>37.868.391/0001-70</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Banco </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>BANCO SANTANDER (BRASIL) S.A</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Agência </Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>0257</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Conta</Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>13.007152-7</Text></View>
                    <View style={styles.boxTitle}><Text style={styles.title}>Tipo</Text></View>
                    <View style={styles.boxInfo}><Text style={styles.info}>Conta corrente</Text></View>

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
        backgroundColor: '#fff',
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

        color: '#8D8D8D'
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




