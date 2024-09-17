import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../Components/CustomButton';
import NewNoteButton from '../Components/NewNoteButton';
import {router} from 'expo-router'

const makeNewNote =  () => {
  router.push("/CreateNewNote");
}

const home = () => {
  const {user, setUser, setIsloggedIn, setIsLoading} = useGlobalContext();
  return (
    <SafeAreaView style={styles.mainContaier}>
      <View style={styles.firstContainer} >
        <Text>WELCOME</Text>
        <Text>WELCOME</Text>
        <Text>{user?.userName}</Text>
        <Text>{user?.displayName}</Text>
        <Text>{user?.email}</Text>
      </View>
      <View style={styles.secondContainer}>
        <Text>ADD NEW NOTE</Text>
        <NewNoteButton 
          handlePress={makeNewNote}
        />
      </View>
      <View style={styles.thirdContainer}>
        <Text>list notes</Text>
        
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
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

export default home