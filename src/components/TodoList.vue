<script setup lang="ts">
import TodoGroupVue from './TodoGroup.vue'
import { TodoStatus } from '@/types'
</script>

<template>
  <div class="groups-wrapper">
    <TodoGroupVue :status="TodoStatus.Pending" />
    <TodoGroupVue :status="TodoStatus.InProgress" />
    <TodoGroupVue :status="TodoStatus.Completed" />
  </div>
</template>
<style scoped>
.groups-wrapper {
  display: flex;
  justify-content: space-around;
  gap: 20px;
}
</style>
