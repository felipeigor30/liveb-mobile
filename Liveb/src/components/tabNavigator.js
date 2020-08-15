import { } from 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from '../screens/home'
import Configuracao from '../screens/configuracao'
import DadosPessoais from '../screens/dadosPessoais'
import ContaBancaria from '../screens/contaBancaria'
import ContaLiveb from '../screens/contaLiveb'



const ConfigStackScreen = createStackNavigator({

    Configuração: {
        screen: Configuracao,
        navigationOptions: {
            headerShown: false
        }
    },
    DadosPessoais: {
        screen: DadosPessoais,
        navigationOptions: {
            headerShown: false,

        },
    },
    ContaBancaria: {
        screen: ContaBancaria,
        navigationOptions: {
            headerShown: false
        }
    },
    ContaLiveb: {
        screen: ContaLiveb,
        navigationOptions: {
            headerShown: false
        }
    }

});


ConfigStackScreen.navigationOptions = ({ navigation }) => {
    let tabBarVisible;
    if (navigation.state.routes.length > 1) {
        navigation.state.routes.map(route => {
            if (route.routeName === "DadosPessoais" || route.routeName === "ContaBancaria" || route.routeName === "ContaLiveb") {
                tabBarVisible = false;
            } else {
                tabBarVisible = true;
            }

        });
    }

    return {
        tabBarVisible
    };
}
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
        Configuração: {

            screen: ConfigStackScreen,
            navigationOptions: {

                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={{ color: tintColor }} size={25} name="cog" />
                    </View>
                )
            }
        }





    },
    {

        initialRouteName: 'Home',
        activeColor: '#32151C',
        inactiveColor: '#B1989E',
        barStyle: { backgroundColor: '#F1F1F1' }
    },
    {

    }

);

export default createAppContainer(TabNavigator);    
