<template>
  <div class="n-stack-horizontal n-justify-around">
    <div class="n-container-xs">
      <h1>Sign Up</h1>
      <SignUpForm />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'guest',
  middleware: 'auth',
})
</script>
