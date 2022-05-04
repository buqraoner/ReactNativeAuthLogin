import { StyleSheet } from "react-native";



const base_styles = StyleSheet.create({

    container: {
        backgroundColor: '#C9F5DF',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    },
    userName: {
        width: 220,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 10,
        padding: 10,
        fontSize: 18,
        color: '#7D5F77',
        textAlign: 'center',
        marginTop: 25,
    },

    Card: {
        width: 200,
        height: 200,
        borderRadius: 15,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',


    },

    HeaderView: {
        width: 340,
        height: 150,


    },

    Header: {
        fontSize: 45,
        textAlign: 'center',
        color: '#013220',
        marginTop: 20,
        fontWeight: 'bold',

    },

    input: {
        borderEndWidth: 1,
        borderColor: 'black',
        width: 220,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#e8e8e8',
        margin: 10,
    },
    buttonCard: {
        marginRight: 8,
        flexDirection: 'row',
    },

    photoCard: {
        backgroundColor: 'antiquewhite',
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,

    },

    PhotoMainCard: {
        width: 200,
        height: 200,
        borderRadius: 15,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',


    },

    PhotoHeaderView: {
        width: 340,
        height: 200,
        marginTop: -40,
        marginBottom: 50,
    },

    Photo: {
        width: 150,
        height: 150,
        borderRadius: 100,
        borderColor: 'black',
    },



});

export default {
    primary: StyleSheet.create({
        ...base_styles,


    }),

};



