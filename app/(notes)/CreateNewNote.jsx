import { View, Text, Pressable, SafeAreaView, StyleSheet , TextInput } from 'react-native'
import React, {useState} from 'react'
import CustomButton from '../Components/CustomButton'
import { createNote } from '../../library/firebaseConfig'
import { router } from 'expo-router'

const CreateNewNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = async () => {
    if ( title==""  || content=="" ) {
      Alert.alert('Error', 'Please fill in all the fields');
    }
    try {
      createNote(title,content);
      router.push("/home");
    } catch (error) {
      Alert.alert('Error', error.message)
    }
  }

  return (
    <Pressable>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.titleContainer} >
          <TextInput
            style={styles.titleTextField}
            placeholder="Title"
            inputMode='text'
            autoCapitalize="words"
            value={title}
            onChangeText={setTitle}
          />
        </View>
        <View style={styles.noteContainer}>
          <TextInput
            style={styles.noteTextField}
            placeholder="Note"
            inputMode='text'
            multiline={true}
            textAlignVertical='top'
            value={content}
            onChangeText={setContent}
          />
        </View>

        <CustomButton 
          title="new note"
          handlePress={addNote}
          otherStyles={styles.buttonStyles}
        
        />
      </SafeAreaView>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex:1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 10,
    paddingTop: 10

  },
  titleContainer: {
    backgroundColor: '#e0e0e0',
    width: '100%',
    height: 45,
    paddingTop: 1,
    paddingHorizontal: 5,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5
  },
  noteContainer: {
    backgroundColor: '#e0e0e0',
    width: '100%',
    height: 100,
    paddingTop: 10,
    paddingHorizontal: 5,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleTextField: {
    marginTop: 10,
    backgroundColor: '#fff',  
    borderRadius: 6 ,
    fontSize: 16,  
    color: '#333'
    
  },
  noteTextField: {
    backgroundColor: '#fff',  
    borderRadius: 7,
    flex:1,
    paddingTop: 5,
    color: '#333',
    textAlignVertical: 'top',
    fontSize: 16
  },
  buttonStyles: {
    height:100
  }
})
export default CreateNewNote