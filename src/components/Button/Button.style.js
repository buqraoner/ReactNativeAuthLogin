import { StyleSheet } from "react-native"

const base_styles = StyleSheet.create({

    container: {
        marginTop: 20,
    },

    button: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 8,
        marginBottom: 1,
        height: 50,
        minWidth: 120,
        borderRadius: 10,
        backgroundColor: '#7D5F77',
    },
    buttonText: {
        color: 'black',
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        fontWeight: 'bold',

    }

});



export default {
    primary: StyleSheet.create({
        ...base_styles,
        button: {
            ...base_styles.button,
            backgroundColor: '#75FCB8',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 7,

        },


    }),

    secondary: StyleSheet.create({
        ...base_styles,
        button: {
            ...base_styles.button,
            backgroundColor: 'white',
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 7,

        },
    }),

    loginscreen: StyleSheet.create({

        button: {
            marginTop: 20,
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            width: 300,
            backgroundColor: '#75FCB8',


        },

        buttonText: {
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',


        },


    }),

    loginscreensignup: StyleSheet.create({

        button: {
            marginTop: 20,
            borderColor: 'black',
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            width: 300,
            backgroundColor: 'white',


        },

        buttonText: {
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            fontWeight: 'bold',


        },


    }),

    loginScreenButton: StyleSheet.create({
        button: {
            marginTop: 9,
            marginBottom: 5,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            backgroundColor: '#75FCB8',
            padding: 8,
            width: 125,
        },
        buttonText: {
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
            fontWeight: 'bold',
        },

    }),

};



