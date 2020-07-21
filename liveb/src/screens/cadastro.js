import 'react-native-gesture-handler'
import React, {Component} from 'react'
import {View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TextInput, ScrollView, Button, TouchableOpacity }  from 'react-native'
import { } from 'react-navigation'





const { width } = Dimensions.get("window");
const height = width * 1.3;


// const Cadastro = () => (
const Cadastro = ({navigation}) =>( 

    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={styles.containerForm}>
                <Image style={styles.logoLiveb} source={require('../assets/logoLiveb.png')} />
                <TextInput style={styles.inputNome} 
                label="firstName" 
                placeholder="Nome" 
                placeholderTextColor="#fff"
                />
                <TextInput 
                style={styles.inputNome} 
                label="lastName" 
                placeholder="Sobrenome" 
                placeholderTextColor="#fff" />
                <TextInput 
                style={styles.inputNome} 
                label="email" 
                placeholder="Email" 
                placeholderTextColor="#fff"
                keyboardType="email-address" />

                <View style={styles.viewPassword}>
                    <TextInput style={styles.inputPass} 
                    label="password" 
                    placeholder="Senha" 
                    placeholderTextColor="#fff" 
                    secureTextEntry={true} 
                    />
                    <TouchableOpacity style={styles.showPassButtonView} >
                        <Text style={styles.showPassButton}>ver</Text>    
                    </TouchableOpacity>
                </View>
 
                <TextInput 
                style={styles.inputNome} 
                label="number" 
                placeholder="Telefone" 
                placeholderTextColor="#fff"
                keyboardType="phone-pad" />

                <TextInput 
                style={styles.inputNome} 
                label="doc" 
                placeholder="CPF" 
                placeholderTextColor="#fff"
                keyboardType="numeric" />

                <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('EscolherPlano') }>
                    <Text style={styles.signInButtonText} >Cadastrar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login') }>
                    <Text style={styles.signUpButtonText}>Já tem cadastro? Clique aqui</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
        </SafeAreaView>
);    

Cadastro.navigationOptions = {
  title: 'Cadastro',
  headerShown: false,
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#CC4E35',     
    },
    containerForm:{
       paddingHorizontal: 40
    },
    logoLiveb:{
        resizeMode: 'contain',
        width:200,
        height:200,
        padding: 10,
        alignSelf:'center',
        justifyContent: 'center'
    },
    inputNome:{
        backgroundColor: "rgba(255,255,255,0.3)",
        width: '100%',
        height: 50,
        color: '#fff',
        borderRadius: 20,
        marginTop:20,
        paddingHorizontal:20
    },
    viewPassword:{
        width: '100%',
        backgroundColor: "rgba(255,255,255,0.3)",
        flexDirection: 'row',
        borderRadius: 20,
        marginTop: 20,
        height: 50,
        paddingLeft: 20,
        alignContent: 'center'
        
    },
    inputPass:{
        backgroundColor: "transparent",
        height: 50,
        width: '85%',
        color: '#fff',
        borderRadius: 20,
    },
    showPassButtonView:{
        justifyContent: 'center',
        alignItems:'center',

        
    },
    showPassButton:{
        color:'#fff',
        
    },
    signInButton:{
        backgroundColor: '#32151C',
        height: 50,
        marginTop: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    signInButtonText:{
        color:"#fff",
        fontSize: 17,
        fontWeight:'bold',
        
    },
    signUpButton:{
        height:50,
        alignItems: "center",
        marginTop:20
    },
    signUpButtonText:{
        fontSize: 15,
        color:"#fff",
    }
});


export default Cadastro;