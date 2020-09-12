import React, { Component, useEffect, useState } from 'react';
import * as Animatable from 'react-native-animatable'
import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import { } from 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';


import WhatsApp from '../components/whats'
export default class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      displayName: '',
      name: '',
      valorInvestido: 0,
      newPagamentos: []
    }
  }
  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      />
    );
  };

  renderList = ({ pagar, statusPagamento }) => {
    return (
      <Text style={[(statusPagamento === true) ? styles.statePago : styles.stateNaoPago]}>
        Recebimento em {pagar} {(statusPagamento === true ? ' ' : ' ')}
      </Text>

    )
  }

  componentDidMount() {


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const { displayName, email } = firebase.auth().currentUser;
        this.setState({ email, displayName })

        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).onSnapshot(doc => {
          var valorInvestido = doc.data().valorInvestido

          this.setState({ valorInvestido: valorInvestido })
          var name = doc.data().name
          this.setState({ name: name })
        })
        firebase.firestore().collection('users').doc(userID).onSnapshot(doc => {
          var status = doc.data().valorInvestido
          if (status > 0) {
            firebase.firestore().collection('pagamentos').doc(userID).onSnapshot((snapshot) => {
              const rest = [...snapshot.data().pags]

              this.setState(this.state.newPagamentos = rest)
              

            })
          } 
        })
      }
    })
  }

  render() {

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userNameView}>
          <WhatsApp />
          <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start' }}>Olá, {this.state.name}</Text>
          <Text style={{ color: '#fff', fontSize: 55, fontWeight: 'bold', alignSelf: 'center' }}>R$ {this.state.valorInvestido}</Text>
          <Text style={{ color: '#fff', alignSelf: 'center', marginVertical: 10 }}>valor total de cota comprada</Text>
        </View>
        <Animatable.View style={styles.cardViewIncome} animation='slideInUp'>
          <Text style={{ color: '#fff' }}>Rendimentos</Text>
          <FlatList
            
            data={this.state.newPagamentos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => this.renderList(item)}
            // renderItem={({ item }) => <Text style={[(item.state === true) ? styles.statePago : styles.stateNaoPago]}>{item.title}</Text>}
            style={styles.componentFlatlistItem}
            showsVerticalScrollIndicator={false}

          />

        </Animatable.View>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CC4E35'
  },
  userNameView: {
    flex: 2,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "space-between",
  },
  userNameText: {
    color: '#fff',
    fontSize: 18,
  },
  cardViewIncome: {
    paddingTop: 20,
    paddingHorizontal: 30,
    backgroundColor: '#4b0082',
    flex: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  statePago: {
    fontSize: 15,
    textTransform: "uppercase",
    color: '#30cb00',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  stateNaoPago: {
    fontSize: 15,
    textTransform: "uppercase",
    color: '#bbb',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  componentFlatlistItem: {
    marginVertical: 10,
    

  }
});