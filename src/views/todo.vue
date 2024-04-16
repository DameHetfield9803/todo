<script setup lang="ts">
import "../assets/global.css"
import {RouterLink} from "vue-router";
</script>

<template>
  <div class="main">
    <h1 class="head"><strong>📅 Weekly Planner</strong></h1>
    <table class="content table-auto">
      <thead>
        <tr>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
          <th>Sunday</th>
        </tr>
      </thead>
      <tbody class="text-amber-500">
        <tr>
          <td>Shit for monday...</td>
          <td>Shit for Tuesday...</td>
          <td>Shit for Wednesday...</td>
          <td>Shit for Thursday...</td>
          <td>Shit for Friday...</td>
          <td>Shit for Saturday...</td>
          <td>Shit for Sunday...</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table.content{
  @apply text-cyan-600 bg-gray-200 tracking-tighter min-w-full justify-items-center rounded-lg;
}
h1.head{
  @apply text-start mx-auto mb-4 text-2xl mt-2;
}
</style>