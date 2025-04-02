<template>
  <div>
     <provet-button variant="primary" @click="count++">
      Count is: {{ count }}
    </provet-button>
  </div>
</template>

<script setup>
  const count = ref(0)
</script>