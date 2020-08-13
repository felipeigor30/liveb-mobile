import 'react-native-gesture-handler'

//Firebase Modules
import firebase from '@react-native-firebase/app'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'


//Navigation
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'



//Screens
import LoadingScreen from './screens/loading'

import LoginScreen from './screens/login'
import RegisterScreen from './screens/register'
import Recipe from './screens/recipe';
import TabNavigator from './components/tabNavigator';
import HomeScreen from './screens/home'
import EscolherPlano from './screens/escolherPlano'

import ConfirmarPlanoGold from './screens/confirmarPlano/confirmarPlanoGold'
import ConfirmarPlanoPlatinum from './screens/confirmarPlano/confirmarPlanoPlatinum'
import ConfirmarPlanoBlack from './screens/confirmarPlano/confirmarPlanoBlack'

import ComprarCotasGold from './screens/comprarCotas/comprarCotasGold'
import ComprarCotasPlatinum from './screens/comprarCotas/comprarCotasPlatinum'
import ComprarCotasBlack from './screens/comprarCotas/comprarCotasBlack'

import ConfirmarDeposito from './screens/confirmarDeposito'
import PedirContaBancaria from './screens/pedirContaBancaria'
import CadastroContaBancaria from './screens/cadastroContaBancaria'

import ContratoGold from './screens/contrato/contratoGold'
import ContratoPlatinum from './screens/contrato/contratoPlatinum'
import ContratoBlack from './screens/contrato/contratoBlack'

//Configuracoes
import DadosPessoaisScreen from './screens/dadosPessoais'
import ContaLiveb from './screens/contaLiveb'
import ContaBancaria from './screens/contaBancaria'

//Firebase db producao
// const firebaseConfig = {
//   apiKey: "AIzaSyBT0Swdwnl9NvUwIeUakHNme09KEQL_1IM",
//   authDomain: "fir-app-3f29d.firebaseapp.com",
//   databaseURL: "https://fir-app-3f29d.firebaseio.com",
//   projectId: "fir-app-3f29d",
//   storageBucket: "fir-app-3f29d.appspot.com",
//   messagingSenderId: "383303598664",
//   appId: "1:383303598664:web:4eec920e366853eff8ce7d"
// };
//   if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
// }

//Firebase db homologacao
const firebaseConfig = {
  apiKey: "AIzaSyArGhm_2oOn5JB527OYM6W_0ckpQnWoU6M",
  authDomain: "liveb-investimentos.firebaseapp.com",
  databaseURL: "https://liveb-investimentos.firebaseio.com",
  projectId: "liveb-investimentos",
  storageBucket: "liveb-investimentos.appspot.com",
  messagingSenderId: "951649084041",
  appId: "1:951649084041:web:760ddf4cd367b80473dc58",
  measurementId: "G-38026TPWQ0"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



const AppStack = createStackNavigator({
  Recipe: { screen: Recipe, navigationOptions: { headerShown: false } },
  TabNavigator: TabNavigator,

  Home: { screen: HomeScreen, navigationOptions: { headerShown: false } },
  EscolherPlano: { screen: EscolherPlano, navigationOptions: { headerShown: false } },

  ConfirmarPlanoGold: { screen: ConfirmarPlanoGold, navigationOptions: { headerShown: false } },
  ConfirmarPlanoPlatinum: { screen: ConfirmarPlanoPlatinum, navigationOptions: { headerShown: false } },
  ConfirmarPlanoBlack: { screen: ConfirmarPlanoBlack, navigationOptions: { headerShown: false } },

  ComprarCotasGold: { screen: ComprarCotasGold, navigationOptions: { headerShown: false } },
  ComprarCotasPlatinum: { screen: ComprarCotasPlatinum, navigationOptions: { headerShown: false } },
  ComprarCotasBlack: { screen: ComprarCotasBlack, navigationOptions: { headerShown: false } },

  ConfirmarDeposito: { screen: ConfirmarDeposito, navigationOptions: { headerShown: false } },
  PedirContaBancaria: { screen: PedirContaBancaria, navigationOptions: { headerShown: false } },
  CadastroContaBancaria: { screen: CadastroContaBancaria, navigationOptions: { headerShown: false } },

  ContratoGold: { screen: ContratoGold, navigationOptions: { headerShown: false } },
  ContratoPlatinum: { screen: ContratoPlatinum, navigationOptions: { headerShown: false } },
  ContratoBlack: { screen: ContratoBlack, navigationOptions: { headerShown: false } },

   ContaLiveb: { screen: ContaLiveb, navigationOptions: { headerShown: false } },
   DadosPessoais: { screen: DadosPessoaisScreen, navigationOptions: { headerShown: false } },
   ContaBancaria: ContaBancaria,
})

const AuthStack = createStackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: { headerShown: false }
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerShown: false
    }
  },

})



export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack,
      

    },
    {
      initialRouteName: "Loading"
    }
  )

);


