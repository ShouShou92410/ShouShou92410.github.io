import React from 'react';
import app from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

const FirebaseContext = React.createContext(null);

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.db = app.firestore();
  }

  async getRandomVocabularies(questionCount) {
    questionCount = 5;

    const vocabulariesRef = this.db.collection('vocabulary');

    const metadataRes = await vocabulariesRef.doc('-metadata-').get();
    const count = metadataRes.data().count;

    const temp = [...Array(count).keys()].map((x) => x + 1);
    const randomIDs = shuffleArray(temp).slice(0, questionCount);

    const randomRes = await vocabulariesRef.where('id', 'in', randomIDs).get();
    const randomVocabularies = randomRes.docs.map((x) => x.data());

    console.log(randomIDs);
    console.log(randomVocabularies);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { FirebaseContext };

export default Firebase;
