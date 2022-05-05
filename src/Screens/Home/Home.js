import React, { useEffect, useState } from "react";
import { View, Text, FlatList, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from "../../utils/parseContentData";
import ProfilCard from "../../components/ProfilCard";




//styles
import styles from "./Home.style";


// Screens 

import Liked from "./Liked";
import { TabRouter } from "@react-navigation/native";





//Navigation tab
const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomePage" component={HomePage} />
            <Tab.Screen name="Liked" component={Liked} />
           
        </Tab.Navigator>
    );
}






const HomePage = () => {

    const [contentList, setContentList] = useState([]);
    const [userNames, setUserNames] = useState([]);
    const [UserBirthday, setUserBirthday] = useState([]);
    const [UserEmail, setUserEmail] = useState([]);


    useEffect(() => {
        database().ref('/users').on('value', (snapshot) => {
            const users = snapshot.val();
            const userNames = Object.keys(users);
            const UserInfo = Object.values(users);
            const UserBirthday = UserInfo.map(user => user.birthday);
            setUserBirthday(UserBirthday);
            setContentList(UserInfo);
        }
        )
    }, []);


    // 01.01.2020


    const renderItem = ({ item }) => {
        return (
            <ProfilCard
                Profil={item}
                Like={LikeUser}


            />
        );
    }









    auth().onAuthStateChanged(user => {
        if (user) {
            setUserEmail(user.email);
        } else {
            setUserEmail('');
        }
    }
    )




    const WhoLikedMe = (userName) => {
        database().ref('/users/' + userName + '/liked').on('value', (snapshot) => {
            const users = snapshot.val();
            const userNames = Object.keys(users);
            const UserInfo = Object.values(users);
            const UserBirthday = UserInfo.map(user => user.birthday);
            setUserBirthday(UserBirthday);
            setContentList(UserInfo);
        }
        )

    }

    const LikeUser = (userName) => {
        database().ref('/users/' + userName + '/liked').push({
            userName: userName,
            birthday: UserBirthday[userNames.indexOf(userName)],
            imageUri: contentList[userNames.indexOf(userName)].imageUri,
            userGmail: contentList[userNames.indexOf(userName)].userGmail,
            userPassword: contentList[userNames.indexOf(userName)].userPassword,
            userStatus: contentList[userNames.indexOf(userName)].userStatus,
            userStatusMessage: contentList[userNames.indexOf(userName)].userStatusMessage,

            userStatusTimestamp: contentList[userNames.indexOf(userName)].userStatusTimestamp,


            userLastActive: contentList[userNames.indexOf(userName)].userLastActive,

            userLastActiveTimestamp: contentList[userNames.indexOf(userName)].userLastActiveTimestamp,



        }).then(() => {
            WhoLikedMe(userName);
        }
        )
            .catch(error => {
                alert(error.message);
            }
            );
    }




    return (
        <SafeAreaView style={styles.container} >

            <View style={styles.list}>
                <FlatList
                    data={contentList}
                    renderItem={renderItem}
                    keyExtractor={item => item.userName}
                />
            </View>
        </SafeAreaView>
    )

}


 



export default Home;