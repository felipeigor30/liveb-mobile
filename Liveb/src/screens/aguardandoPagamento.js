import React,{Component} from 'react'
import * as Animatable from 'react-native-animatable'
import {View, Text, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'

export default class AguardandoPagamento extends Component{
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require('../assets/logoLiveb.png')}
          style={styles.logo}
          resizeMode='stretch' />
      </View>
      <Animatable.View style={styles.footer} animation='fadeInUpBig'>
        <Text style={styles.title}>Quase tudo pronto LIVEBER</Text>
        <Text style={styles.text}>Nossa equipe está analisando seu cadastro e assim que estiver tudo pronto, você poderá ver seus rendimentos.</Text>
      </Animatable.View>
    </View>
    )
  }
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