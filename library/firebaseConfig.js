import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    initializeAuth, 
    getReactNativePersistence,
    signOut,
    updateProfile
} from "firebase/auth";
import { getDatabase, ref, set, update, push, get} from "firebase/database";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
    apiKey: "AIzaSyCMvaebuwfpWHVy42mQV3Q8LoX-GZwvabg",
    authDomain: "notes-app-reactnative.firebaseapp.com",
    databaseURL: "https://notes-app-reactnative-default-rtdb.firebaseio.com",
    projectId: "notes-app-reactnative",
    storageBucket: "notes-app-reactnative.appspot.com",
    messagingSenderId: "909641254501",
    appId: "1:909641254501:web:73b831c1d7f87cbc63e88c",
    measurementId: "G-XLJWFBEXTW"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);


async function initializeAnalytics() {
    const analyticsIsSupported = await isSupported();
    if (analyticsIsSupported) {
      const analytics = getAnalytics(app);
    }
}

initializeAnalytics();

const analytics = getAnalytics(app);

const database = getDatabase();

const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});


  

export async function createUser(userName,email,password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth,email,password);
    const user = userCredential.user;
    const userId = userCredential.user.uid;
    const userName = userCredential.user.displayName

    const dbRef = ref(database, 'users/' + userId);
    await set(dbRef, {
      email: email,
      password: password,
      notes : {
        title:"",
        content:""
      }
    });
    
    console.log("user created: ",user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    throw error;
    
  }
}

export async function signIn(email,password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth,email,password);
    const user = userCredential.user;
    await user.reload();
    const userId = userCredential.user.uid;
    console.log("user singed in : ", user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    throw error;
    
  }
}


export function checkAuthState(callback) { 
  return onAuthStateChanged(auth, (user) => {
    const currentUser = getCurrentUser();  // auth.currentUser'ı al
    callback(currentUser);  // currentUser'i callback'e gönder
  });
}
  

export function getCurrentUser() {
  return auth.currentUser;
}

export async function logOut() {
  try {
    await signOut(auth);
    console.log("User signed out successfully");
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error`)
  }
}

export async function createNote(title, content) { 

  try {
    const currentUser = getCurrentUser();
    const userId = currentUser.uid;

    const dbRef = ref(database, 'users/' + userId + '/notes');

    await push(dbRef, {
       title: title,
       noteContent: content,
    });

    
    console.log("new note created", )
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    throw error;
  }
  
}

export async function listNotes(userId) {

  try {

    const noteRef = ref(database, `users/${userId}/notes`);
    const snapshot = await get(noteRef);

    if (snapshot.exists()) {
      const noteList = snapshot.val();

      console.log("users note list:", noteList);
      return noteList;
    } else {
      console.log("no data found");
    }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    throw error;
    
  }
  
}

export async function getCurrentUserData(userId) {
  try {
    const userDatRef = ref(database, `users/${userId}`);
    const snapshot = await get(userDatRef);

    if (snapshot.exists()){
      const userData = snapshot.val();
      console.log("user data", userData);
      return userData;
    }
    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    throw error;
    
  }
  
}

export async function getUserNotes(userId) {
  try {
    const dbRef = ref(database, `users/${userId}/notes`);
    const snapshot = await get(dbRef);

    if (snapshot.exists()){
      const notes = snapshot.val();
      console.log("notes", notes);
      const noteList = Object.keys(notes).map(key => ({
        id: key,
        ...notes[key]
      }));
      return noteList;
    }

    
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    throw error;
    
  }
  
}
