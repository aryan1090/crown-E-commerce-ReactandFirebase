import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCCSM7aMGk4QcR1CWLhLjwJsmYjisQjN3g",
    authDomain: "crownserver-4e5ac.firebaseapp.com",
    projectId: "crownserver-4e5ac",
    storageBucket: "crownserver-4e5ac.appspot.com",
    messagingSenderId: "1074036329853",
    appId: "1:1074036329853:web:6d634a427faa93ae109014"
};

export const createUserProfileDocument = async (userAuth,additionalData) =>{
    if(!userAuth){
        return;
    }
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();
    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt  = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user',error.message);
        }
    }
    
    return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
//Making the provider object
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});


export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;