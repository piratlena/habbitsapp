<template>
  <div class="mx-auto p-6 max-w-2xl">
    <h1 class="text-4xl font-bold text-center mb-8">Habit Tracker</h1>
    <HabitForm/>
    <HabitList :habits="habitsStore.habits"/>
  </div>
</template>

<script setup>
import { useHabitsStore } from "~/store/habits.js"
import HabitForm from '~/components/HabitForm.vue'
import HabitList from '~/components/HabitList.vue'

const habitsStore = useHabitsStore()

onMounted(async () => {
  await habitsStore.fetchAllHabits()
  console.log(habitsStore.habits)
})

</script>

<style>
body {
  background: #f1f1f1;
}
</style>