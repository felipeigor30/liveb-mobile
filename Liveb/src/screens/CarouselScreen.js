import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';


export default class Carousel extends Component{
    
    static navigationOptions = {
        title: 'Carousel',
        headerStyle: {
            backgroundColor: '#CC4E35',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }
    };
    render(){
        return(
            <View>
                <Text>Olá Carousel View </Text>
            </View>
        )
    }    
    
}
