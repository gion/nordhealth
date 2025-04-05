import { useUserStore } from '@/store/useUserStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const { isUserLoggedIn } = useUserStore()

  if (to.path === '/' || to.path.startsWith('/auth/')) {
    if (isUserLoggedIn) {
      return navigateTo('/dashboard')
    }

    return
  }

  if (!isUserLoggedIn) {
    return navigateTo('/auth/signup')
  }
})
