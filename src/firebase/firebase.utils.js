import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config={
    apiKey: "AIzaSyDNmfW1lp11FxhnJxiCsCTdEyFUgPmBatM",
    authDomain: "crwn-db-45102.firebaseapp.com",
    databaseURL: "https://crwn-db-45102.firebaseio.com",
    projectId: "crwn-db-45102",
    storageBucket: "",
    messagingSenderId: "1035667087398",
    appId: "1:1035667087398:web:fac26950fafe1e97"
}

firebase.initializeApp(config)

export const auth=firebase.auth()
export const firestore=firebase.firestore()

const provider=new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})

const providerFB = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({
    'display': 'popup'
  });

export const signInWithFB = () => {
    return firebase.auth().signInWithPopup(providerFB).then(function(result) {
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
}

export const signInWithGoogle = () => { 
    //console.log('Working')
    return auth.signInWithPopup(provider) 
}

export default firebase