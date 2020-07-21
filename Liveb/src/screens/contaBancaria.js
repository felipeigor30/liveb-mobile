import 'react-native-gesture-handler'
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import { } from 'react-navigation'

const ContaBancaria = ({navigation}) => (
    <SafeAreaView style={styles.container}>

        <View style={styles.titleContainer}>
            <Text style={styles.titlePage}>Conta bancaria</Text>
        </View>
        <View style={styles.cardView}>
            <View>
                <Text>LIVEB INVESTIMENTOS LTDA.</Text>
            </View>
            <View>
            <Text>CNPJ: 02.332.886/0016-82</Text>
            </View>
            <View>
            <Text>BANCO SANTANDER (BRASIL) S.A</Text>
            
            </View>
            <View>
            <Text>AGENCIA: 9999-9</Text>
            
            </View>
            <View>
            <Text>CONTA: 897229-9</Text>
            </View>
            <View>
            <Text>TIPO DE CONTA: CORRENTE</Text>
            </View>
        </View>

    </SafeAreaView>
);


const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CC4E35',
        flex:1
    },
    titleContainer:{
        paddingHorizontal:20,
        paddingTop:20,
        margin: 30,
        flex:2,
    },
    cardView:{
        flex:4,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
        borderRadius:30,
    },
    titlePage:{
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold'
    }
})

export default ContaBancaria;




