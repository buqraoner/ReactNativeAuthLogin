import React, { useState } from "react"
import { View, Text, SafeAreaView, TouchableOpacity, Image, } from "react-native"
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';


import storage from '@react-native-firebase/storage';
import database from '@react-native-firebase/database';

//styles
import styles from "../Generic.style";


//components
import Button from "../../components/Button";
import CustomInput from "../../components/CustomInput";
import ModalPhoto from "../../components/PhotoSelector";



const PhotoSelect = ({ navigation, route }) => {

    const [isVisible, setIsVisible] = useState(false);
    const [imageUri, setImageUri] = useState("");

    const [user, Setuser] = useState({
        userName: route.params.userName,
        birthday: route.params.birthday,
        imageUri: route.params.imageUri,
    });

    const Visible = () => {
        setIsVisible(!isVisible);
    }

    const Visible2 = () => {
        if (setImageUri != "") {
            setIsVisible(!isVisible);
        }
    }




    const goRegisterFinishScreen = () => {
        navigation.navigate("RegisterFinish", user);
        
        
    };

    const goBack = () => {
        navigation.goBack();
    };


    //Camera Fonksiyonu

    const openCamera = () => {

        let options = {
            storageOptions: {
                path: 'images',
                media: 'photo',
                skipBackup: true,
            },
            selectionLimit: 1,
            maxHeight: 300,
            maxWidth: 300,
            includeBase64: true,
        };
        launchCamera(options, response => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                const source = { uri: 'data:image/jpeg;base64,' + response.assets[0].base64 };
                setImageUri(source);
            }
        });
    };

    const openGalery = () => {
        let options = {

            storageOptions: {
                path: 'images',
                media: 'photo',
                skipBackup: true,

            },
            selectionLimit: 1,
            maxHeight: 300,
            maxWidth: 300,
            includeBase64: true,
        };
        launchImageLibrary(options, response => {

            if (response.didCancel) {
                console.log('User cancelled image picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                const source = { uri: 'data:image/jpeg;base64,' + response.assets[0].base64 };
                setImageUri(source);
            }
        });
    };


    const uploadImage = async () => {
        const storageRef = storage().ref();
        const imageRef = storageRef.child(`images/${user.userName}`);
        await imageRef.putFile(imageUri);
        await imageRef.getDownloadURL().then(url => {
            Setuser({ ...user, imageUri: url });
        }
        );
    }

    









    return (
        <SafeAreaView style={styles.primary.container}>
            <View
                style={styles.primary.PhotoHeaderView}>
                <Text
                    style={styles.primary.Header}>
                    Kendine bir profil fotoğrafı seç
                </Text>
            </View>
            <Image
                style={{
                    width: 100,
                    height: 100,
                }}
                source={imageUri}
                
            />
            <View style={styles.primary.PhotoMainCard}>
                <TouchableOpacity
                    onPress={Visible}>
                    <View style={styles.primary.photoCard}>
                    </View>
                </TouchableOpacity>
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
            <ModalPhoto
                visible={isVisible}
                onClose={Visible}
                Camera={openCamera}
                Galery={openGalery}
                ResimGoster={true}

            />
        </SafeAreaView>


    );
}

export default PhotoSelect;