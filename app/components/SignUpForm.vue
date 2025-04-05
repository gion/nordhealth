<template>
  <form @submit.prevent="handleSubmit">
    <provet-stack>
      <div>
        <provet-input
          id="name"
          v-model="form.name"
          :expand="true"
          label="Name"
        >
          <span
            slot="error"
            v-if="errors.name"
          >
            {{ errors.name }}
          </span>
        </provet-input>
      </div>
      <div>
        <provet-input
          id="email"
          v-model="form.email"
          :expand="true"
          label="Email"
        >
          <span
            slot="error"
            v-if="errors.email"
          >
            {{ errors.email }}
          </span>
        </provet-input>
      </div>

      <div>
      <provet-input
        v-model="form.password"
        :expand="true"
        label="Password"
        type="Password"
      >
        <span
          slot="error"
          v-if="errors.password" 
        >
          {{ errors.password }}
        </span>
      </provet-input>
      </div>

      <div>
        <provet-checkbox
          v-model="form.acceptMarketing"
          label="I want to receive occasional product updates and announcements"
        >
          <span
            slot="error"
            v-if="errors.acceptMarketing"
          >
            {{ errors.acceptMarketing }}
          </span>
        </provet-checkbox>
      </div>
      <provet-button
        :expand="true"
        type="submit"
        variant="primary"
      >
        Sign up
      </provet-button>
    </provet-stack>
  </form>
</template>

<script lang="ts" setup>
import { z } from 'zod'

import { type User, userSchema } from '@/models/user'
import { useUserStore } from '@/store/useUserStore'

const { setUserData } = useUserStore()

const form = reactive<User>({
  name: '',
  email: '',
  password: '',
  acceptMarketing: false
})

const errors = reactive<Record<keyof User, string>>({
  name: '',
  email: '',
  password: '',
  acceptMarketing: ''
})

const isSubmitting = ref(false)
const submitError = ref('')

const validateForm = (): boolean => {
  Object.keys(errors).forEach(key => {
    errors[key as keyof User] = ''
  })
  
  const result = userSchema.safeParse(form)
  
  if (!result.success) {
    result.error.errors.forEach(error => {
      const field = error.path[0] as keyof User
      errors[field] = error.message
    })
    return false
  }
  
  return true
}

const handleSubmit = () => {
  submitError.value = ''
  
  if (!validateForm()) {
    return
  }
  
  isSubmitting.value = true
  
  try {
    setUserData({...form})
    navigateTo('/dashboard')
  } catch (error) {
    submitError.value = error instanceof Error 
      ? error.message 
      : 'An error occurred during signup'
  } finally {
    isSubmitting.value = false
  }
}
</script>
