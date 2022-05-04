import React from "react";
import { View, TextInput } from "react-native";


import styles from "./CustomInput.style";


const CustomInput = ({ value, setValue, placeholder, secureTextEntry, theme = "primary",
    autoComplete, keyboardType }) => {

    return (
        <View styles={styles[theme].container}>
            <TextInput style={styles[theme].TextInput}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    )
}









export default CustomInput;

