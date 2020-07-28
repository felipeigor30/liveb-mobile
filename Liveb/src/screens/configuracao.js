import React,{Component} from 'react'
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();
import firebase from '@react-native-firebase/app'
import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../screens/home';
import ContaBancaria from './contaBancaria';

export default class Configuracao extends Component{
    
    signOutUser = () =>{
        firebase.auth().signOut();
    }
    

    render(){
        const openScreen = createAppContainer(
            createStackNavigator({
                ContaBancaria: {
                  screen: ContaBancaria,
                  navigationOptions:{
                    headerShown:false
                  }
                },
            })
        )

        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titlePage}>Configurações</Text>
                    <View style={styles.viewIcon}>
                    <Icon name="chevron-forward" size={22} style={styles.icon} />
                    </View>    
                </View>
                <View style={styles.cardView}>
                <TouchableOpacity style={styles.buttonConfig}>
                    <Text style={styles.buttonConfigText}>Dados pessoais</Text>
                    <View style={styles.viewIcon}>
                    <Icon name="chevron-forward" size={22} style={styles.icon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonConfig} 
                onPress={() => this.props.navigation.navigate('ContaBancaria')}>
                    <Text style={styles.buttonConfigText}>Conta bancaria</Text>
                    <View style={styles.viewIcon}>
                    <Icon name="chevron-forward" size={22} style={styles.icon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonConfig}>
                    <Text style={styles.buttonConfigText}>Notificações</Text>
                    <View style={styles.viewIcon}>
                    <Icon name="chevron-forward" size={22} style={styles.icon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.buttonConfig} 
                onPress={() => openScreen()}    >
                    <Text style={styles.buttonConfigText}>Conta bancaria Liveb</Text>
                    <View style={styles.viewIcon}>
                    <Icon name="chevron-forward" size={22} style={styles.icon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonConfig} onPress={() => this.signOutUser()}>
                    <Text style={styles.buttonConfigText}>Logoff</Text>
                    <View style={styles.viewIcon}>
                    <Icon name="chevron-forward" size={22} style={styles.icon} />
                    </View>
                </TouchableOpacity>
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

