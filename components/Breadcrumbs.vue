<script lang="ts" setup>
const items = useBreadcrumbItems() // uses the current route
</script>

<template>
  <UBreadcrumb :items="items" />
</template>
