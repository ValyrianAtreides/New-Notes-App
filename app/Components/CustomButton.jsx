import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const CustomButton = ({ handlePress, title, otherStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={styles.buttonStyles}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: '#6A9C89',
    paddingVertical: 7,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 6,
    marginHorizontal:50
  },
  buttonText: {
    fontSize: 37,
    textAlign: "center",
    fontWeight: "200",
    color: 'white',
  }
})

export default CustomButton
