import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { WebView } from 'react-native-webview'

const { width } = Dimensions.get("window");
const width2 = width * 0.9;
const height = width * 0.3;

export default class ContratoBlack extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value0: true,
            value1: false,
            value2: true,
            value3: false,
            value4: false,
            lineWidth: 10,
            contratoLido: true,
            confirmouContrato: false
        };
    }
    registerComplete = () => {
        const userID = firebase.auth().currentUser.uid
        firebase.firestore().collection('users').doc(userID).update({
            confirmouContrato: true,
        })
            .then(firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    const userID = firebase.auth().currentUser.uid
                    firebase.firestore().collection('users').doc(userID).onSnapshot(doc => {
                        var confirmouContrato = doc.data().confirmouContrato
                        firebase.auth().onAuthStateChanged((user) => {
                            if (user && confirmouContrato === true) {
                                this.props.navigation.navigate("Recipe")
                            } else {
                                console.log('nao')
                            }
                        })
                    })
                }
            }))
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <WebView source={{ uri: 'https://drive.google.com/file/d/1O3h5VLmQqGn-f_MHJz_DAij8OgyEZ5Ui/view?usp=sharing' }}
                        style={{ width: width2, marginTop: 55 }} />
                    <View style={{ flexDirection: 'row', alignItems: "center", marginVertical: 20 }}>
                        <CheckBox style={{ width: 30, height: 30, marginHorizontal: 15 }}
                            value={this.state.value4}
                            hideBox={false}
                            onValueChange={value => {
                                this.setState({ value4: value })
                                value === true ? this.setState({ contratoLido: false }) : this.setState({ contratoLido: true })
                            }}
                            onAnimationDidStop={() => console.log('onAnimationDidStopEvent')}
                            lineWidth={3}
                            hideBox={false}
                            boxType={'circle'}
                            tintColor={'#fff'}
                            onCheckColor={'#FFF'}
                            onFillColor={'#32151C'}
                            onTintColor={'#F4DCF8'}
                            animationDuration={0.5}
                            disabled={false}
                            onAnimationType={'bounce'}
                            offAnimationType={'stroke'}
                        /><Text style={{ color: '#fff', fontSize: 15, fontWeight: '600' }}>Li e estou de acordo com esse contrato</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <TouchableOpacity
                            disabled={this.state.contratoLido}
                            onPress={this.registerComplete}
                            style={[this.state.contratoLido === true ? styles.botaoConcordarDisable : styles.botaoConcordar]}>
                            <Text style={styles.texto}>Concordo com os termos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CC4E35'
    },

    viewButton: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    botaoConcordar: {
        height: 42,
        borderRadius: 20,
        backgroundColor: '#32151C',
        width: '80%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    botaoConcordarDisable: {
        height: 42,
        borderRadius: 20,
        backgroundColor: '#32151C50',
        width: '80%',
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20

    },
    texto: {
        color: '#fff',
        fontWeight: "bold"
    },

})