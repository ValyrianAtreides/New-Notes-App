import { View, Text, SafeAreaView, Pressable, Keyboard, TextInput, StyleSheet, Alert } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../Components/CustomButton'
import { createUser } from '../../library/firebaseConfig'
import {router} from 'expo-router'
const signUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if ( email==""  || password=="" ) {
      Alert.alert('Error', 'Please fill in all the fields');
    }
    setIsSubmitting(true)
    try {
      await createUser(email,password);
      router.replace("/home");
    } catch (error) {
      Alert.alert('Error', error.message)
    } finally {
      setIsSubmitting(false);
    }
  };




  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.mainContainer} >
      <SafeAreaView style={[styles.mainContainer, styles.shadowProp]}>
        <View style={styles.authContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sign Up </Text>
          </View>
          <View  >
            <TextInput
              style={styles.loginTextField}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              inputMode="email"
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
        </View>
        <CustomButton 
          title="Sign Up"
          handlePress={submit}
        />
      </SafeAreaView>
    </Pressable>
  )
}


const styles =  StyleSheet.create({
  mainContainer: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'#FFF5E4'
  },
  authContainer:{
    borderWidth: 2,
    borderColor:'#6A9C89',
    marginHorizontal: 45,
    marginBottom:170,
    backgroundColor:'#C1D8C3',
    borderRadius:25,
    padding: 20,
    elevation:7

  },
  titleContainer: {
    justifyContent: "center",
    height:50,
    marginBottom:30
  },
  titleText: {
    fontSize: 37,
    textAlign: "center",
    fontWeight: "200",
    color: '#4A6A40',
  },
  inputContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10,
  },
  loginTextField: {
    borderBottomWidth: 1,
    height: 55,
    fontSize: 30,
    fontWeight: "300",
    color: 'black',
    marginBottom:10,
    borderRadius: 10,
  },
  buttonStyles:{
    marginBottom:75
  }
  // shadowProp: {
  //   shadowColor: '#171717',
  //   shadowOffset: {width: -2, height: 4},
  //   shadowOpacity: 0.2,
  //   shadowRadius: 3,
  // }
})







export default signUp