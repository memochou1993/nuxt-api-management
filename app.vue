<script setup>
import { server } from '~/services';

const { data, error } = await server.fetchPosts();

console.log(data.value);
</script>

<template>
  <div>
    <NuxtWelcome />
  </div>
</template>
