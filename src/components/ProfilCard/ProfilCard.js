import React from "react";
import { View, Text, TouchableOpacity } from "react-native";



import styles from "./ProfilCard.style";



const ProfilCard = ({ Profil }) => {

    // birthday date to age 
     
    

    return (
        <TouchableOpacity
            onPress={null}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.Text}>{Profil.userName}</Text>
                    <Text style={styles.Text}>{Profil.userStatus}</Text>
                    <Text style={styles.Age}>{Profil.birthday}</Text>
                </View>

                <Text style={styles.Text}>{Profil.userGmail}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProfilCard;
