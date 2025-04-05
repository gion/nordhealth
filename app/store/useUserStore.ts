import type { User } from '@/models/user'

type UserState = {
  userData: User | null
}

export const useUserStore = defineStore('userStore', {
  state: (): UserState => ({
    userData: null,
  }),

  actions: {
    setUserData(userData: User): void {
      this.userData = userData
    },
    logout(): void {
      this.userData = null
    },
  },

  getters: {
    isUserLoggedIn(state: UserState): boolean {
      return state.userData?.email !== undefined
    },
    displayName(state: UserState): string {
      return state.userData?.name || state.userData?.email || ''
    },
    initials(state: UserState): string {
      return this.displayName.substring(0, 2).toUpperCase() || ''
    },
  },

  persist: {
    storage: piniaPluginPersistedstate.sessionStorage(),
  },
})
