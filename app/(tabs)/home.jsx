import { View, Text, StyleSheet} from 'react-native'
import React, {useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../Components/CustomButton';
import NewNoteButton from '../Components/NewNoteButton';
import {router} from 'expo-router'
import { getCurrentUserData, listNotes } from '../../library/firebaseConfig';


const makeNewNote =  () => {
  router.push("/CreateNewNote");
}

const home = () => {

  const {user, setUser, setIsloggedIn, setIsLoading} = useGlobalContext();
  const [userData, setUserData] = useState(null);

  
  const fetchtUserData = async () => {
    try {
      const currentUserId = user?.uid;
      const userData =  await getCurrentUserData(currentUserId);
      if (user) {
        setUserData(userData);
      } else {
        setUserData(null);
      }
      setIsLoading(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
      throw error;
    }
      return userData;

  }
  
  useEffect(() => {
    if (user) {
      fetchtUserData(); 
    }
  },[user]);


  

  return (
    <SafeAreaView style={styles.mainContaier}>
      <View style={styles.firstContainer} >
        <Text>WELCOME</Text>
        <Text>WELCOME</Text>
        <Text>{user?.userName}</Text>
        <Text>{user?.displayName}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.uid}</Text>
        <Text>{userData?.email}</Text>
        <Text>{userData?.password}</Text>


        <Text>ADD NEW NOTE</Text>
        <NewNoteButton 
          handlePress={makeNewNote}
        />
      </View>
      
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  mainContaier:{
    flex:1,
  },
  firstContainer: {
    backgroundColor: 'aliceblue',
    flex: 1
  },
  secondContainer: {
    backgroundColor: 'antiquewhite',
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  thirdContainer: {
    backgroundColor: 'aqua',
    flex: 1
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default home