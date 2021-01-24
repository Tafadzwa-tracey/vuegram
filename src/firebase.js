import  {firebase} from '@firebase/app'
import '@firebase/auth'
import '@firebase/firestore'

//firebase init
const firebaseConfig = {
    apiKey: "AIzaSyCGRtN_Z6ZZDGZ-4dBbh1OXWZPPbiTOkU0",
    authDomain: "vuegram-2fe6b.firebaseapp.com",
    projectId: "vuegram-2fe6b",
    storageBucket: "vuegram-2fe6b.appspot.com",
    messagingSenderId: "810436859156",
    appId: "1:810436859156:web:2c05a552e5da3667b49e01",
    measurementId: "G-PB6C8EPDXN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //utils
  const db = firebase.firestore()
  const auth = firebase.auth()


  //collectionn references
  const userCollection =  db.collection('users')
  const postsCollection = db.collection('posts')
  const commentsCollection = db.collection('comments')
  const likesCollection = db.collection('likes')

  //export utils/refs
  export{
      db,
      auth,
      userCollection,
      postsCollection,
      commentsCollection,
      likesCollection
  }