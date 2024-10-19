<template>
  <div>
    <div class="space-y-4">
      <template
          v-if="!habits.length"
      >
        <SkeletonItem v-for="item in [...Array(4)]"/>
      </template>

      <HabitItem
          v-for="habit in habits"
          :habit="habit"
          :key="habit.id"
      />
    </div>
  </div>
</template>

<script setup>
import {useHabitsStore} from "~/store/habits.js";

defineProps({
  habits: {
    type: Array,
    required: true
  }
})

const habitStore = useHabitsStore()

</script>