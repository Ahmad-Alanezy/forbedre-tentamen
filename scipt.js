import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyAW6znDm6qcrakJybTvii-LxiKAdKdpCUU",
    authDomain: "helpdesk-94994.firebaseapp.com",
    projectId: "helpdesk-94994",
    storageBucket: "helpdesk-94994.appspot.com",
    messagingSenderId: "1023227504703",
    appId: "1:1023227504703:web:36a79dc262f4b75b0e308a"
  };



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

document.getElementById("registrerForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const epost = document.getElementById("epost").value;
    const passord = document.getElementById("passord").value;

    try {
        // Legg til dokument i samlingen "Elever"
        const docRef = await addDoc(collection(db, "Elever"), {
            fornavn: fornavn,
            etternavn: etternavn,
            telefon: telefon,
            epost: epost,
            passord: passord
        });
        console.log('Document written with ID: ', docRef.id);

        // Omdiriger brukeren til påloggingssiden
        window.location.replace("login.html");
    } catch (error) {
        console.error('Error adding document: ', error);
        // Håndter feil ved lagring av data
    }
});


