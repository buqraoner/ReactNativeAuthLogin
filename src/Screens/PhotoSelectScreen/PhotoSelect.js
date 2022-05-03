import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native"


//styles
import styles from "../Generic.style";


//components
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";



const PhotoSelect = ({ navigation, route }) => {

    const [photo, setPhoto] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");


    const [user, Setuser] = useState({
        userName: route.params.userName,
        birthday: route.params.birthday,
        photo: "",
    });







    const goRegisterFinishScreen = () => {
        navigation.navigate("RegisterFinish", user);
    };

    const goBack = () => {
        navigation.goBack();
    };


    return (

        <SafeAreaView style={styles.primary.container}>
            <View
                style={styles.primary.PhotoHeaderView}>
                <Text
                    style={styles.primary.Header}>
                    Kendine bir profil fotoğrafı seç
                   
                    {user.birthday}
                </Text>
            </View>
            <View style={styles.primary.PhotoMainCard}>
                <View style={styles.primary.photoCard}>
                </View>
                <View style={styles.primary.buttonCard}>
                    <Button
                        text="Geri dön"
                        onPress={goBack}
                        theme="secondary"
                    />
                    <Button
                        text="Devam et"
                        onPress={goRegisterFinishScreen} />



                </View>
            </View>
        </SafeAreaView>

    );
}

export default PhotoSelect;