  import { initializeApp } from "firebase/app";
  import { getAnalytics } from "firebase/analytics";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, initializeAuth, getReactNativePersistence } from "firebase/auth";
  import { getDatabase, ref, set } from "firebase/database";
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

  const auth = getAuth();

  export async function createUser(email,password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
      const user = userCredential.user;
      const userId = userCredential.user.uid;

      const dbRef = ref(database, 'users/' + userId);

      await set(dbRef, {
        email: email,
        password: password
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
      
      callback(user);
    });
  }

  export function getCurrentUser() {
    return auth.currentUser;
  }