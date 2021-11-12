import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyCGmVWFp-oeB5-SGPi3PYpKna3bTSrcTCI",
  authDomain: "bustling-icon-317416.firebaseapp.com",
  projectId: "bustling-icon-317416",
  storageBucket: "bustling-icon-317416.appspot.com",
  messagingSenderId: "106705163819",
  appId: "1:106705163819:web:b0e3d9f48b9757d4623c6e"
})

export const auth = app.auth()
export default app
