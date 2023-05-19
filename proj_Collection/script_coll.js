//import { projetListe } from "./Collection.js";

//import FireBase

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getFirestore, collection, addDoc, updateDoc, deleteDoc, setDoc, getDoc, where, writeBatch, query, orderBy, doc, limit, getDocs } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBN977xm8BscOo5hzXRl61y1TNyYvBXkYA",
    authDomain: "sih-tarot.firebaseapp.com",
    projectId: "sih-tarot",
    storageBucket: "sih-tarot.appspot.com",
    messagingSenderId: "973002760991",
    appId: "1:973002760991:web:b81f0478ded09fee01862a",
    measurementId: "G-MP3LM1N5YJ"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);


// fonction pour récupèrer une collection (READ)
const getDocument = async (collectionName) => {
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await getDocs(DocumentColRef);
    const DocumentList = DocumentSnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    return DocumentList
  }


const userExist = async (name, password) => {
  
    const DocumentColRef = collection(db, "users");
    const q = await query(DocumentColRef, where("name", "==", name), where("password", "==", password))
    const querySnapshot = await getDocs(q);
    console.log("querySnapshot docs", querySnapshot.docs)
    const DocumentList = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
    console.log('test user already exists', name, password, DocumentList);
    return DocumentList;
  };

  userExist("enzo", "1234")
  userExist("enzo", "test")
// fonction pour créer une collection (CREATE)
const createDocument = async (collectionName, newObj) => {
    console.log('createDocument', newObj)
    const DocumentColRef = collection(db, collectionName);
    const DocumentSnapshot = await addDoc(DocumentColRef, newObj);
}
// createDocument("burgers", {name: "cheeseburger"})

// fonction pour mettre à jour une collection (UPDATE)
const updateDocument = async (collectionName, newObj) => {
    console.log('updateDocument', newObj)
    const DocumentColRef = doc(db, collectionName, newObj.id)
    const DocumentSnapshot = await updateDoc(DocumentColRef, newObj);
}
// fonction pour supprimer une collection (DELETE)
const deleteDocument = async (collectionName, id) => {
    console.log('deleteDocument', id)
    const DocumentColRef = doc(db, collectionName, id)
    console.log('DocumentColRef', DocumentColRef)
    await deleteDoc(DocumentColRef, id);
}

const getData = async() => {
   const data = await fetch("https://json-ece.glitch.me/burgers.json")
   const json = await data.json()
   console.log("json", json)
   displayBurgers(json.data)

   const burgers = document.querySelectorAll('.burger')
    burgers.forEach((burgerHTML, index) => {
        burgerHTML.addEventListener('click', () => {
            displayBurger(burgerList[index])
        })
    })
}

const getDataFirebase = async() => {
    
    const cartes = await getDocument("rappeursListe")
    const contentHTML = document.querySelector('.content')
    cartes.forEach((carte, index) => {
        contentHTML.innerHTML += `<div>
        ${carte.Nom}
        ${carte.Pays}
        </div>`
    })
    console.log('Voici une carte :', cartes)

}

const body = document.querySelector("#test")

body.addEventListener('click',()=>{
   const numproj = randomproj()
   console.log(projetListe[numproj].nom)
})

//projetListe.forEach(e=>{
    //body.innerHTML+=`<div class="xl:w-1/4 md:w-1/2 p-4">
            //<div class="bg-gray-100 p-6 rounded-lg">
            //<img class="h-40 rounded w-full object-cover object-center mb-6 bg-cover" src="${e.img}" alt="content">
            //<h2 class="text-lg text-gray-900 font-medium title-font mb-4">${e.nom}</h2>
            //<p class="leading-relaxed text-base">${e.desc}</p>
          //</div>`
//})



function randomproj() {
    const numCartes= Math.floor(Math.random() * 4);
    return numCartes
    //choisi un nombre entre 0 et 21 pour choisir la carte 
 }