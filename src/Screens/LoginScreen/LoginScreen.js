import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonStyle from '../../components/Button/Button.style';


//components
import Button from "../../components/Button";


//style
import styles from './LoginScreen.style';


const LoginScreen = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text
                style={styles.Headertext}>
                Bana Ne ?
            </Text>
            <Button 
            theme='loginscreen'
            onPress={() => navigation.navigate("UserLogin")} text="Giriş Yap" />

            <Button
                theme='loginscreensignup'
                onPress={() => navigation.navigate('RegisterScreen')} text="Kayıt ol" />
        </View>
    );
}


export default LoginScreen;