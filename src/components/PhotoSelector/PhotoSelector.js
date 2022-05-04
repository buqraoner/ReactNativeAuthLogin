import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import Modal from "react-native-modal";

import styles from "./PhotoSelector.style";



const PhotoSelector = ({ visible, onClose, Galery, Camera,ResimGoster }) => {


    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >    

            {ResimGoster ? (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={Camera}>
                    <View>
                        <Text
                            style={styles.Text}>
                            Kamera
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={Galery}>
                    <View>
                        <Text
                            style={styles.Text}>
                            Galeri
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            ) : (<View></View>)}
        </Modal>
    )
}


export default PhotoSelector;