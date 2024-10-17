<template>
  <h1>Hola Mundo</h1>
  <h2>{{ contador }}</h2>
  <button @click="incrementar">Incrementar</button>
  <button @click="decrementar">Decrementar</button>
</template>

<script setup>
import { ref } from 'vue';
const contador = ref(0);

const incrementar = () => {
  contador.value++;
}

const decrementar = () => {
  contador.value--;
}
</script>

<style scoped>
h2 {
  color: red;
}
</style>
