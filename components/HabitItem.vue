<template>
  <div
      class="bg-white px-3 py-2 rounded-sm"
  >
    <div class="flex items-center justify-between mb-4">
      <p class="text-purple-500 font-bold">{{ habit.name }}</p>
      <button
          @click="deleteHabit(habit)"
          class="text-gray-800"
      >
        Delete
      </button>
    </div>

    <div class="flex items-center">
      <input
          type="checkbox"
          class="mr-2 accent-purple-500"
      />
      <p class="text-sm text-gray-500">I did this today.</p>
    </div>

    <p
        class="text-sm text-gray-500 mt-2"
    >
      Current Streak: {{ habit.streak }} days.
    </p>
  </div>
</template>

<script setup>

const emits = defineEmits(['delete'])
const props = defineProps({
  habit: {
    type: Object,
    required: true
  }
})
function deleteHabit(habit) {
  emits('delete', habit)
}
</script>