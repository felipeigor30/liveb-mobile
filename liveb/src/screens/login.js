import 'react-native-gesture-handler'
import React,{Component} from 'react'
import {View, Text, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, Dimensions}  from 'react-native'



import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'




const { width } = Dimensions.get("window");
const height = width * 1.3;


export default class LoginScreen extends Component {
        state={
        email: '',
        password: '',
        errorMessage: null
      }
        
      handleLogin = () => {
        const {email, password} = this.state;
  
        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .catch(error => this.setState({errorMessage: error.message}))
        
      }

    
    render(){

       
    return(
    <SafeAreaView style={styles.container}>
    <View style={styles.containerForm}>
        <Image style={styles.logoLiveb} source={require('../assets/logoLiveb.png')} />
        <View style={styles.errorMessage}> 
        {this.state.errorMessage && <Text style={styles.erro}>{this.state.errorMessage}</Text>}
        </View>
        <Text>{this.state.logado}</Text>
        <TextInput style={styles.inputEmail}    
        autoCapitalize="none"
        placeholder="Email" 
        placeholderTextColor="#fff" 
        
        onChangeText={email => this.setState({email})}
        value={this.state.email} 
        />

        <TextInput style={styles.inputPass} 
        
        autoCapitalize="none"
        placeholder="Senha" 
        placeholderTextColor="#fff" 
        secureTextEntry={true}
        onChangeText={password => this.setState({password}) }
        value={this.state.password}
        />

        <TouchableOpacity>
            <Text style={styles.forgotPassButton}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton} onPress={this.handleLogin}>
            <Text style={styles.signInButtonText}>Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpButton}  onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.signUpButtonText}>Ainda não tem cadastro?<Text style={{fontWeight:'bold'}}> Clique aqui</Text></Text>
        </TouchableOpacity>
    </View>
</SafeAreaView>
);
}
}
LoginScreen.navigationOptions = {
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
    },
    errorMessage:{
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: "bold",
        
    },
    erro:{
        fontSize:18,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#fff',
        marginVertical:15
    }

});