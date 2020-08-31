import 'react-native-gesture-handler'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Text, SafeAreaView, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform, Dimensions } from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { cpfMask, phoneMask } from '../components/mask'
const { height } = Dimensions.get("screen");
const height_logo = height * 0.18;
const { width } = Dimensions.get("screen");


export default class RegisterScreen extends Component {
    static navigationOption = {
        header: null
    }
    state = {
        name: "",
        lastName: "",
        phone: "",
        cpf: '',
        email: '',
        password: '',
        possuiPlano: false,
        nomePlano: '',
        numeroPlano: 0,
        valorInvestido: 0,
        errorMessage: null,
        secure: true


    }

    handleChangeCPF(cpf) {
        this.setState({ cpf: cpfMask(cpf) })
    }
    handleChangePHONE(phone) {
        this.setState({ phone: phoneMask(phone) })
    }
    handleCadastro = () => {
        if (this.state.name.trim() === "" || this.state.lastName.trim() === "" || this.state.phone.trim() === "" || this.state.cpf.trim() === "" || this.state.email.trim() === "" || this.state.password.trim() === "") {
            this.setState(() => ({ nameError: "Todos os campos devem ser preenchidos." }));
        } else {
            this.setState(() => ({ nameError: null }));

            const { name, lastName, phone, cpf, email, password, plano, nomePlano, numeroPlano } = this.state;
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(userCredentials => {
                    const userID = userCredentials.user.uid
                    firebase.firestore().collection('users').doc(userID).set({
                        name: name,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        cpf: cpf,
                        possuiPlano: false,
                        nomePlano: '',
                        numeroPlano: 0,
                        valorInvestido: 0,
                    })
                    return userCredentials.user.updateProfile({ displayName: this.state.name, })
                }
                )
                .catch(error => this.setState({ errorMessage: error.message }))

        }
    }
    changeSecureEntry = () => {
        if (this.state.secure === true) {
            this.setState({ secure: false })
        } else {
            this.setState({ secure: true })
        }
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: '#CC4E35' }}
                behavior={Platform.os === 'ios' ? 'padding' : undefined}
                enabled>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="fadeInUp"
                        fadeDuration="none"
                        source={require('../assets/logoLiveb.png')}
                        style={styles.logo}
                        resizeMode='stretch' />
                </View>
                <Animatable.View style={styles.footer} animation='fadeInUp'>
                    <ScrollView keyboardShouldPersistTaps="handled">

                        <View style={styles.containerForm}>
                            {!!this.state.nameError && (
                                <Text style={{ color: "red", alignSelf: "center" }}>{this.state.nameError}</Text>
                            )}
                            <TextInput style={styles.input}
                                placeholder="Nome"
                                placeholderTextColor="#fff"
                                onChangeText={name => this.setState({ name })}
                                value={this.state.name}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Sobrenome"
                                placeholderTextColor="#fff"
                                onChangeText={lastName => this.setState({ lastName })}
                                value={this.state.lastName}
                            />
                            <TextInput
                                style={styles.input}
                                autoCapitalize='none'
                                placeholder="Email"
                                placeholderTextColor="#fff"
                                keyboardType="email-address"
                                onChangeText={email => this.setState({ email })}
                                value={this.state.email}
                            />

                            <View style={styles.viewPassword}>
                                <TextInput style={styles.inputPass}
                                    autoCapitalize='none'
                                    placeholder="Senha"
                                    placeholderTextColor="#fff"
                                    secureTextEntry={this.state.secure}
                                    onChangeText={password => this.setState({ password })}
                                    value={this.state.password}
                                />
                                <TouchableOpacity style={styles.showPassButtonView} onPress={() => this.changeSecureEntry()} >
                                    <Text style={styles.showPassButton}>ver</Text>
                                </TouchableOpacity>
                            </View>

                            <TextInput
                                style={styles.input}
                                placeholder="Telefone"
                                placeholderTextColor="#fff"
                                keyboardType="phone-pad"
                                maxLength={14}
                                onChangeText={phone => this.handleChangePHONE(phone)}
                                value={this.state.phone}
                            />

                            <TextInput
                                style={styles.input}
                                maxLength={14}
                                placeholder="CPF"
                                placeholderTextColor="#fff"
                                keyboardType="numeric"
                                onChangeText={cpf => this.handleChangeCPF(cpf)}
                                value={this.state.cpf}
                            />


                        </View>

                    </ScrollView>
                    <TouchableOpacity
                        style={styles.signInButton}
                        onPress={this.handleCadastro}>
                        <Text style={styles.signInButtonText} >Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.signUpButton}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.signUpButtonText}>Já tem cadastro? Clique aqui</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({

    header: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 2,
        backgroundColor: '#4b0082',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 30
    },

    logo: {
        width: height_logo,
        height: height_logo
    },

    logoLiveb: {
        resizeMode: 'contain',
        width: 200,
        height: 200,
        padding: 10,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: "rgba(255,255,255,0.3)",
        width: '100%',
        height: 50,
        color: '#fff',
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 20
    },
    viewPassword: {
        width: '100%',
        backgroundColor: "rgba(255,255,255,0.3)",
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 20,
        height: 50,
        paddingLeft: 20,
        alignContent: 'center'

    },
    inputPass: {
        backgroundColor: "transparent",
        height: 50,
        width: '85%',
        color: '#fff',
        borderRadius: 20,
    },
    showPassButtonView: {
        justifyContent: 'center',
        alignItems: 'center',


    },
    showPassButton: {
        color: '#fff',

    },
    signInButton: {
        backgroundColor: '#CC4E35',
        height: 50,
        marginTop: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    signInButtonText: {
        color: "#fff",
        fontSize: 17,


    },
    signUpButton: {
        height: 50,
        alignItems: "center",
        marginTop: 20
    },
    signUpButtonText: {
        fontSize: 15,
        color: "#fff",
    }
});

