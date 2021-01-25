import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from "../components/images/BloodLogo.png";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// import LogReg from "./LogReg"
export default function  UserOption( {navigation} ) {
  
return(
        <View style={styles.container} >
            <Image source={logo} style={{width:270, height:90, marginBottom:80}} />
         <TouchableOpacity
        onPress={() => navigation.navigate('page2')}
        style={styles.btn}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Donate a Blood!</Text>
      </TouchableOpacity> 
      <TouchableOpacity
        onPress={() => navigation.navigate('page2')}
        style={styles.btn}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Need a Blood?</Text>
      </TouchableOpacity>         
        </View>
    
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30
    },
    logo: {
      width: 305,
      height: 159,
      marginBottom: 20,
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 10,
    },
    btn: {
      // flex: 1,
      width: 304,
      height:40,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: 'red',
      marginBottom:10
      
    }
  });