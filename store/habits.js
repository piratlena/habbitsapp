import {defineStore} from 'pinia'
import {addDoc, collection, getDocs} from 'firebase/firestore'

export const useHabitsStore = defineStore('habitStore', {
    state: () => ({
        habits: []
    }),
    actions: {
        async fetchAllHabits() {
            const { $db } = useNuxtApp()

            const snapshot = await getDocs(collection($db, 'habits'))
            this.habits = snapshot.docs.map((doc) => ({...doc.data(), id: doc.id}))
        },

        async addHabit(name) {
            const {$db} = useNuxtApp()
            const habit = {
                name,
                completions: [],
                streak: 0
            }

            const docRef = await addDoc(collection($db, 'habits'), habit)
            this.habits.push({id: docRef.id, ...habit})
        }
    }
})