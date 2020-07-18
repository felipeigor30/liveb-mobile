import 'react-native-gesture-handler'
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Alert, TouchableOpacity, Dimensions, NativeEventEmitter, NativeAppEventEmitter } from 'react-native';

import { } from 'react-navigation';


const { width } = Dimensions.get("window");
const height = width * 1.3;

const Carousel = ({ navigation }) => (
//export default class Carousel extends Component {


      <SafeAreaView style={styles.safearea}>
        <ScrollView
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          style={{ width, height }}>
          <View style={styles.viewImage}>
            <Text style={width,styles.titleCard}>Bem vindo a Liveb Investimentos</Text>
            <Image source={require('../assets/one.png')} style={{ width, height, resizeMode: 'contain' }} />
            <Text style={width,styles.descriptionCard}>Chipper is your student loan sidekick! We use powerful technology and a team of human experts to help you craft the perfect repayment plan and automate payments based on your unique budget.</Text>
          </View>
          <View style={styles.viewImage}>
            <Text style={width,styles.titleCard}>Confiança e credibilidade</Text>
            <Image source={require('../assets/two.png')} style={{ width, height, resizeMode: 'contain' }} />
            <Text style={width,styles.descriptionCard}>Chipper is your student loan sidekick! We use powerful technology and a team of human experts to help you craft the perfect repayment plan and automate payments based on your unique budget.</Text>
          </View>
          <View style={styles.viewImage}>
            <Text style={width,styles.titleCard}>Temos a melhor solução</Text>
            <Image source={require('../assets/tree.png')} style={{ width, height, resizeMode: 'contain' }} />
            <Text style={width,styles.descriptionCard}>Chipper is your student loan sidekick! We use powerful technology and a team of human experts to help you craft the perfect repayment plan and automate payments based on your unique budget.</Text>
          </View>
        </ScrollView>
        <View style={styles.viewButtonsLogin}>
          <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Cadastro') }>
            <Text style={styles.textColorSignUp}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Login') }>
            <Text style={styles.textColorSignIn}>Entrar</Text>
          </TouchableOpacity>
        </View>

      </SafeAreaView>
  
);
Carousel.navigationOptions = {
  title: 'Voltar',
  headerShown:false 
}





const styles = StyleSheet.create({
  safearea: {
    backgroundColor: '#CC4E35',
    margin: 0,
    flex:1, 
    paddingHorizontal: 0
  },
  viewImage:{
    width, 
    height, 
    padding:10
    },
  titleCard:{
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    top:"15%",   
    width,
    paddingHorizontal: 100,
    zIndex: 10,
    position: 'relative',
    fontSize:22,
    fontWeight: 'bold'
  },
  descriptionCard:{
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    top: '-40%',
    paddingHorizontal: 100,
    zIndex: 10,
    position: 'relative',
    fontSize:15,
    fontWeight: '100'
  },  
  
  dotView:{
    flexDirection: 'row',
    position: 'relative',
    bottom: 0,
    alignSelf:"center"
  },
  dotStyle:{
    fontSize: (width / 30),
    color: '#888',
    margin: 3  
  },
  dotStyleActive:{
    fontSize: (width / 30),
    color: '#FFF',
    margin: 3
  },
  box: {
    padding: 10,
    backgroundColor: 'transparent',
    alignItems: "center",
    justifyContent: "center"
  },

  image: {
    width: "100%",

    aspectRatio: 2 / 4,
  },
  viewButtonsLogin:{
    marginBottom:20,
    
  },
  signUpButton: {
    backgroundColor: '#fff',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 50
  },
  signInButton: {
    backgroundColor: '#CC4E35',
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FFF"

  },
  textColorSignIn: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600'
  },
  textColorSignUp: {
    fontSize: 17,
    fontWeight: '600'
  }
});


export default Carousel;