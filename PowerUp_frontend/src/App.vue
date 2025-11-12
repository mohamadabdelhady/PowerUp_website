<script setup>
import Header from './Components/Header.vue'
</script>

<template>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

main {
  padding: 20px;
}
</style>
