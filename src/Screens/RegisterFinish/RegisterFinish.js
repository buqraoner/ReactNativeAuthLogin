import React, { useState } from "react";
import { SafeAreaView, View, Text } from "react-native";
import storage from '@react-native-firebase/storage';
//Firebase
// Database...
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { utils } from '@react-native-firebase/app'




//styles
import styles from "../Generic.style";

//CustomComponents 
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";

//Modal 

import ContentInputModal from "../../components/Modal"





const RegisterFinish = ({ navigation, route }) => {

    //Modal state görünür olup olmaması

    const [inputModalVisible, setInputModalVisible] = useState(false);


    // Fonksiyon tetiklendiğinde modalın (kvkk metninin) görünür olması ...

    function showInputModal() {
        setInputModalVisible(!inputModalVisible);
        saveUser();


    }

    //User bilgilerini tutan state


    const [user, setUser] = useState({
        userName: route.params.userName,
        birthday: route.params.birthday,
        ImageUri: route.params.imageUri,

    });

    // Bir önceki ekrana git

    const goBack = () => {
        navigation.goBack();
    };


    const goHome = () => {
        navigation.navigate("Home");
    };





    const saveUser = () => {
        setUser({
            ...user,
            userGmail: userGmail,
            userPassword: password,
        });
    }

    //User bilgilerini kaydetme işlemi
    //User bilgilerini database'e kaydet
    // auth().createUserWithUID(user.userName, userPassword)

    const register = () => {
        auth().createUserWithEmailAndPassword(userGmail, password)
            .then(() => {
                database().ref('users/' + user.userName).set({
                    userName: user.userName,
                    birthday: user.birthday,
                    imageUri: user.imageUri,
                    userGmail: userGmail,
                    userPassword: password,
                    userId: auth().currentUser.uid,
                    userStatus: "online",
                    userStatusMessage: "",
                    userStatusTimestamp: Date.now(),
                    userLastActive: Date.now(),
                    userLastActiveTimestamp: Date.now(),

                });
                goHome();
            }
            )
            .catch(error => {
                alert(error.message);
                goBack();
            }
            );
    }



    /*   const register = () =>{
           auth().createUserWithUID(user.userName, user.userPassword)
           .then(() => {
               database().ref('users/' + user.userName).set({
                   userName: user.userName,
                   birthday: user.birthday,
                   imageUri: user.imageUri,
                   userGmail: userGmail,
                   userPassword: password,
                   userId: auth().currentUser.uid,
                   userStatus: "online",
                   userStatusMessage: "",
                   userStatusTimestamp: Date.now(),
                   userLastActive: Date.now(),
                   userLastActiveTimestamp: Date.now(),

               });
               goHome();
           }
           )
           .catch(error => {
               alert(error.message);
               goBack();
           }
           );
       }

       */







    /* const saveUserToDatabase = () => {
 
             auth().signInWithEmailAndPassword(userGmail, password).then(() => {
                 database().ref('users/' + user.userName).set({
                     userName: user.userName,
                     birthday: user.birthday,
                     imageUri: user.imageUri,
                     userGmail: userGmail,
                     userPassword: password,
                 });
             }).catch(error => {
                 console.log(error);
             });
             
     }
 
     */




    async function SubmitButton() {
        await register();
        goHome();
    }












    const [userGmail, setUserGmail] = useState('');
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView
            style={styles.primary.container}>
            <Text
                style={styles.primary.Header}>
                Son bir adım kaldı..
                {user.userName}
                {user.birthday}
                {user.ImageUri}
                {user.userPassword}
                {user.userGmail}
            </Text>
            <View
                style={styles.primary.Card}>

                <View
                    style={styles.primary.InputBackground}>
                    <CustomInput
                        placeholder="E posta adresinizi giriiz "
                        value={userGmail}
                        setValue={setUserGmail}
                        theme="primary"
                        autoComplete="email"
                        keyboardType="email-address"
                    />
                    <CustomInput
                        theme="secondary"
                        placeholder="Şifrenizi Giriniz.."
                        value={password}
                        setValue={setPassword}
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
            <Text>

                {user.userPassword}
                {user.userGmail}
            </Text>
            <ContentInputModal
                visible={inputModalVisible}
                onClose={showInputModal}
                Okey={SubmitButton}
            />
        </SafeAreaView>

    )

}


export default RegisterFinish;

