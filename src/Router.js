
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens


import RegisterScreen from './Screens/RegisterScreen';

// Kullanıcının ilk karşılaştığı sayfa LoginScreen
// Giriş yapa basarsa UserLogin sayfasına yönlendirilir
import LoginScreen from './Screens/LoginScreen';


//Kullanıc adı alma
import UserLogin from './Screens/UserLogin';

//Kullanıcı Doğum tarihi alma
import Birthday from './Screens/Birthday';


//kullanıcı şifresini alma
import PhotoSelect from './Screens/PhotoSelectScreen';


// Son kayıt işlemi kvk okuttup

import RegisterFinish from './Screens/RegisterFinish';


import Home from './Screens/Home';







const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="LoginScreen"
                    component={LoginScreen}
                />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="RegisterScreen"
                    component={RegisterScreen}
                />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="Birthday"
                    component={Birthday}
                />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="UserLogin"
                    component={UserLogin}
                />
                <Stack.Screen
                    options={{
                        headerShown: false
                    }}
                    name="PhotoSelect"
                    component={PhotoSelect}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="RegisterFinish"
                    component={RegisterFinish}
                />
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={Home}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}








export default App;