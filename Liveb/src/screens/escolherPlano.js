import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { View, Dimensions, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, RefreshControlComponent, Image } from 'react-native'

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
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarPlanoGold")
            }
        })
    }
    handlePlanPlatinum = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarPlanoPlatinum")
            }
        })
    }
    handlePlanBlack = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigation.navigate("ConfirmarPlanoBlack")
            }
        })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.view}>
                    <View>
                        <Text style={styles.title}>Escolha seu plano</Text>
                    </View>
                    <ScrollView horizontal={true} style={styles.scrollView} pagingEnabled={true} showsHorizontalScrollIndicator={false}>

                        <TouchableOpacity
                            style={styles.escolhaView}
                            onPress={this.handlePlanGold}>
                            <View style={styles.botaoViewGold}>
                                <Image source={require('../assets/gold.png')} style={{ resizeMode: "contain" }} />
                                <Text style={styles.botaoTextoGold}>PLANO GOLD</Text>
                                <View style={styles.description}>
                                    <Text style={styles.descriptionColor}>4,5% no trimestre (1,5% mês)</Text>
                                    <Text style={styles.descriptionColor}>R$: 1.000,00 cota mínima.</Text>
                                    <Text style={styles.descriptionColor}>R$: 10.000,00 cota máxima.</Text>
                                    <Text style={styles.descriptionColor}>6 meses de investimento ( 9% lucro total )</Text>
                                    <Text style={styles.descriptionColor}>Recebimento trimestral do lucro</Text>
                                    <Text style={styles.descriptionColor}>Saque investimento inicial após 6 meses.</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.escolhaView} onPress={this.handlePlanPlatinum}>
                            <View style={styles.botaoViewPlatinum} >
                                <Image source={require('../assets/platinum.png')} style={{ resizeMode: "contain" }} />
                                <Text style={styles.botaoTextoPlatinum}>PLANO PLATINUM</Text>
                                <View style={styles.description}>
                                    <Text style={styles.descriptionColor}>9% no trimestre (3% mês)</Text>
                                    <Text style={styles.descriptionColor}>R$: 5.000,00 cota mínima</Text>
                                    <Text style={styles.descriptionColor}>R$: 500.000,00 cota máxima.</Text>
                                    <Text style={styles.descriptionColor}>12 meses de investimento ( 36% lucro total )</Text>
                                    <Text style={styles.descriptionColor}>Recebimento mensal do lucro</Text>
                                    <Text style={styles.descriptionColor}>Saque investimento inicial após 12 meses.</Text>
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.escolhaView} onPress={this.handlePlanBlack}>
                            <View style={styles.botaoViewBlack}>
                                <Image source={require('../assets/black.png')} style={{ resizeMode: "contain" }} />
                                <Text style={styles.botaoTextoBlack}>PLANO BLACK</Text>
                                <View style={styles.description}>
                                    <Text style={styles.descriptionColor}>12% no trimestre (4% mês)</Text>
                                    <Text style={styles.descriptionColor}>R$: 25.000,00 cota mínima.</Text>
                                    <Text style={styles.descriptionColor}>R$: 2.500.000,00 cota máxima.</Text>
                                    <Text style={styles.descriptionColor}>24 meses de investimento ( 96% lucro total )</Text>
                                    <Text style={styles.descriptionColor}>Recebimento mensal do lucro.</Text>
                                    <Text style={styles.descriptionColor}>Saque investimento inicial após 24 meses.</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    <View style={styles.paginationWrapper}>
                        <View style={styles.paginationDots} />
                        <View style={styles.paginationDotsoff} />
                        <View style={styles.paginationDotsoff} />

                    </View>
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
        alignContent: "center",
        alignItems: "flex-start",
        marginHorizontal: 5,
        paddingHorizontal: 10,
        color: '#4B0082'
    },
    descriptionColor: {
        color: '#fff',
        marginVertical: 3,
        fontWeight: 'bold',
    },
    scrollView: {
        flex:1,
    },
    escolhaView: {
        alignSelf: "center",
        height: '70%',
        width,
        padding: 10
    },
    botaoViewGold: {
        backgroundColor: '#4B0082',
        borderRadius: 4,
        padding: 20,
        alignSelf: "center",
        height: '100%',
        borderColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    botaoViewPlatinum: {
        backgroundColor: '#4B0082',
        borderRadius: 4,
        padding: 20,
        alignSelf: "center",
        height: '100%',
        borderColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    botaoViewBlack: {
        backgroundColor: '#4B0082',
        borderRadius: 4,
        padding: 20,
        alignSelf: "center",
        height: '100%',
        borderColor: '#fff',
        justifyContent: "center",
        alignItems: "center"
    },
    botaoTextoGold: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    botaoTextoPlatinum: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    botaoTextoBlack: {
        color: '#fff',
        fontSize: 18,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 10,
        width: 30,
        borderRadius: 10 / 2,
        backgroundColor: '#4B0082',
        marginLeft: 10,
    },
    paginationDotsoff: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#fff',
        marginLeft: 10,
    },
})