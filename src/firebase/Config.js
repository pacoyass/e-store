import firebase from 'firebase';
import 'firebase/storage'
 
var firebaseConfig = {
  apiKey: 'AIzaSyACU23G1v1fk8dzog6GvdzmUCi0YwE7apo',
  authDomain: 'project-manager-1725e.firebaseapp.com',
  databaseURL: 'https://project-manager-1725e.firebaseio.com',
  projectId: 'project-manager-1725e',
  storageBucket: 'project-manager-1725e.appspot.com',
  messagingSenderId: '1010559680742',
  appId: '1:1010559680742:web:6c21cc4a3af1d7b0407b27',
};
// Initialize Firebase

const store = firebase.initializeApp(firebaseConfig);
const db = store.firestore();
export { db };
export const storage = firebase.storage();
