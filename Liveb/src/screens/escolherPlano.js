import 'react-native-gesture-handler'
import React, { Component } from 'react'
import {View, Text,TouchableOpacity, SafeAreaView, StyleSheet} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { } from 'react-navigation'


export default class EscolherPlano extends React.Component{
    render(){
        return(
           <SafeAreaView style={styles.container}>
               <View>
                   <TouchableOpacity>
                       <Text style={{color: '#fff'}}>Botao</Text>
                   </TouchableOpacity>
               </View>
           </SafeAreaView>
        );
    }
}


EscolherPlano.navigationOptions = {
    title: 'Escolha do Plano',
    headerShown: false,
  }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#CC4E35'
    }
})