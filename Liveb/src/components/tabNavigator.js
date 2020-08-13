import { } from 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';



import HomeScreen from '../screens/home';
import Configuracao from '../screens/configuracao';
import { createStackNavigator } from 'react-navigation-stack';
import DadosPessoais from '../screens/dadosPessoais'


const ConfiguracaoStack = createStackNavigator({
    Configuracao: {
        screen: Configuracao,
        navigationOptions: {
            headerShown:false,
            
            title: 'Configuração',
            tabBarIcon: ({ tintColor }) => (
                <View>
                    <Icon style={{ color: tintColor }} size={25} name="cog" />
                </View>
            )
        }
    },
    DadosPessoais:{
        screen: DadosPessoais,
        navigationOptions: {
            headerShown:false,
        }
    },
    
}) 
const TabNavigator = createMaterialBottomTabNavigator(

    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={{ color: tintColor }} size={25} name="git-compare" />
                    </View>
                )
            }
        },
        // Configuracao: {
        //     screen: Configuracao,
        //     navigationOptions: {
        //         title: 'Configuração',
        //         tabBarIcon: ({ tintColor }) => (
        //             <View>
        //                 <Icon style={{ color: tintColor }} size={25} name="cog" />
        //             </View>
        //         )
        //     }
        // },
        ConfiguracaoStack
        
    },
    {
        initialRouteName: 'Home',
        activeColor: '#32151C',
        inactiveColor: '#B1989E',
        barStyle: { backgroundColor: '#F1F1F1' }
    }

);



export default createAppContainer(TabNavigator);    
