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

      <!--
        be sure to "reserve" some space at the end of the component,
        so that the input value does not overlap the icon
      -->
      <span slot="end" class="end-slot" />
    </provet-input>
    <provet-icon
      :name="iconName"
      :style="iconStyle"
      size="xl"
      class="icon"
      @click="togglePasswordVisibility"
    />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change'])

const provetInputRef = ref(null)
const inputRef = ref(null)
const isPasswordVisible = ref(false)
const iconTop = ref(0)
const iconPadding = 10

const inputType = computed(() => {
  return isPasswordVisible.value ? 'text' : 'password'
})

const iconName = computed(() => {
  return isPasswordVisible.value ? 'interface-edit-off' : 'interface-edit-on'
})

const iconStyle = computed(() => {
  return {
    padding: `${iconPadding}px`,
    top: `${iconTop.value}px`,
  }
})

watch(provetInputRef, async () => {
  if (!provetInputRef.value) {
    return
  }

  const actualInputEl = await provetInputRef.value.getNativeElement()
  iconTop.value = actualInputEl.offsetHeight + iconPadding
})

watch(inputRef, () => {
  if (!inputRef.value) {
    return
  }

  iconTop.value = inputRef.value.offsetHeight
})

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value
  console.log('clicked')
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
