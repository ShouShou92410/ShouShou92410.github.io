import firebase from 'firebase/app';
import 'firebase/database';
//import 'firebase/analytics';
import 'firebase/auth';
import { QuizEnumeration } from '../utility/Enumeration';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

export { firebase };

export const signIn = (email, password) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch((error) => {
      throw error;
    });
};

export const signOut = () => {
  firebase.auth().signOut();
};

/* Database operations */
const database = firebase.database();

export const getAllBlogPost = () => {
  return firebaseJsonToArray(database.ref('/blog').once('value'));
};

export const getBlogPost = (id) => {
  return database.ref(`/blog/${id}`).once('value');
};

export const editBlogPost = ({ id, title, content }) => {
  database.ref(`/blog/${id}`).update({
    title,
    content
  });
};

export const deleteBlogPost = (id) => {
  return database.ref(`/blog/${id}`).remove();
};

export const createBlogPost = ({ title, content }) => {
  database
    .ref('/blog')
    .push()
    .set({
      title,
      content,
      datePosted: getCurrentDateTime(),
      uid: firebase.auth().currentUser.uid
    });
};
export const insertVocabulary = ({ chinese, english, gojuuon, kanji, partofspeech }) => {
  database
    .ref('/vocabulary')
    .push()
    .set({ chinese, english, gojuuon, kanji, partofspeech });
};

export const getVocabularyQuestion = (quizSetting) => {
  return new Promise((resolve, reject) => {
    firebaseJsonToArray(database.ref('/vocabulary').once('value'))
      .then((allVocabulary) => {
        resolve(allVocabulary);
        // if (quizSetting.mode === QuizEnumeration.Mode.QUICK) allVocabulary.
      })
      .catch((err) => reject(err));
  });
};

function getCurrentDateTime() {
  let now = new Date();
  let date = `${now.getFullYear()}/${now.getMonth() + 1}/${now.getDate()}`;
  let time = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  return `${date} ${time}`;
}

/* Converts firebase's records from json structure to array structure. */
function firebaseJsonToArray(getPromise) {
  return new Promise((resolve, reject) => {
    getPromise
      .then((snapshot) => {
        resolve(
          Object.entries(snapshot.val() || []).map((record) => {
            return { ID: record[0], ...record[1] };
          })
        );
      })
      .catch((err) => reject(err));
  });
}
