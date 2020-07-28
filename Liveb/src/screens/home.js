import React,{Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, Image, Linking} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import {  } from 'react-native-gesture-handler';
import firebase from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';

export default class Home extends Component{
    state = {
        email: '',
        displayName: '',
    };
    componentDidMount(){
        const {email, displayName} = firebase.auth().currentUser;
        this.setState({email, displayName});
        
    }
    render(){
        const docs = [
            {
              id: '1',
              title: '30/05/2020 pagamento',
              state: true
            },
            {
              id: '2',
              title: '30/06/2020 pagamento',
              state: true
            },
            {
              id: '3',
              title: '30/07/2020 pagamento',
              state: false
            },
            {
                id: '4',
                title: '30/08/2020 pagamento',
                state: false
              },
              {
                id: '5',
                title: '30/09/2020 pagamento',
                state: false
              },
              {
                id: '6',
                title: '30/10/2020 pagamento',
                state: false
              },
          ];
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.userNameView}>
                        <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => Linking.openURL('https://api.whatsapp.com/send?phone=5516993850380&text=Teste')}>

                        <Image source={require('../assets/support-button.png')}></Image>
                    </TouchableOpacity>                                
                    <Text style={{color: '#fff',fontSize: 55, fontWeight: 'bold', alignSelf: 'center'}}>R$ 1000</Text>
                    <Text style={{color:'#fff', alignSelf: 'center',marginVertical:10}}>valor total de cota comprada</Text>
                    
                </View>
                <View style={styles.cardViewIncome}>
                {/* <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => Linking.openURL()}> */}
                    <Text style={{color:'#CC4E35'}}>Rendimentos</Text>
                    <FlatList
                        data={docs}
                        keyExtractor={item => item.id}
                        renderItem={({item}) => <Text style={[(item.state === true) ? styles.statePago : styles.stateNaoPago ]}>{item.title}</Text> }
                        style={styles.componentFlatlistItem}  
                        />
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
    userNameView:{
        flex:2,
        paddingHorizontal:20,
        paddingTop:20,
        justifyContent: "space-between",
    },
    userNameText:{
        color: '#fff',
        fontSize: 18,
    },
    cardViewIncome:{
        paddingTop:20,
        paddingHorizontal:30,
        backgroundColor: '#fff',
        flex:4,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,  
    },
    statePago:{
        fontSize:18,
        color: '#30cb00',
        marginVertical:10,
        paddingVertical:10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth:1,
    },
    stateNaoPago:{
        fontSize:18,
        color: '#F00',
        marginVertical:10,
        paddingVertical:10,
        borderBottomColor: 'rgba(0,0,0,0.1)',
        borderBottomWidth:1,
    },
    componentFlatlistItem:{
        
        marginHorizontal:30,
        marginVertical: 20
        
    }
});

