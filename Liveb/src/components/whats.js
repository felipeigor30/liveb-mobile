import React, {Component} from 'react'
import {TouchableOpacity, Image, Linking} from 'react-native'

export default class WhatsApp extends Component {
  render(){
    return(
        <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=5516996050033&text=Ola')}>
        <Image source={require('../assets/support-button.png')}></Image>
        </TouchableOpacity>    

    )
  }
 }
