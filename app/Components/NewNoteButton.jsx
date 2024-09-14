import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const NewNoteButton = ({handlePress, otherStyles}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.buttonStyle, otherStyles]}
    >
      <MaterialIcons name="add-circle-outline" size={24} color="black" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    width:30,
    height: 30,
    borderRadius:20,
    justifyContent: 'center',
    paddingLeft: 3
  }
})

export default NewNoteButton