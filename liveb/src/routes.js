import 'react-native-gesture-handler';  
import  { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



import Carousel from './screens/carousel';
import Login from './screens/login';
import Cadastro from './screens/cadastro';
import LoadingScreen from './screens/loadingScreen';
import EscolherPlano from './screens/escolherPlano';
import ContaLiveb from './screens/contaLiveb'
import ContaBancaria from './screens/contaBancaria'
import Recipe from './screens/recipe';
import TabNavigator  from './components/tabNavigator';

const Routes = createAppContainer(
  createStackNavigator({
    LoadingScreen: {
      screen: LoadingScreen,
      navigationOptions:{
        headerShown:false
      }
    },
    Carousel: Carousel,
    Login: {
      screen:Login,
      navigationOptions:{
        headerShown: false,
      }
      
    },
    Cadastro: {
      screen: Cadastro,
      navigationOptions:{
        headerShown: false
      }
    },
    Recipe: {
      screen: Recipe,
      navigationOptions:{
        headerShown: false
      }
    },
    TabNavigator: {
      screen: TabNavigator,
      navigationOptions:{
        headerShown: false,
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
    EscolherPlano: EscolherPlano,
       
  }),
  
);

export default Routes;