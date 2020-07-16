import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView, StatusBar, Alert, TouchableOpacity, Dimensions, NativeEventEmitter, NativeAppEventEmitter } from 'react-native';



const { width } = Dimensions.get("window");
const height = width * 0.6;


export default class Slider extends React.Component{
    render(){
        return (
        
            <View style={styles.container}>
                <ScrollView
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    style={styles.container}>
                    <Image source={{uri: image }} 
                    style={{ width, height, resizeMode: 'cover' }} />

                    }

                </ScrollView>
            </View>

        
        );
    }
};

const styles = StyleSheet.create({
    container:{
        width,
        height
    }
});


