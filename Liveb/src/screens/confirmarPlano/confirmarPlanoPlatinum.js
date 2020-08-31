import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native'
import * as Animatable from 'react-native-animatable'
const { width } = Dimensions.get("window");

export default class ConfirmarPlanoPlatinum extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Conheça o plano</Text>
                </View>

                <Animatable.View style={styles.cardViewIncome} animation='fadeInUpBig'>
                    <Text style={styles.nomePlano}>platinum</Text>

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
                                    <Text style={styles.description2}>R$ 3.000,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos três meses</Text>
                                    <Text style={styles.description}>R$ 9.000,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos seis meses</Text>
                                    <Text style={styles.description}>R$ 18.000,00</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Retorno últimos doze meses</Text>
                                    <Text style={styles.description}>R$ 36.000,00</Text>
                                </View>
                            </View>
                            <View style={{justifyContent:"center",alignItems:"center",marginTop:10}}>
                                <Text style={{fontSize:8, color: '#fff'}}>*Estimativa sobre um capital de R$100.000,00</Text></View>
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
                                    <Text style={styles.description}>3,0%</Text>
                                </View>
                                <View style={styles.viewInfo}>
                                    <Text style={styles.description}>Menor retorno mensal</Text>
                                    <Text style={styles.description}>3,0%</Text>
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
                    
                    
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ComprarCotasPlatinum')} style={styles.button}>
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