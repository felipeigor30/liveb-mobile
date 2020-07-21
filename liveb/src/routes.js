import 'react-native-gesture-handler';
import React from 'react';
import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import Carousel from './screens/carousel';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import EscolherPlano from './screens/escolherPlano';

import TabNavigator from './components/tabNavigator';
import ContaLiveb from './screens/contaLiveb'
import ContaBancaria from './screens/contaBancaria'

const Routes = createAppContainer(
  createStackNavigator({
    Carousel: Carousel,
    Login: Login,
    Cadastro: Cadastro,
    EscolherPlano: EscolherPlano,
    ContaLiveb: {
      screen: ContaLiveb,
      navigationOptions:{
        headerShown: true,
        headerTitle: ' ',
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }
    },
    ContaBancaria: {
      screen: ContaBancaria,
      navigationOptions:{
        headerShown: true,
        headerTitle: ' ',
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, 
      }
    },
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions:{
        headerShown: false,
      }
    },
       
  }),
  
);

export default Routes;


// const screen ={
//   Carousel:{
//     screen: Carousel,
//     navigationOptions:{
//       headerStyle:{
//         backgroundColor: "#CC4E35"
//       },
//       headerTintColor: "#CC4E35"
//     }
    
//   },    
// } 

// const App = () => <Carousel />;

// export default App;


// const screenRender = createStackNavigator(screen);

// export default createAppContainer(screenRender);