import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Image, Dimensions, TextInput}  from 'react-native'
import { } from 'react-navigation'

const { width } = Dimensions.get("window");
const height = width * 1.3;

const Cadastro = () =>(
    
    <SafeAreaView style={styles.container}>
        <View style={styles.containerForm}>
            <Image style={styles.logoLiveb} source={require('../assets/logoLiveb.png')} />
            <TextInput style={styles.inputNome} label="Nome" placeholder="Nome" placeholderTextColor="#fff" />
        </View>
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
        height: 40,
        color: '#fff',
        borderRadius: 20,
        paddingHorizontal:20

        
        
    }

});


export default Cadastro;