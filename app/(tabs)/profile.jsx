import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { router } from 'expo-router'
import CustomButton from '../Components/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { logOut } from '../../library/firebaseConfig'



const profile = () => {

  const {user,setIsLoggedIn, IsLoading, setUser} = useGlobalContext();

  const logout = async () => {
    setUser(null)
    setIsLoggedIn(false)
    
    await logOut();
 
    router.replace('/sign-up')

  };



  return (
    <SafeAreaView style={styles.mainContainer}>
      <View >
        <Text style={styles.mainText}>{user?.displayName}</Text>
        <Text style={styles.mainText}>profile</Text>
        <CustomButton
          title="Log Out"
          handlePress={logout}
        />

      </View>
    </SafeAreaView>
  )
}

const styles= StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'#FFF5E4'
  },
  mainText: {
    fontSize: 37,
    textAlign: "center",
    fontWeight: "200",
    color: '#4A6A40',
  }
})

export default profile