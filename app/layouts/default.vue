<template>
  <provet-layout style="--n-layout-background-color: var(--n-color-nav-surface)">
    <provet-top-bar slot="header" style="width: 100%">
      <h1>This App</h1>
      <provet-dropdown slot="end">
        <provet-button variant="plain" slot="toggle" aria-describedby="user-tooltip">
          <provet-avatar style="transform: translateY(-1px)" :name="userStore.displayName">{{
            userStore.initials
          }}</provet-avatar>
        </provet-button>
        <provet-avatar slot="header" size="s" :name="userStore.displayName">{{
          userStore.initials
        }}</provet-avatar>
        <p slot="header" class="n-color-text-weak n-font-size-s">
          Signed in as <span class="n-font-weight-active">{{ userStore.displayName }}</span>
        </p>
        <provet-dropdown-group>
          <provet-dropdown-item>My profile</provet-dropdown-item>
          <provet-dropdown-item>Account Settings</provet-dropdown-item>
          <provet-dropdown-item>Change password</provet-dropdown-item>
        </provet-dropdown-group>
        <provet-dropdown-group>
          <provet-dropdown-item>
            Keyboard commands
            <div slot="end" class="n-color-text-weaker n-font-size-xs">Cmd+K</div>
          </provet-dropdown-item>
          <provet-dropdown-item>Help &amp; Support</provet-dropdown-item>
        </provet-dropdown-group>
        <provet-dropdown-item @click="logout">
          Sign out
          <provet-icon slot="end" name="interface-logout" />
        </provet-dropdown-item>
      </provet-dropdown>
      <provet-tooltip id="user-tooltip">Ariel Salminen</provet-tooltip>
    </provet-top-bar>

    <NuxtPage />

    <provet-footer slot="footer"> {{ year }} &copy; This App </provet-footer>
  </provet-layout>
</template>

<script setup lang="ts">
import { useUserStore } from '~/store/useUserStore';

const userStore = useUserStore();
const year = new Date().getFullYear();

const logout = () => {
  userStore.logout();
  navigateTo('/');
};
</script>

<style scoped>
provet-layout {
  margin: 0 auto;
}
</style>
