<template>
	<h1>{{ currentRoute }}</h1>
</template>

<script setup lang="ts">
const currentRoute = useRoute().params;
</script>
