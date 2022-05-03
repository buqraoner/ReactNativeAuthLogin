import React from "react";
import {  View, Text, TouchableOpacity } from "react-native";

import styles from "./Button.style";



const Button = ({ onPress, text,theme = "primary" }) => {
    return (
        <View style={styles[theme].container}>
            <TouchableOpacity
                onPress={onPress}
                style={styles[theme].button}>
                <View>
                    <Text
                        style={styles[theme].buttonText}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity >
        </View>



    );
}


export default Button;