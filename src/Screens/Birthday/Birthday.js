import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";



//styles

import styles from "../Generic.style";

//components 
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";




const Birthday = ({ navigation, route }) => {




    const [userName, setUserName] = useState(route.params.userName);

    const [birthday, setBirthday] = useState("");

    const GoToPhotoSelect = () => {

        if (birthday.substring(2, 3) == "." && birthday.substring(5, 6) == ".") {
            if (birthday.length == 10) {
                if (
                    birthday.substring(0, 2) >= "01" &&
                    birthday.substring(0, 2) <= "31"
                ) {
                    if (
                        birthday.substring(3, 5) >= "01" &&
                        birthday.substring(3, 5) <= "12"
                    ) {
                        if (
                            birthday.substring(6, 10) >= "1900" &&
                            birthday.substring(6, 10) <= "2099"
                        ) {
                            navigation.navigate("PhotoSelect", {
                                userName: userName,
                                birthday: birthday,
                            })
                        }
                        else {
                            alert("Doğum tarihinizi istenilen biçimde giriniz.");
                        }
                    }
                    else {
                        alert("Doğum tarihinizi istenilen biçimde giriniz.");
                    }
                }
                else {
                    alert("Doğum tarihinizi istenilen biçimde giriniz.");
                }
            }
            else {
                alert("Doğum tarihinizi istenilen biçimde giriniz.");
            }
        }

        else {
            alert("Doğum tarihinizi istenilen biçimde giriniz.");
        }

    };







    const goBackLoginSreen = () => {
        navigation.goBack();
    };



    return (

        <SafeAreaView style={styles.primary.container}>
            <View style={styles.primary.HeaderView}>
                <Text style={styles.primary.Header}>Kaç Yaşındasın ?</Text>
            </View>
            
            <View style={styles.primary.Card}>
                <View style={styles.primary.InputBackground}>
                    <CustomInput
                        theme="secondary"
                        placeholder="(Örn: 14.07.1999)"
                        value={birthday}
                        setValue={setBirthday}
                        keyboardType="numeric"

                    />
                </View>
                <View style={styles.primary.buttonCard}>
                    <Button text="Geri dön"
                        onPress={goBackLoginSreen}
                        theme="secondary"
                    />
                    <Button text="Devam et" onPress={GoToPhotoSelect} />
                </View>
            </View>
        </SafeAreaView>
    );
}



export default Birthday;