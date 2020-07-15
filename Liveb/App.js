// import 'react-native-gesture-handler';
// import React, {Component} from 'react';
// import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
// import { createAppComponent } from 'react-navigation';
// import { createStackNavigator } from 'react-native-stack';
// //import './src/config/StatusBarConfig';

// export default class App extends Component{

//   render() {
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.texto}>Olá Liveb</Text>
//       </SafeAreaView>

//     );
//   }
// }

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     backgroundColor: '#CC4E35',
//     padding: 20
//   },
//   texto:{
//     color: "#FFF",
//     fontSize: 22,
//     fontWeight: 'bold'
//   }
// });

// //export default App;

import React from 'react';
import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Carousel from './src/screens/CarouselScreen';

const screen ={
  Carousel:{
    screen: Carousel
  },    
} 


const screenRender = createStackNavigator(screen);

export default createAppContainer(screenRender);