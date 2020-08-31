import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, Dimensions} from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

const { width } = Dimensions.get("window");
const height = width * 0.6;

export default class PedirContaBancaria extends Component{
    constructor(props){
        super(props)
        
    }
    
    requestBankDetails = () => { 
      this.props.navigation.navigate("CadastroContaBancaria")
  }
    componentDidMount(){
    }

    render(){
        return(
            <SafeAreaView style={styles.container}>
                <Image source={require('../assets/logoLiveb.png')} style={{ width, height, resizeMode: 'contain' }} />
                <View style={{margin:20}}>
                    <Text style={styles.text}>
                        Para que possamos fazer o pagamento dos seus rendimento precisamos da sua conta bancaria.
                    </Text>
                    <Text style={styles.text}>
                        Lembre-se, esta conta precisa ser no mesmo CPF de cadastro da sua conta LIVEB.
                    </Text>
                </View>
                <View style={styles.viewButton}>
                    
                    <TouchableOpacity
                    onPress={this.requestBankDetails}
                    style={styles.botao}>
                        <Text style={styles.textoBotao}>Cadastrar conta Bancaria</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#CC4E35',
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize:18, 
        fontWeight:'600',
        textAlign:'center',
        color: '#fff'
        
    },
    viewButton:{
        width:'100%',        
        justifyContent: "center",
        alignItems: "center",
        
    },
    botao:{
        height:42,
        borderRadius:20,
        backgroundColor: '#4b0082',
        width: '80%',
        justifyContent: "center",
        alignItems: "center"
    },
    textoBotao:{
        color: '#fff',
        fontWeight: "bold"
    },
    

})