import 'react-native-gesture-handler'
import React from 'react'
import {View, Text, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions}  from 'react-native'
import { } from 'react-navigation'

const { width } = Dimensions.get("window");
const height = width * 1.3;
const Login = ({navigation}) =>(
    
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

        <TouchableOpacity>
            <Text style={styles.forgotPassButton}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('TabNavigator') }>
            <Text style={styles.signInButtonText} >Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}  onPress={() => navigation.navigate('Cadastro') }>
            <Text style={styles.signUpButtonText}>Ainda não tem cadastro? Clique aqui</Text>
        </TouchableOpacity>
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
        justifyContent:'center',
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
    },
    forgotPassButton:{
        fontSize: 15,
        color: '#fff',
        marginTop:10,
        alignSelf: 'flex-end'
        
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

export default Login;