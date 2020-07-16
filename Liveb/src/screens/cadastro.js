import React from 'react'
import {View, Text, SafeAreaView, StyleSheet, Dimensions}  from 'react-native'
import { } from 'react-navigation'

const { width } = Dimensions.get("window");
const height = width * 1.3;

const Cadastro = () =>(
    
    <SafeAreaView styles>
        <View style={{ width, height, backgroundColor: '#f0f' }}>
            <Text>Cadastro</Text>
        </View>
    </SafeAreaView>
);

Cadastro.navigationOptions = {
  title: 'Cadastro',
  headerShown: true,
}

const styles = StyleSheet.create({

});


export default Cadastro;