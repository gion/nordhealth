<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content n-items-center n-align-center">
    <div class="hero n-container-s ">
      <provet-stack gap="l">
        <h1>Welcome to This App</h1>
        <p>This is a simple demonstration app built with Nuxt 3. </p>
        <p>It showcases a landing page, login functionality, and a post-login success page.</p>
        <img
          src="~/assets/img/hero-image.png"
          alt="Hero Image"
        >
      </provet-stack>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'guest'
})
</script>

<style scoped>
.content {
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.hero img {
  max-width: 600px;
  width: 100%;
}
</style>
