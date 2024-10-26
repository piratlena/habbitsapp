<template>
  <div>
    <div class="space-y-4">
      <template
          v-if="!habits.length"
      >
        <SkeletonItem
            v-for="item in [...Array(4)]"
            :key="item"
        />
      </template>

      <HabitItem
          v-for="habit in habits"
          :habit="habit"
          :key="habit.id"
          @delete="$emit('delete', habit)"
      />
    </div>
  </div>
</template>

<script setup>

const props = defineProps({
  habits: {
    type: Array,
    required: true
  }
})

</script>