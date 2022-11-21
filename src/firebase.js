import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyBzYHOgI_L2ajlqLkaXjxBoqbgYlIqVcIs",
    authDomain: "film-recommender-d1b0f.firebaseapp.com",
    projectId: "film-recommender-d1b0f",
    storageBucket: "film-recommender-d1b0f.appspot.com",
    messagingSenderId: "821166507163",
    appId: "1:821166507163:web:b539a62e8965523ef8723e"
};
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export {auth}
export default db