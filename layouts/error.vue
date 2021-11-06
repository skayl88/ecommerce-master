<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Страница не найденна</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Главная траница</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>