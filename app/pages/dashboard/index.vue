<template>
  <div>
    <h1 class="n-typescale-l">Dashboard</h1>
    <p>Welcome, {{ displayName }} 👋, this is your dashboard page.</p>
  </div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/store/useUserStore'

definePageMeta({
  middleware: 'auth',
})

const { displayName } = useUserStore()
</script>
