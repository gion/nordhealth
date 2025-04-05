<template>
  <div>
    <h1 class="n-typescale-l">
      Dashboard
    </h1>
    <p>
      Welcome, {{ userName }} 👋, this is your dashboard page.
    </p>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: 'auth'
})

const userName = "John Doe"
</script>
