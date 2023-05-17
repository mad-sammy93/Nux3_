<template>
    <div>
      <Alert />
        Index Page
        <IconsBell />
        <!-- <img src="@/assets/img/need-for-speed-grey-toyota-supra-wallpaper-3840x2160_54.jpg" alt=""> -->
    </div>
</template>

<script setup lang="ts">
// console.log(useNuxtApp());

definePageMeta({
  middleware: 'auth'
})

const { $sayHello } = useNuxtApp();
$sayHello('BOYDEN');

</script>

<style scoped>

</style>