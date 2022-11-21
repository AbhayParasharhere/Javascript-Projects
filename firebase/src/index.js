import { initializeApp } from 'firebase/app';

import {
   getFirestore,
   collection,
   getDocs,
   addDoc,
   updateDoc,
   deleteDoc,
   doc,
   onSnapshot,
   query,
   where,
   orderBy,
   serverTimestamp,
   getDoc,
} from 'firebase/firestore';

import {
   getAuth,
   createUserWithEmailAndPassword,
   signOut,
   signInWithEmailAndPassword,
   onAuthStateChanged,
} from 'firebase/auth';

console.log('Index.js here!');
const firebaseConfig = {
   apiKey: 'AIzaSyDDFlL-MuwKxG72DwiEsJHN3jKsWmoz8tk',
   authDomain: 'fir-9tutorial-f6289.firebaseapp.com',
   projectId: 'fir-9tutorial-f6289',
   storageBucket: 'fir-9tutorial-f6289.appspot.com',
   messagingSenderId: '1051489274235',
   appId: '1:1051489274235:web:b17f00766fe00207ee95de',
};

initializeApp(firebaseConfig);

// db connection variable
const db = getFirestore();

// a connection variable to our books collection
const colBooks = collection(db, 'books');

// query
// const q = query(
//    colBooks,
//    where('author', '==', 'abhay'),
//    orderBy('title', 'asc')
// );

const q = query(colBooks, orderBy('createdAt'));

// get all the documents - NOT real time
// getDocs(colBooks)
//    .then(snapshot => {
//       //   console.log(snapshot.docs);
//       let books = [];

//       snapshot.docs.forEach(doc => {
//          books.push({ ...doc.data(), id: doc.id });
//       });
//       console.log(books);
//    })
//    .catch(err => console.log(err.message));

// realtime data base
const unsubdocs = onSnapshot(q, snapshot => {
   //   console.log(snapshot.docs);
   let books = [];

   snapshot.docs.forEach(doc => {
      books.push({ ...doc.data(), id: doc.id });
   });
   console.log(books);
});

// get the ref to the form

const addForm = document.querySelector('.add');
const deleteForm = document.querySelector('.delete');
const updateForm = document.querySelector('.update');

addForm.addEventListener('submit', e => {
   e.preventDefault();
   console.log('add form submitted');

   addDoc(colBooks, {
      author: addForm.author.value,
      title: addForm.title.value,
      createdAt: serverTimestamp(),
   })
      .then(() => addForm.reset())
      .catch(err => console.log(err.message));
});

deleteForm.addEventListener('submit', e => {
   e.preventDefault();
   console.log('in del form');

   const delDocRef = doc(db, 'books', deleteForm.id.value);

   deleteDoc(delDocRef)
      .then(() => {
         deleteForm.reset();
         console.log('reset form');
      })
      .catch(error => error.message);
});

const docRef = doc(db, 'books', '3syMTPwtjFEzwXnd1XBF');

// getDoc(docRef).then(doc => console.log(doc.data(), doc.id));

const unsubDoc = onSnapshot(docRef, doc => console.log(doc.data(), doc.id));

updateForm.addEventListener('submit', e => {
   e.preventDefault();
   const updateDocRef = doc(db, 'books', updateForm.id.value);
   updateDoc(updateDocRef, {
      author: 'AP',
   }).then(() => updateForm.reset());
});

// Firebase Auth

const auth = getAuth();

const signUpForm = document.querySelector('.signup');

signUpForm.addEventListener('submit', e => {
   e.preventDefault();
   const email = signUpForm.email.value;
   const password = signUpForm.password.value;

   createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
         console.log('User created ', cred.user);
      })
      .catch(err => console.log(err.message));
});

// login and logout
const loginForm = document.querySelector('.login');
const logoutBtn = document.querySelector('.logout');

loginForm.addEventListener('submit', e => {
   e.preventDefault();
   const email = loginForm.email.value;
   const password = loginForm.password.value;
   signInWithEmailAndPassword(auth, email, password)
      .then(cred => {
         console.log('User Logged in', cred.user);
      })
      .catch(err => console.log(err.message));
});

logoutBtn.addEventListener('click', e => {
   signOut(auth)
      .then(console.log('User signed out'))
      .catch(err => console.log(err.message));
});

// subscribing to auth changes
const unsubAuth = onAuthStateChanged(auth, user => {
   console.log('User status changed: ', user);
});

// Unsubscribe button
const unsubBtn = document.querySelector('.unsub');

unsubBtn.addEventListener('click', () => {
   console.log('Unsuscribing all subscriptions');
   unsubdocs();
   unsubDoc();
   unsubAuth();
});
