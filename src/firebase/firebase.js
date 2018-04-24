import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBLucQgujD1w-PfhtccRjUmOopIYiGnL0A',
  authDomain: 'qr-scaner-39e8a.firebaseapp.com',
  databaseURL: 'https://qr-scaner-39e8a.firebaseio.com',
  projectId: 'qr-scaner-39e8a',
  storageBucket: 'qr-scaner-39e8a.appspot.com',
  messagingSenderId: '929637849133',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}
const db = firebase.database();
const auth = firebase.auth();

export {db, auth};
