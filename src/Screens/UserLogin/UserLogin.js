import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";


//Components
import Button from "../../components/Button";
import LoginInput from "../../components/CustomInput";





const SignInScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Bana Ne ?</Text>
            <LoginInput
                placeholder="Kullanıcı Adı" />
            <LoginInput
                placeholder="Şifre" />
            <Button
                theme="loginScreenButton"
                text="Giriş yap" />
        </View>
    )
}


export default SignInScreen;


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