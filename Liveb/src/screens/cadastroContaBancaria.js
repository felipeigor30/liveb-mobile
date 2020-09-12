import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions, ScrollView } from 'react-native'

import { Picker } from '@react-native-community/picker';

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import WhatsApp from '../components/whats'
import { cpfMask } from '../components/mask'
export default class CadastroContaBancaria extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nomeCompleto: '',
            nome:'',
            cpf: '',
            cpfBank: '',
            instituicao: 'nenhuma',
            agencia: '',
            conta: '',
            tipoConta: 'none',
            possuiContaBancaria: false,
            
        }
    }
    handleChangeCPF(cpfBank) {
        this.setState({ cpfBank: cpfMask(cpfBank) })
    }
    saveBankDetails = () => {
        if (this.state.instituicao.trim() === "" || this.state.conta.trim() === "" || this.state.tipoConta.trim() === "") {
            this.setState(() => ({ nameError: "Todos os campos devem ser preenchidos." }));
        } else {
            this.setState(() => ({ nameError: null }));
            const userID = firebase.auth().currentUser.uid
            firebase.firestore().collection('users').doc(userID).update({
                nomeCompleto: this.state.nomeCompleto,
                cpfBank: this.state.cpf,
                instituicao: this.state.instituicao,
                agencia: this.state.agencia,
                conta: this.state.conta,
                tipoConta: this.state.tipoConta,
                possuiContaBancaria: true,
            }).then(firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    const userID = firebase.auth().currentUser.uid
                    firebase.firestore().collection('users').doc(userID).onSnapshot(doc => {
                        var plano = doc.data().numeroPlano
                        firebase.auth().onAuthStateChanged((user) => {

                            if (user && plano === 1) {
                                this.props.navigation.navigate("ContratoGold")
                            } else if (user && plano === 2) {
                                this.props.navigation.navigate("ContratoPlatinum")
                            } else if (user && plano === 3) {
                                this.props.navigation.navigate("ContratoBlack")
                            } else {
                                console.log('Erro ao recuperar plano')
                            }
                        })
                    })

                } 
            }))
        }
    }
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                const userID = firebase.auth().currentUser.uid
                firebase.firestore().collection('users').doc(userID).onSnapshot(doc => {
                    var nome = doc.data().name
                    var cpfBank = doc.data().cpf
                    this.setState({ nomeCompleto: nome })
                    this.setState({ nome: nome })
                    this.setState({ cpfBank: cpfBank })
                    
                })
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userNameView}>
                    <WhatsApp />
                    <Text style={{ color: '#fff', fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginBottom: 15 }}>Cadastrar Conta Bancaria</Text>

                </View>
                <View style={styles.cardViewIncome}>
                    {!!this.state.nameError && (
                        <Text style={{ color: "red", alignSelf: "center" }}>{this.state.nameError}</Text>
                    )}
                    <ScrollView>
                        <View style={{ flex: 1 }}>
                        

                            <TextInput style={styles.inputNome}
                                placeholder={"Nome completo"}
                                autoCapitalize="none"
                                editable={false}
                                placeholderTextColor="#535353"
                                onChangeText={nomeCompleto => this.setState({ nomeCompleto })}
                                value={this.state.nomeCompleto}
                            />
                            <TextInput style={styles.inputNome}
                                placeholder="CPF"
                                autoCapitalize="none"
                                keyboardType="phone-pad"
                                maxLength={14}
                                editable={false}
                                placeholderTextColor="#535353"
                                onChangeText={cpfBank => this.handleChangeCPF(cpfBank)}
                                value={this.state.cpfBank}
                            />

                            <View style={styles.select}>
                                <Picker
                                    style={{ color: '#535353' }}
                                    selectedValue={this.state.instituicao}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ instituicao: itemValue })}>
                                    <Picker.Item label="Escolher banco" value="Vazio" />
                                    <Picker.Item label="033 - Santander" value="033 - Santander" />
                                    <Picker.Item label="237 - Bradesco" value="237 - Bradesco" />
                                    <Picker.Item label="341 - Itau" value="341 - Itau" />
                                    <Picker.Item label="001 - Banco do Brasil" value="001 - Banco do Brasil" />
                                    <Picker.Item label="104 - Caixa Econ. Federal" value="104 - Caixa Econ. Federal" />
                                    <Picker.Item label="399 - HSBC Bank" value="399 - HSBC Bank " />
                                    <Picker.Item label="754 - CITIBANK" value="754 - CITIBANK" />
                                    <Picker.Item label="422 - Banco Safra" value="422 - Banco Safra" />
                                    <Picker.Item label="655 - Banco Votarantim" value="655 - Banco Votarantim" />
                                    <Picker.Item label="077- Banco Inter" value="077- Banco Inter" />
                                    <Picker.Item label="096 - Banco B3 S.A" value="096 - Banco B3 S.A" />
                                    <Picker.Item label="748 - Sicred" value="748 - Sicred" />
                                    <Picker.Item label="074- Banco J. Safra S.A" value="074- Banco J. Safra S.A" />
                                    <Picker.Item label="025 - Banco Alfa" value="025 - Banco Alfa" />
                                    <Picker.Item label="121 - Banco Agibank" value="121 - Banco Agibank" />
                                    <Picker.Item label="260 - Nu Pagamentos S.A" value="260 - Nu Pagamentos S.A" />
                                    <Picker.Item label="292 - BS2 " value=" 292 - BS2" />
                                    <Picker.Item label="208 - Banco BTG" value="208 - Banco BTG" />
                                    <Picker.Item label="336 - BANCO C6 S.A" value="336 - BANCO C6 S.A" />
                                    <Picker.Item label="212 - Banco Original S.A" value="212 - Banco Original S.A" />
                                    <Picker.Item label="756 - SICOOB" value="756 - SICOOB" />
                                </Picker>
                            </View>
                            <TextInput style={styles.inputNome}
                                placeholder="Agencia"
                                autoCapitalize="none"
                                keyboardType='phone-pad'
                                placeholderTextColor="#535353"
                                onChangeText={agencia => this.setState({ agencia })}
                                value={this.state.agencia}
                            />
                            <TextInput style={styles.inputNome}
                                placeholder="Conta"
                                autoCapitalize="none"
                                keyboardType='phone-pad'
                                placeholderTextColor="#535353"
                                onChangeText={conta => this.setState({ conta })}
                                value={this.state.conta}
                            />
                            {/* <TextInput style={styles.inputNome}
                                placeholder="Tipo de conta"
                                autoCapitalize="none"
                                placeholderTextColor="#535353"
                                onChangeText={tipoConta => this.setState({ tipoConta })}
                                value={this.state.tipoConta}
                            /> */}
                            <View style={styles.select}>
                                <Picker
                                    style={{ color: '#535353' }}

                                    selectedValue={this.state.tipoConta}
                                    onValueChange={(itemValue, itemIndex) => this.setState({ tipoConta: itemValue })}>
                                    <Picker.Item label="Selecionar tipo de conta" value="none" />
                                    <Picker.Item label="Conta Corrente" value="corrente" />
                                    <Picker.Item label="Conta Poupança" value="poupanca" />
                                </Picker>
                            </View>

                            <View style={styles.viewButton}>
                                <TouchableOpacity
                                    onPress={this.saveBankDetails}
                                    style={styles.botaoCadastrar}>
                                    <Text style={styles.texto}>Cadastrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
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
    cardViewIncome: {
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 30,
        backgroundColor: '#4b0082',
        flex: 6,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    userNameView: {
        flex: 1,
        paddingHorizontal: 20,
        marginTop: 20,
        paddingTop: 30,
        justifyContent: "space-between",
    },
    userNameText: {
        color: '#fff',
        fontSize: 18,
    },
    inputNome: {
        backgroundColor: "rgba(243,243,243,0.8)",
        width: '100%',
        height: 50,
        color: '#212121',
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 20
    },
    botao: {
        backgroundColor: '#f7aacF',
        height: 80,
        width: 80,
        justifyContent: "center",
        alignItems: 'center'
    },
    viewButton: {
        marginTop: 30,
        justifyContent: "center",
        alignItems: "center",


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
    },
    select: {
        backgroundColor: "rgba(243,243,243,0.8)",
        width: '100%',
        height: 50,
        color: '#212121',
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 20

    },
    botaoCadastrar: {
        height: 42,
        borderRadius: 20,
        backgroundColor: '#CC4E35',
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    texto: {
        color: '#fff',
        fontWeight: "bold"
    },

})