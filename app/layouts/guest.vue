<template>
  <provet-layout
    class="n-container-m"
    style="--n-layout-background-color: var(--n-color-nav-surface)"
  >
    <provet-header slot="header">
      <NuxtLink to="/">
        <h1 class="n-typescale-l">This App</h1>
      </NuxtLink>
      <UserMenu slot="end" />
    </provet-header>

    <NuxtPage />

    <provet-footer slot="footer"> 2025 © This App </provet-footer>
  </provet-layout>
</template>

<style scoped>
provet-layout {
  margin: 0 auto;
}
</style>
