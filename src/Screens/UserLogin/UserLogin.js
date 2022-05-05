import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


//Components
import Button from "../../components/Button";
import LoginInput from "../../components/CustomInput";







const GirisyapEkrani = ({ navigation }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);




    const handleLogin = async () => {
        setIsLoading(true);
        await auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setIsLoading(false);
                navigation.navigate("Home");
            })
            .catch(error => {
                setErrorMessage(error.message);
                setIsLoading(false);
                console.log(errorMessage);
                alert(errorMessage);
            });
    };







    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bana Ne ?</Text>
            <LoginInput
                placeholder="Kullanıcı E posta Adresi"
                value={email}
                setValue={setEmail}
                keyboardType="email-address"
                autoComplete="email"


            />
            < LoginInput
                placeholder="Şifre"
                secureTextEntry
                value={password}
                setValue={setPassword}
            />
            <Button
                theme="loginScreenButton"
                text="Giriş yap"
                onPress={handleLogin}

            />
        </View>
    )
}


export default GirisyapEkrani;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#C9F5DF"
    },
    header: {
        fontSize: 120,
        color: "#013220"
    },

});