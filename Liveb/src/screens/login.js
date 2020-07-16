import React from 'react'
import {View, Text, SafeAreaView}  from 'react-native'
import { } from 'react-navigation'

const Login = () =>(
    
    <SafeAreaView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text>Login</Text>
        </View>
    </SafeAreaView>
);

Login.navigationOptions = {
  title: 'Login',
  headerShown: true,
}

export default Login;