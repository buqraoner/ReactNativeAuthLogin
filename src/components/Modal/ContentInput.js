import React from "react";
import { View, Text, Button } from "react-native";
import Modal from "react-native-modal";

//styles 
import styles from "./ContentInput.style";



const ContentInput = ({ visible, onClose, Okey }) => {
    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            onBackButtonPress={onClose}
        >

            <View style={styles.container}>
                <Text
                    style={styles.Kvktext}
                >
                    KVKK Metni
                </Text>
                <Text
                    style={styles.KvkInText}>
                    Lorem ipsum dolor
                    sit amet consectetur adipisicing elit.
                    Saepe ad suscipit voluptatibus cum accusantium,
                    dolores tempora deserunt, perspiciatis facilis,
                    esse laborum reiciendis ut delectus adipisci quasi repudiandae eos distinctio ullam!
                </Text>
                <View style={styles.Button}>
                    <Button
                        onPress={Okey}
                        title="Okudum Onaylıyorum"
                    />
                </View>

            </View>
        </Modal>
    )
}


export default ContentInput;