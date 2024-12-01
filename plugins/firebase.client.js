import {initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"

export default defineNuxtPlugin(() => {
    const firebaseConfig = {
        apiKey: "AIzaSyDpvLzkWbG05ySfSAqWABpXyJlGAPOtA8M",
        authDomain: "habitsdata-1b4a6.firebaseapp.com",
        projectId: "habitsdata-1b4a6",
        storageBucket: "habitsdata-1b4a6.appspot.com",
        messagingSenderId: "709108359458",
        appId: "1:709108359458:web:c9e9535db361ce10d2457b"
    }
    const app = initializeApp(firebaseConfig)
    const db = getFirestore(app)

    return {
        provide: {
            firebaseApp: app,
            db,
        }
    }
})