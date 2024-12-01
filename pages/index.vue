<template>
  <div class="mx-auto p-6 max-w-2xl">
    <h1 class="text-4xl font-bold text-center mb-8">Habit Tracker</h1>
    <HabitForm/>
    <HabitList
        :habits="habitsStore.habits"
        @delete="deleteHabit"
    />
  </div>
</template>

<script setup>
import {useHabitsStore} from "~/store/habits.js"
import HabitForm from '~/components/HabitForm.vue'
import HabitList from '~/components/HabitList.vue'

const habitsStore = useHabitsStore()

let habitsList = habitsStore.habits

async function deleteHabit(habit) {
  habitsList = habitsList.filter((habit) => habit.id !== habit.id)
  await habitsStore.deleteHabit(habit)
}

onMounted(async () => {
  await habitsStore.fetchAllHabits()
})

</script>

<style>
body {
  background: #f1f1f1;
}
</style>