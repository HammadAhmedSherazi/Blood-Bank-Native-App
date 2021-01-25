import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import logo from "../components/images/BloodIcon.png"

export default function Start () {
    return(
        <View style={styles.container} >
          <Image source={logo} style={{width:150, height:150}} />
            Mobile Blood Bank
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
      backgroundColor: 'red'
      
    }
  });