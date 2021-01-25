import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Start from "../Screens/StartPage";
import UserOption from "../Screens/UserOption";
import LogReg from "../Screens/LogReg";
import loginPage from "../Screens/LoginPage";
import Registeration from "../Screens/RegisterationPage";
const Stack = createStackNavigator();

export default function Navigation(){
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login Page">
        <Stack.Screen name="Start page" component={Start} />

        <Stack.Screen name="page1" component={UserOption} />
        
        <Stack.Screen name="page2" component={LogReg} />
        <Stack.Screen name="Login Page" component={loginPage} />
        <Stack.Screen name="Registeration Page" component={Registeration} />
        
      </Stack.Navigator>
    </NavigationContainer>

    );

}
