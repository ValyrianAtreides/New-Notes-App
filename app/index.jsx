import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>merhaba</Text>
      <Link href="/home">Go to home page</Link>

    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent:'center',
    flex:1
    
  }
})


export default index