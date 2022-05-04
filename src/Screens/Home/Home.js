import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


//styles
import styles from "./Home.style";


// Screens 

import Liked from "./Liked";


//Navigation tab
const Tab = createBottomTabNavigator();

  function Home () {
    return (
      <Tab.Navigator>
        <Tab.Screen name="HomePage" component={HomePage} />
        <Tab.Screen name="Liked" component={Liked} />
        
      </Tab.Navigator>
    );
  }

const HomePage = () => {

    const userList 
    = database().ref('users');
    userList.on('value', (snapshot) => {
        console.log(snapshot.val());
    }
    );


            const user = auth().currentUser.userName;
            
            
            




        return (
        <View>
            <Text></Text>
        </View>
    )

}



export default Home;