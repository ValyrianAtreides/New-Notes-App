import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context';


const home = () => {
  const {user, setUser, setIsloggedIn, setIsLoading} = useGlobalContext();
  return (
    <SafeAreaView style={styles.mainContaier}>
      <View>
        <Text>WELCOME</Text>
        <Text>WELCOME</Text>
        <Text>{user?.displayName}</Text>
      </View>
    </SafeAreaView>
  )
}

const styles =  StyleSheet.create({
  mainContaier:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'

  }
})



export default home