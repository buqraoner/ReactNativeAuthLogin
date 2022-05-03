import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView } from "react-native";
import auth from '@react-native-firebase/auth';


//Styles

import styles from "../Generic.style";

//Components 
import Button from "../../components/Button";

import CustomInput from "../../components/CustomInput";











const RegisterScreen = ({ navigation }) => {

    const [text, setText] = useState("");
    const [userName, setUserName] = useState("");



    const GoToBirthday = () => {
        if (text.length > 3) {
            setUserName(text);
            navigation.navigate("Birthday", { userName: text });
        }

        else {
            alert("Kullanıcı adınız 3 karakterden fazla olmalıdır.");
        }

    };






    return (
        <SafeAreaView style={styles.primary.container} >
            <View style={styles.primary.HeaderView}>
                <Text style={styles.primary.Header}>Kendine bir kullanıcı adı seç</Text>
            </View>
            <View style={styles.primary.Card} >
                <View style={styles.primary.InputBackground} >
                    <CustomInput
                        theme="secondary"
                        placeholder="Kullanıcı Adınızı giriniz.."
                        value={text}
                        setValue={setText}
                    />
                </View>
                <View styles={styles.primary.buttonCard} >
                    <Button
                        theme="primary"
                        text="Devam et"
                        onPress={GoToBirthday}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}




export default RegisterScreen;



