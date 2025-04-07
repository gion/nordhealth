<template>
  <div class="input-wrapper">
    <provet-input
      ref="provetInputRef"
      v-bind="$attrs"
      :type="inputType"
      :value="props.modelValue"
      @change="emit('change', $event)"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
      @input="emit('update:modelValue', $event.target.value)"
    >
      <slot v-for="(_, name) in $slots" :key="name" :name="name" />
      <span slot="end" class="end-slot" />
    </provet-input>
    <provet-icon
      :name="iconName"
      :style="iconStyle"
      aria-describedby="password-visibility-tooltip"
      size="xl"
      class="icon"
      @click="togglePasswordVisibility"
    />
    <provet-tooltip id="password-visibility-tooltip">{{ iconTooltip }}</provet-tooltip>
  </div>
</template>

<script lang="ts">
export default {
  name: 'PasswordInput',
}
</script>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: String
}>()

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

type iconStyleType = {
  padding: string
  top: string
}

const provetInputRef = ref(null)
const inputRef = ref(null)
const isPasswordVisible = ref(false)
const iconTop = ref(0)
const iconPadding = 10

const inputType = computed((): String => {
  return isPasswordVisible.value ? 'text' : 'password'
})

const iconName = computed((): String => {
  return isPasswordVisible.value ? 'interface-edit-off' : 'interface-edit-on'
})

const iconTooltip = computed((): String => {
  return isPasswordVisible.value ? 'Hide password' : 'Show password'
})

const iconStyle = computed((): iconStyleType => {
  return {
    padding: `${iconPadding}px`,
    top: `${iconTop.value}px`,
  }
})

watch(provetInputRef, async (): Promise<void> => {
  if (!provetInputRef.value) {
    return
  }

  const actualInputEl = await provetInputRef.value.getNativeElement()
  iconTop.value = actualInputEl.offsetHeight + iconPadding
})

watch(inputRef, (): void => {
  if (!inputRef.value) {
    return
  }

  iconTop.value = inputRef.value.offsetHeight
})

const togglePasswordVisibility = (): void => {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<style scoped>
.input-wrapper {
  position: relative;
}

.icon {
  cursor: pointer;
  padding: 10px;
  z-index: 999;
  position: absolute;
  right: 0;
  transform: translateY(-50%);
}

.end-slot {
  width: 20px;
}
</style>
