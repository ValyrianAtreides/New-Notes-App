import { View, Text, StyleSheet, FlatList} from 'react-native'
import React, {useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../Components/CustomButton';
import NewNoteButton from '../Components/NewNoteButton';
import {router} from 'expo-router'
import { getCurrentUserData, getUserNotes, listNotes } from '../../library/firebaseConfig';


const makeNewNote =  () => {
  router.push("/CreateNewNote");
}

const home = () => {

  const {user, setUser, setIsloggedIn, setIsLoading} = useGlobalContext();
  const [userData, setUserData] = useState(null);
  const [notesData, setNotesData] = useState(null);

  
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

  const fetchtUserNotesData = async () => {
    try {
      const currentUserId = user?.uid;
      const notes =  await getUserNotes(currentUserId);
      if (user) {
        setNotesData(notes);
      } else {
        setNotesData(null);
      }
      setIsLoading(false);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
      throw error;
    }
      return notes;

  }
  
  useEffect(() => {
    if (user) {
      fetchtUserData();
      fetchtUserNotesData(); 
    }
  },[user]);

  const flatListItem = ({ title, content }) => (
    <View style={styles.flatListItemStyles}>
      <View style={styles.flatListItemTitleStyles}>
        <Text>{title}</Text>
      </View>
      <View style={styles.flatListItemContentStyles}>
        <Text>{content}</Text>
      </View>
    </View>
  );


  

  return (
    <SafeAreaView style={styles.mainContaier}>
      <View style={styles.firstContainer} >
        <Text>{user?.userName}</Text>
        <Text>{user?.displayName}</Text>
        <Text>{user?.email}</Text>
        <Text>{user?.uid}</Text>
        <Text>{userData?.email}</Text>
        <Text>{userData?.password}</Text>
        <Text>{notesData?.title}</Text>
        <Text>{notesData?.content}</Text>
        <Text>ADD NEW NOTE</Text>
        <NewNoteButton 
          handlePress={makeNewNote}
        />
      </View>
      <View style={styles.secondContainer}>
        <FlatList 
          data={notesData}
          renderItem={({ item }) => flatListItem({ title: item.title, content: item.noteContent })}
          keyExtractor={item => item.id}
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
    flex:2,
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
  flatListItemStyles: {
    backgroundColor: 'red',
    padding: 5,
    marginVertical: 10,
    height: 100,
    borderRadius: 10
  },
  flatListItemContentStyles: {
    backgroundColor: 'white',
    flex:1,
    borderRadius: 13,

  },
  flatListItemTitleStyles: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 10
  },
})

export default home