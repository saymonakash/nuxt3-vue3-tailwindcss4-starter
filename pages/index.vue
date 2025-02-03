<template>
  <div>
    <h1 class="text-9xl">Welcome to the homepage</h1>
    <div>{{ store.count }}</div>
    <button @click="store.increment">count++</button>
    <button @click="store.decrement">count--</button>
    <Breadcrumbs />

    <div>pos: {{ x }}, {{ y }}</div>

    <svg-icon class="text-red-500" name="icon-home" />
    <svg-icon class="text-red-500" name="icon-user" />
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '~/stores/counter'
const store = useCounterStore()
const { x, y } = useMouse()
</script>
