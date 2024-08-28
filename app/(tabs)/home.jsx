import { View, Text } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'


const home = () => {
  const {user, setUser, setIsloggedIn, setIsLoading} = useGlobalContext();
  return (
    <View>
      <Text>home</Text>
      <Text>{user?.uid}</Text>
    </View>
  )
}

export default home