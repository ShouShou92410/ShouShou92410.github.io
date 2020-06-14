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

/* Move login to a back-end server in the future */
export const getVocabularyQuestion = (quizSetting) => {
  return new Promise((resolve, reject) => {
    firebaseJsonToArray(database.ref('/vocabulary').once('value'))
      .then((allVocabulary) => {
        let relevantVocabularies = [];

        switch (quizSetting.format) {
          case QuizEnumeration.Format.JPK_ZH:
          case QuizEnumeration.Format.ZH_JPK:
          case QuizEnumeration.Format.JPK_EN:
          case QuizEnumeration.Format.EN_JPK:
            allVocabulary = allVocabulary.filter((vocab) => vocab.kanji);
            break;
          default:
            break;
        }

        switch (quizSetting.mode) {
          case QuizEnumeration.Mode.QUICK:
            relevantVocabularies = shuffleArray(allVocabulary).slice(0, quizSetting.total);
            break;
          case QuizEnumeration.Mode.SURVIVAL:
            relevantVocabularies = shuffleArray(allVocabulary).slice();
            break;
          default:
            break;
        }

        const questions = relevantVocabularies.map((vocabulary, index) => {
          let question = {
            questionNumber: index + 1,
            ID: vocabulary.ID,
            partofspeech: vocabulary.partofspeech
          };
          let questionText = '';
          let options = shuffleArray(allVocabulary).slice(0, 4);

          const questionIndex = options.findIndex((option) => option.ID === question.ID);
          const randomIndex = Math.floor(Math.random() * 4);
          if (questionIndex === -1) options.splice(randomIndex, 1, vocabulary);

          switch (quizSetting.format) {
            case QuizEnumeration.Format.JPK_ZH:
              questionText = vocabulary.kanji;
              options = options.map((option) => {
                return { ID: option.ID, value: option.chinese };
              });
              break;
            case QuizEnumeration.Format.JPNK_ZH:
              questionText = vocabulary.gojuuon;
              options = options.map((option) => {
                return { ID: option.ID, value: option.chinese };
              });
              break;
            case QuizEnumeration.Format.ZH_JPK:
              questionText = vocabulary.chinese;
              options = options.map((option) => {
                return { ID: option.ID, value: option.kanji };
              });
              break;
            case QuizEnumeration.Format.ZH_JPNK:
              questionText = vocabulary.chinese;
              options = options.map((option) => {
                return { ID: option.ID, value: option.gojuuon };
              });
              break;
            case QuizEnumeration.Format.JPK_EN:
              questionText = vocabulary.kanji;
              options = options.map((option) => {
                return { ID: option.ID, value: option.english };
              });
              break;
            case QuizEnumeration.Format.JPNK_EN:
              questionText = vocabulary.gojuuon;
              options = options.map((option) => {
                return { ID: option.ID, value: option.english };
              });
              break;
            case QuizEnumeration.Format.EN_JPK:
              questionText = vocabulary.english;
              options = options.map((option) => {
                return { ID: option.ID, value: option.kanji };
              });
              break;
            case QuizEnumeration.Format.EN_JPNK:
              questionText = vocabulary.english;
              options = options.map((option) => {
                return { ID: option.ID, value: option.gojuuon };
              });
              break;
            default:
              break;
          }

          question['question'] = questionText;
          question['options'] = options;

          return question;
        });

        resolve(questions);
      })
      .catch((err) => reject(err));
  });
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

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
