<template>
    <div>
        Event id: {{ $route.params.id }}
    </div>
</template>

<script setup lang="ts">
    // const route = useRoute();
    // console.info(route.params);

    const nuxt = useNuxtApp();

    console.info(nuxt);
</script>