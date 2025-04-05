<template>
  <form @submit.prevent="handleSubmit">
    <provet-spinner size="xl" :class="{ active: isSubmitting }" class="spinner" />
    <provet-stack :class="{ 'opacity-50': isSubmitting }">
      <div>
        <provet-input
          id="name"
          v-model="form.name"
          :expand="true"
          :disabled="isSubmitting"
          label="Name"
        >
          <span v-if="errors.name" slot="error">
            {{ errors.name }}
          </span>
        </provet-input>
      </div>
      <div>
        <provet-input
          id="email"
          v-model="form.email"
          :expand="true"
          :disabled="isSubmitting"
          label="Email"
        >
          <span v-if="errors.email" slot="error">
            {{ errors.email }}
          </span>
        </provet-input>
      </div>

      <div>
        <provet-input
          v-model="form.password"
          :expand="true"
          :disabled="isSubmitting"
          label="Password"
          type="Password"
        >
          <span v-if="errors.password" slot="error">
            {{ errors.password }}
          </span>
        </provet-input>
      </div>

      <div>
        <provet-checkbox
          v-model="form.acceptMarketing"
          :disabled="isSubmitting"
          label="I want to receive occasional product updates and announcements"
        >
          <span v-if="errors.acceptMarketing" slot="error">
            {{ errors.acceptMarketing }}
          </span>
        </provet-checkbox>
      </div>
      <provet-button :expand="true" :disabled="isSubmitting" type="submit" variant="primary">
        Sign up
      </provet-button>
    </provet-stack>
  </form>
</template>

<script lang="ts" setup>
import { userSchema } from '@/models/user'

import type { User } from '@/models/user'
import { useUserStore } from '@/store/useUserStore'

const userStore = useUserStore()

const form = reactive<User>({
  name: '',
  email: '',
  password: '',
  acceptMarketing: false,
})

const errors = reactive<Record<keyof User, string>>({
  name: '',
  email: '',
  password: '',
  acceptMarketing: '',
})

const isSubmitting = ref(false)
const submitError = ref('')

const validateForm = (): boolean => {
  Object.keys(errors).forEach((key) => {
    errors[key as keyof User] = ''
  })

  const result = userSchema.safeParse(form)

  if (!result.success) {
    result.error.errors.forEach((error) => {
      const field = error.path[0] as keyof User
      errors[field] = error.message
    })
    return false
  }

  return true
}

const handleSubmit = async () => {
  submitError.value = ''

  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    await registerUserMockedApi({ ...form })
    navigateTo('/dashboard')
  } catch (error) {
    submitError.value = error instanceof Error ? error.message : 'An error occurred during signup'
  } finally {
    isSubmitting.value = false
  }
}

// just a mocked api call to simulate async call
const registerUserMockedApi = async (userData: User) => {
  return new Promise((resolve: Function): void => {
    setTimeout(() => {
      userStore.setUserData(userData)
      resolve()
    }, 2000)
  })
}
</script>

<style scoped>
form {
  position: relative;
}

.opacity-50 {
  opacity: 0.5;
}

.spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  pointer-events: none;
}

.spinner.active {
  opacity: 1;
  pointer-events: all;
}
</style>
