import React,{Component} from 'react'
import {View, Text, SafeAreaView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
Icon.loadFont();
import {createAppContainer} from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'


import Home from '../screens/home';
import Configuracao from '../screens/configuracao';



const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions:{
                tabBarIcon: ({tintColor}) =>(
                    <View>
                        <Icon style={{color: tintColor}} size={25} name="git-compare" />
                    </View>
                )
            }
        },

        Configuracao: {
            screen: Configuracao,
            navigationOptions:{
                title:'Configuração',
                tabBarIcon: ({ tintColor }) =>(
                    <View>
                        <Icon style={{color: tintColor}} size={25} name="cog"  />
                    </View>
                )
            }
        },   
    },
    {
    initialRouteName: 'Home',
    activeColor: '#32151C',
    inactiveColor: '#B1989E',
    barStyle: { backgroundColor: '#F1F1F1'}
    }
);
    
export default createAppContainer(TabNavigator);