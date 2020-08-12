import React, { Component, useEffect, useState } from 'react';
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

    }
    

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
      }
    })

    //new line
    

  }
  deslogarUsuario = () => { firebase.auth().signOut() }

  render() {
    const userID = firebase.auth().currentUser.uid
    firebase.firestore().collection('pagamentos').doc(userID)
    .onSnapshot(doc => {
      var pgt = doc.data()
      
      this.setState({ id0030: pgt.id0030  })
      this.setState({ id0060: pgt.id0060  })
      this.setState({ id0090: pgt.id0090  })
      this.setState({ id0120: pgt.id0120  })
      this.setState({ id0150: pgt.id0150  })
      this.setState({ id0180: pgt.id0180  })
      this.setState({ pagar0030: pgt.pagar0030  })
      this.setState({ pagar0060: pgt.pagar0060  })
      this.setState({ pagar0090: pgt.pagar0090  })
      this.setState({ pagar0120: pgt.pagar0120  })
      this.setState({ pagar0150: pgt.pagar0150  })
      this.setState({ pagar0180: pgt.pagar0180  })
      this.setState({ statusPagamento0030: pgt.statusPagamento0030  })
      this.setState({ statusPagamento0060: pgt.statusPagamento0060  })
      this.setState({ statusPagamento0090: pgt.statusPagamento0090  })
      this.setState({ statusPagamento0120: pgt.statusPagamento0120  })
      this.setState({ statusPagamento0150: pgt.statusPagamento0150  })
      this.setState({ statusPagamento0180: pgt.statusPagamento0180  })
        
      
    })
    
      const docs = [
        {
          id: this.state.id0030,
          title: this.state.pagar0030 + ' pagamento',
          state: this.state.statusPagamento0030
        },
        {
          id: this.state.id0060,
          title: this.state.pagar0060 + ' pagamento',
          state: this.state.statusPagamento0060
        },
        {
          id: this.state.id0090,
          title: this.state.pagar0090 + ' pagamento',
          state: this.state.statusPagamento0090
        },
        {
          id: this.state.id0120,
          title: this.state.pagar0120 + ' pagamento',
          state: this.state.statusPagamento0120
        },
        {
          id: this.state.id0150,
          title: this.state.pagar0150 + ' pagamento',
          state: this.state.statusPagamento0150
        },
        {
          id: this.state.id0180,
          title: this.state.pagar0180 + ' pagamento',
          state: this.state.statusPagamento0180
        },
      
      ]
    
    


    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userNameView}>
          <WhatsApp />
          <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', alignSelf: 'flex-start' }}>Olá, {this.state.name}</Text>
          <Text style={{ color: '#fff', fontSize: 55, fontWeight: 'bold', alignSelf: 'center' }}>R$ {this.state.valorInvestido}</Text>
          <Text style={{ color: '#fff', alignSelf: 'center', marginVertical: 10 }}>valor total de cota comprada</Text>
        </View>
        <View style={styles.cardViewIncome}>
          <Text style={{ color: '#CC4E35' }}>Rendimentos</Text>
          <FlatList
          
            data={docs}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Text style={[(item.state === true) ? styles.statePago : styles.stateNaoPago]}>{item.title}</Text>}
            style={styles.componentFlatlistItem}
            
          />

        </View>
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
    backgroundColor: '#fff',
    flex: 4,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  statePago: {
    fontSize: 18,
    color: '#30cb00',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  stateNaoPago: {
    fontSize: 18,
    color: '#F00',
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
  },
  componentFlatlistItem: {

    marginHorizontal: 10,
    marginVertical: 10

  }
});

