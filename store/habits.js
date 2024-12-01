import {defineStore} from 'pinia'
import {addDoc, collection, getDocs, deleteDoc, doc} from 'firebase/firestore'

export const useHabitsStore = defineStore('habitStore', {
    state: () => ({
        habits: []
    }),
    actions: {
        async fetchAllHabits() {
            const {$db} = useNuxtApp()

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
        },

        async deleteHabit(habit) {
            const {$db} = useNuxtApp()

            const docRef = doc($db, 'habits', habit.id)
            await deleteDoc(docRef)
            await this.fetchAllHabits()
        }
    }
})