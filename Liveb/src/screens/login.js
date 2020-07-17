import React from 'react'
import {View, Text, SafeAreaView, TextInput, StyleSheet, Image}  from 'react-native'
import { } from 'react-navigation'

const Login = () =>(
    
    <SafeAreaView style={styles.container}>
    <View style={styles.containerForm}>
        <Image style={styles.logoLiveb} source={require('../assets/logoLiveb.png')} />
        <TextInput style={styles.inputEmail} 
        label="email" 
        placeholder="Email" 
        placeholderTextColor="#fff" 
        keyboardType="email-address" />

        <TextInput style={styles.inputPass} 
        label="pass" 
        placeholder="Senha" 
        placeholderTextColor="#fff" 
        secureTextEntry={true} />
    </View>
</SafeAreaView>
);

Login.navigationOptions = {
  title: 'Login',
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
    inputEmail:{
        backgroundColor: "rgba(255,255,255,0.3)",
        width: '100%',
        height: 50,
        color: '#fff',
        borderRadius: 10,
        paddingStart:20,
        marginTop:10
    },
    inputPass:{
        backgroundColor: "rgba(255,255,255,0.3)",
        width: '100%',
        height: 50,
        color: '#fff',
        borderRadius: 10,
        paddingStart:20,
        marginTop:30
    }

});

export default Login;