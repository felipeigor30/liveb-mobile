import React, { Component } from 'react'
import * as Animatable from 'react-native-animatable'
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from 'react-native'

const InitialScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          fadeDuration="none"
          source={require('../assets/logoLiveb.png')}
          style={styles.logo}
          resizeMode='stretch' />
      </View>
      <Animatable.View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.title}>A melhor maneira para INVESTIR</Text>
        <Text style={styles.text}>Acesse ou crie, seja um LIVEBER agora mesmo</Text>
        <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => navigation.navigate('Register')}><Text style={styles.textSign}>Me tornar um LIVEBER</Text></TouchableOpacity>
        </View>
        <View style={styles.button}>
        <TouchableOpacity style={styles.signUp} onPress={() => navigation.navigate('Login')}><Text style={styles.textSignUp}>Acessar minha conta</Text></TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;
const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC4E35'
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"

  },
  footer: {
    flex: 1,
    backgroundColor: '#4b0082',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: '#fff',
    marginTop: 5,
    
    fontWeight: '300'
  },
  button: {
    alignItems: 'center',
    marginTop: 30
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    backgroundColor: '#cc4e35'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth:2
    
  },
  textSignUp: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default InitialScreen