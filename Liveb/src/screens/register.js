import 'react-native-gesture-handler'
import React, {Component} from 'react'
import {View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TextInput, ScrollView, TouchableOpacity, KeyboardAvoidingView, Platform }  from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const { width } = Dimensions.get("window");
const height = width * 1.3;



export default class RegisterScreen extends Component{
    static navigationOption={
        header: null
      }
      state={
        name: "",
        lastName:"",
        phone:"",
        cpf:'',
        email: '',
        password: '',
        possuiPlano: false,
        nomePlano: '',
        numeroPlano: 0,  
        valorInvestido: 0,
        errorMessage: null,

    }

    handleCadastro = () =>{
        
        const {name, lastName, phone, cpf, email, password, plano, nomePlano, numeroPlano } = this.state;  
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
              valorInvestido: 0
              
          })
              return userCredentials.user.updateProfile({displayName: this.state.name, })
            }
          )
          .catch(error => this.setState({errorMessage: error.message}))
  }
    

    render(){
        return(
            <KeyboardAvoidingView 
                style={{flex:1, backgroundColor: '#CC4E35'}}
                behavior={Platform.os=== 'ios' ? 'padding' : undefined}
                enabled>
                <ScrollView contentContainerStyle={{backgroundColor: '#CC4E35'}} keyboardShouldPersistTaps="handled">
                <SafeAreaView style={styles.container}>
                    <View style={styles.containerForm}>
                        <Image style={styles.logoLiveb} source={require('../assets/logoLiveb.png')} />
                        <TextInput style={styles.inputNome} 
                        
                        placeholder="Nome" 
                        placeholderTextColor="#fff"
                        onChangeText={name => this.setState({name})}
                        value={this.state.name}
                        />
                        
                        <TextInput 
                        style={styles.inputNome} 
                        
                        placeholder="Sobrenome" 
                        placeholderTextColor="#fff" 
                        onChangeText={lastName => this.setState({lastName})}
                        value={this.state.lastName}
                        />
                        <TextInput 
                        style={styles.inputNome} 
                        
                        placeholder="Email" 
                        placeholderTextColor="#fff"
                        keyboardType="email-address" 
                        onChangeText={email => this.setState({email})}
                        value={this.state.email}
                        />

                        <View style={styles.viewPassword}>
                            <TextInput style={styles.inputPass} 
                            
                            placeholder="Senha" 
                            placeholderTextColor="#fff" 
                            secureTextEntry={true} 
                            onChangeText={password => this.setState({password})}
                            value={this.state.password}
                            />
                            <TouchableOpacity style={styles.showPassButtonView} >
                                <Text style={styles.showPassButton}>ver</Text>    
                            </TouchableOpacity>
                        </View>

                        <TextInput 
                        style={styles.inputNome} 
                        
                        placeholder="Telefone" 
                        placeholderTextColor="#fff"
                        keyboardType="phone-pad"
                        onChangeText={phone => this.setState({phone})}
                        value={this.state.phone}
                        />

                        <TextInput 
                        style={styles.inputNome} 
                        
                        placeholder="CPF" 
                        placeholderTextColor="#fff"
                        keyboardType="numeric"
                        onChangeText={cpf => this.setState({cpf})}
                        value={this.state.cpf}
                        />

                        <TouchableOpacity 
                        style={styles.signInButton} 
                        onPress={this.handleCadastro}>
                            <Text style={styles.signInButtonText} >Cadastrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={styles.signUpButton} 
                        onPress={() => this.props.navigation.navigate('Login') }>
                            <Text style={styles.signUpButtonText}>Já tem cadastro? Clique aqui</Text>
                        </TouchableOpacity>
                    </View>
                   </SafeAreaView>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
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

