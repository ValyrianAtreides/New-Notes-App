import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const NotesLayout = () => {
  return (
    <Stack>
      <Stack.Screen  
        name= "CreateNewNote"
        options={{
          // headerShown: false
        }}
      />
    </Stack>
  )
}

export default NotesLayout