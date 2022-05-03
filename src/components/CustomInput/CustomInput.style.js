import { StyleSheet } from "react-native"


const base_styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
    },
    TextInput: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        backgroundColor: "#75FCB8",
        width: 250,
        height: 45,
        paddingLeft: 15,
        margin: 5,
        fontSize: 18,


    },

});



export default {
    primary: StyleSheet.create({
        ...base_styles,

    }),

    secondary: StyleSheet.create({
        ...base_styles,
        TextInput: {
            ...base_styles.TextInput,
            backgroundColor: "#75FCB8",
            

        },
    }),

};










