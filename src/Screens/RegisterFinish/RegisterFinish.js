import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";




//styles
import styles from "../Generic.style";

//CustomComponents 
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";

//Modal 

import ContentInputModal from "../../components/Modal"


// Database...
import database from '@react-native-firebase/database';



const RegisterFinish = ({ navigation, route }) => {

    //Modal state görünür olup olmaması

    const [inputModalVisible, setInputModalVisible] = useState(false);


    // Fonksiyon tetiklendiğinde modalın (kvkk metninin) görünür olması ...

    function showInputModal() {
        setInputModalVisible(!inputModalVisible);
    }

    //User bilgilerini tutan state


    const [user, setUser] = useState({
        userName: route.params.userName,
        birthday: route.params.birthday,
        photo: route.params.photo,
    });

    // Bir önceki ekrana git

    const goBack = () => {
        navigation.goBack();
    };




        


    const [passwword, setPassword] = useState("");

    return (
        <SafeAreaView
            style={styles.primary.container}>
            <Text
                style={styles.primary.Header}>
                Hadi bir şifre belirleyelim
            </Text>
            <View
                style={styles.primary.Card}>
                <View
                    style={styles.primary.InputBackground}>
                    <CustomInput
                        theme="secondary"
                        placeholder="Şifrenizi Giriniz.."
                        value={null}
                        setValue={null}
                    />
                </View>
                <View
                    style={styles.primary.buttonCard}>
                    <Button
                        text="Geri dön"
                        onPress={goBack}
                        theme="secondary"
                    />
                    <Button
                        text="Tamamla"
                        onPress={showInputModal}
                    />
                </View>
            </View>
            <ContentInputModal
                visible={inputModalVisible}
                onClose={showInputModal}
                Okey = {goBack}
                

            />

        </SafeAreaView>

    )

}


export default RegisterFinish;

