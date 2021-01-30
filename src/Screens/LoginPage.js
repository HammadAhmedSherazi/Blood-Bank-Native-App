import React, {useState}  from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View,TextInput, CheckBox  } from 'react-native';
import { color } from 'react-native-reanimated';
import logo from "../components/images/download.jpg"

export default function loginPage(){
  const [isSelected, setSelection] = useState(false);

    return(
        <View style ={styles.container}>
            
            <View style={styles.loginSec}>
                <Image
                style={{width: 70, height:70, marginBottom:60}}
                source={logo}
                />
                <TextInput
                style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5 }}
                placeholder={'Username or Phone Number'}
                 />
                 <TextInput
                style={{ height: 40, width: 250, borderColor: 'gray', borderWidth: 1, borderRadius:5, marginBottom:10, paddingLeft:5 }}
                placeholder={'Password'}
                secureTextEntry={'true'}
                 />
                 <TouchableOpacity
        // onPress={() => navigation.navigate("Login Page")}
        style={styles.btn}>
        <Text style={{ fontSize: 18, color: '#fff', textAlign:"center" }}>Login</Text>
      </TouchableOpacity>
      <View style={styles.checkboxContainer}>
            <View style={{flexDirection:'row'}}>
            <CheckBox
          style={styles.checkbox} 
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
          color= "red"
        />
        <Text>
          Remember me
        </Text>

            </View>
            
        <View>
        <Text style={{color: 'red', fontSize:12}}
      // onPress={() => Linking.openURL('http://google.com')}
      >
  Forget your Password?
</Text>
        </View>
        

            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 30,
    
    },
    // logo: {
    //   width: 305,
    //   height: 159,
    //   marginBottom: 20,
    // },
    // instructions: {
    //   color: '#888',
    //   fontSize: 18,
    //   marginHorizontal: 15,
    //   marginBottom: 10,
    // },
    btn: {
      // flex: 1, 
      width: 250,
      height:40,
      justifyContent: "center",
      alignItems:"center",
      backgroundColor: 'red',
      marginBottom:15
      
    },
//  header:{
//         flex:2,
//         backgroundColor: 'red',
//         borderRadius: 10
//   },
  loginSec:{ 
      marginTop:20,
      height:420,
      width:320,
      
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'white',
      borderRadius:20,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,
},
shadowOpacity: 0.29,
shadowRadius: 4.65,

elevation: 7,

  },
  checkboxContainer: {
  
    flexDirection: "row",
    marginBottom: 10,
    width:250,
    justifyContent:"space-between",
    alignItems:"center"


    
  },
  checkbox: {
    
    alignSelf:"center",
    marginRight:5
  }
  

});