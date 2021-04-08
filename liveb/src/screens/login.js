import 'react-native-gesture-handler'
import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import { View, Text, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const { width } = Dimensions.get("screen");
export default class LoginScreen extends Component {
    state = {
        email: '',
        password: '',
        errorMessage: null
    }

    handleLogin = () => {
        const { email, password } = this.state;
        firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error => this.setState({ errorMessage: error.message }))
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Image
                        animation="fadeInUp"
                        source={require('../assets/logoLiveb.png')}
                        style={styles.logo}
                        resizeMode='stretch' />
                </View>
                <Animatable.View style={styles.footer} animation='flipInX'>

                    <View style={styles.errorMessage}>
                        {this.state.errorMessage && <Text style={styles.erro}>{this.state.errorMessage}</Text>}
                    </View>
                    <Text>{this.state.logado}</Text>
                    <TextInput style={styles.inputEmail}
                        autoCapitalize='none'
                        placeholder="Email"
                        placeholderTextColor="#fff"
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email}
                    />

                    <TextInput style={styles.inputPass}
                        autoCapitalize="none"
                        placeholder="Senha"
                        placeholderTextColor="#fff"
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                        value={this.state.password}
                    />
                    <TouchableOpacity>
                        <Text style={styles.forgotPassButton}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.signInButton} onPress={this.handleLogin}>
                        <Text style={styles.signInButtonText}>Acessar minha conta</Text>
                    </TouchableOpacity>
                    {/* <TouchableOpacity style={styles.signUpButton} onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={styles.signUpButtonText}>Ainda não tem cadastro?<Text style={{ fontWeight: 'bold' }}> Clique aqui</Text></Text>
                    </TouchableOpacity> */}

                </Animatable.View>
            </View>
        );
    }
}

LoginScreen.navigationOptions = {
    title: 'Login',
    headerShown: false,
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CC4E35',
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
    },
    footer: {
        flex: 2,
        backgroundColor: '#4b0082',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingBottom: 100,
        paddingHorizontal: 30
    },

    logo: {
        width: height_logo,
        height: height_logo
    },
    inputEmail: {
        backgroundColor: "rgba(255,255,255,0.3)",
        width: '100%',
        height: 50,
        color: '#fff',
        borderRadius: 10,
        paddingStart: 20,
        marginTop: 10

    },
    inputPass: {
        backgroundColor: "rgba(255,255,255,0.3)",
        width: '100%',
        height: 50,
        color: '#fff',
        borderRadius: 10,
        paddingStart: 20,
        marginTop: 30
    },
    forgotPassButton: {
        fontSize: 15,
        color: '#fff',
        marginTop: 10,
        alignSelf: 'flex-end'

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
    },
    errorMessage: {
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",

    },
    erro: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#fff',
        marginVertical: 15
    }

});