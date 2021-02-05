import React from 'react';
import app from 'firebase/app';
import 'firebase/firestore';
import Enumeration from '../utility/Enumeration';

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

  async getRandomVocabularyQuestions(quizSetupForm) {
    const format = Enumeration.JPN_VOCAB_QUIZ_FORMAT[quizSetupForm.format];
    const range = Enumeration.JPN_VOCAB_QUIZ_RANGE[quizSetupForm.range];

    const lessonsRef = this.db.collection('lessons');
    const countData = (await lessonsRef.doc('-count-').get()).data();

    let questions = await generateQuestions(range, quizSetupForm.count, lessonsRef, countData);
    const options = await generateOptions(range, lessonsRef, countData, questions);

    // Get options by looking at all vocabs.
    // 1. Generate random keys
    // 2. Do calculation with lesson vocab count to find the vocab with that random id in the correct lesson

    switch (format) {
      case Enumeration.JPN_VOCAB_QUIZ_FORMAT.JPK_EN:
        questions = questions.map((x) => ({
          question: x.kanji || x.gojuuon,
          answer: x.english,
          options: []
        }));
        break;
      case Enumeration.JPN_VOCAB_QUIZ_FORMAT.JPNK_EN:
        questions = questions.map((x) => ({
          question: x.gojuuon,
          answer: x.english,
          options: []
        }));
        break;
      case Enumeration.JPN_VOCAB_QUIZ_FORMAT.EN_JPK:
        questions = questions.map((x) => ({
          question: x.english,
          answer: x.kanji || x.gojuuon,
          options: []
        }));
        break;
      case Enumeration.JPN_VOCAB_QUIZ_FORMAT.EN_JPNK:
        questions = questions.map((x) => ({
          question: x.english,
          answer: x.gojuuon,
          options: []
        }));
        break;
    }

    return questions;
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function findLocalId(id, countRangeArray) {
  console.log(countRangeArray.find((x) => id <= x.maxId));
}

async function generateQuestions(range, questionCount, lessonsRef, countData) {
  if (range === Enumeration.JPN_VOCAB_QUIZ_RANGE.ALL) {
  } else {
    const lessonRef = lessonsRef.doc(`${range.value}`);
    const vocabulariesRef = lessonRef.collection('vocabularies');

    const count = countData[range.value]; // Total vocabulary count on the selected lesson

    const temp = [...Array(count).keys()].map((x) => x + 1);
    const randomIDs = shuffleArray(temp).slice(0, questionCount);

    const randomRes = await vocabulariesRef.where('id', 'in', randomIDs).get();
    return randomRes.docs.map((x) => x.data());
  }
}
async function generateOptions(range, lessonsRef, countData, questions) {
  const numOfOptions = 4;
  const numOfVocab = Object.values(countData).reduce(
    (accumulator, current) => accumulator + current,
    0
  );
  const temp = [...Array(numOfVocab).keys()].map((x) => x + 1);
  const countRangeArray = Object.entries(countData)
    .sort((a, b) => a[0] - b[0])
    .reduce((accumulator, [key, value]) => {
      const previous = accumulator[accumulator.length - 1];
      return [...accumulator, { key: key, maxId: previous ? value + previous.maxId : value }];
    }, []);
  console.log(countRangeArray);

  if (range === Enumeration.JPN_VOCAB_QUIZ_RANGE.ALL) {
  } else {
    questions.map((question) => {
      const randomIDs = shuffleArray(temp).slice(0, numOfOptions);
      console.log(randomIDs);
      console.log(randomIDs.map((x) => findLocalId(x, countRangeArray)));
    });
  }
}

export { FirebaseContext };

export default Firebase;
