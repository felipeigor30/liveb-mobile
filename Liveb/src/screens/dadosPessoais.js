import 'react-native-gesture-handler'
import React,{Component} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'

import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


export default class DadosPessoaisScreen extends Component{
    constructor(props){
      super(props)
    
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titlePage}>Dados Pessoais</Text>
                </View>
                <View style={styles.cardView}>
                 <Text>Nome</Text>
                 <Text>Sobrenome</Text>
                 <Text>Email</Text>
                 <Text>CPF</Text>
                 <Text>Telefone</Text>

                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#CC4E35'
    },
    titleContainer:{
        paddingHorizontal:20,
        paddingTop:20,
        margin: 30
    },
    titlePage:{
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    },
    cardView:{
        backgroundColor: '#fff',
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    buttonConfig:{
        backgroundColor: '#EAEAEA',
        height: 'auto',
        margin:10,
        paddingHorizontal: 20,
        paddingVertical: 20, 
        width:'80%',
        borderRadius: 10,
        flexDirection: 'row',
        textAlignVertical: "center"
        
        
    },
    buttonConfigText:{
        color:'#CC4E35',
        fontSize: 22,
        alignSelf: 'flex-start' ,
        justifyContent: 'center',

    },
    viewIcon:{
        alignContent:"center",
        justifyContent:"center"
    },
    icon:{
        color: '#CC4E35',
    }
});

