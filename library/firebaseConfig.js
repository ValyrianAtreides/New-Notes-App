import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

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

    console.log("uer created: ",user);
    return user;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(`Error Code: ${errorCode}, Error Message: ${errorMessage}`);
    throw error;
    
  }
}
