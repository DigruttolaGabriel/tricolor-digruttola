import {initializeApp} from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDCfqRtyoznbkUd1kPYKohxtQU3nqR0w2w",
    authDomain: "tricolor-840c6.firebaseapp.com",
    projectId: "tricolor-840c6",
    storageBucket: "tricolor-840c6.appspot.com",
    messagingSenderId: "541725443870",
    appId: "1:541725443870:web:734c22b24752f52b556b0f"
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}