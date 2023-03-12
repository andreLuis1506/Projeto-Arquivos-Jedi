<template>
  <section>
    <TheNavBar />
    <main>
      <RouterView />
    </main>
  </section>
</template>

<script setup lang="ts">
import TheNavBar from './components/TheNavBar.vue'
import { RouterView } from 'vue-router'


</script>

<style scoped>
section {
  margin: 0;
  padding: 0;
  background-color: #333;
  color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
}
</style>
