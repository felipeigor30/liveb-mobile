import React,{Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView} from 'react-native'

export default class ConfirmarPlanoPlatinum extends Component{


    render(){
        return(
            <SafeAreaView style={styles.container}>
                <View>
                    <Text style={styles.title}>Conheça o plano</Text>
                </View>
                <View style={{flex:1, justifyContent:'center', alignItems: 'center'}}>
                    <ScrollView>
                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</Text>
                </ScrollView>
                <TouchableOpacity onPress={() =>this.props.navigation.navigate('ComprarCotasPlatinum')} style={styles.button}>
                    <Text style={styles.buttonText}>Comprar cotas</Text>
                </TouchableOpacity>
            </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#CC4E35',
        margin: 0,
        flex:1, 
        paddingHorizontal: 0 
    },
    title:{
        marginTop: 20,
        color: '#fff',
        fontSize: 35,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    description:{
        color: '#fff',
        flex:1, 
        marginTop:15, 
        fontSize:15,
        marginHorizontal:20, 
        textAlign: 'justify'
    },
    button:{
        backgroundColor: '#32151C',
        height: 50,
        width:'60%',
        marginTop: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText:{
        color:"#fff",
        fontSize: 17,
        fontWeight:'bold',
    }
})