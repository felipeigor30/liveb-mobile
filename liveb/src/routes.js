import 'react-native-gesture-handler';
import React from 'react';
import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Carousel from './screens/carousel';
import Login from './screens/login';
import Cadastro from './screens/cadastro';


const Routes = createAppContainer(
  createStackNavigator({
    Carousel: Carousel,
    Login: Login,
    Cadastro: Cadastro,
  })
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