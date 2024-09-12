import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useGlobalContext } from '../../context/GlobalProvider'
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomButton from '../Components/CustomButton';


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
        <Text>WELCOME</Text>
        <View style={styles.buttonContainer}>
          <CustomButton 
          title="JK"
          otherStyles={styles.buttonStyle}
          />
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Text>WELCOME</Text>
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
    flex:1
  },
  thirdContainer: {
    backgroundColor: 'aqua',
    flex: 1
  },
  buttonContainer: {
    width: 250, // Butonun kapsayıcısının genişliği (ayarlanabilir)
    height: 50, // Butonun kapsayıcısının yüksekliği (ayarlanabilir)
    borderRadius: 50, // Kapsayıcıyı yuvarlak hale getirir
    backgroundColor: 'green',
    alignItems: 'center', // İçeriği ortala
    justifyContent: 'center', // İçeriği ortala
  },
  buttonStyle: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'

  },
})



export default home