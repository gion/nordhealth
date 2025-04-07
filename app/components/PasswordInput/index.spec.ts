import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { mountSuspended } from '@nuxt/test-utils/runtime'

import PasswordInput from './index.vue'

describe('PasswordInput', () => {
  describe('render', () => {
    it(`doesn't explode`, () => {
      mount(PasswordInput)
    })

    it('nothing unexpected has changed', () => {
      const component = mount(PasswordInput)

      expect(component.html()).toMatchInlineSnapshot(`
        "<div data-v-1d3d9af3="" class="input-wrapper">
          <provet-input data-v-1d3d9af3=""><span data-v-1d3d9af3="" slot="end" class="end-slot"></span></provet-input>
          <provet-icon data-v-1d3d9af3="" style="padding: 10px; top: 0px;" aria-describedby="password-visibility-tooltip" class="icon"></provet-icon>
          <provet-tooltip data-v-1d3d9af3="">Show password</provet-tooltip>
        </div>"
      `)
    })
  })

  describe('functionality', () => {
    it('should change the tooltip text after pressing the eye icon', async () => {
      const component = await mountSuspended(PasswordInput)
      const icon = component.find('provet-icon')
      const tooltip = component.find('provet-tooltip')

      expect(tooltip.text()).toMatchInlineSnapshot(`
      "Show password"
    `)

      await icon.trigger('click')

      expect(tooltip.text()).toMatchInlineSnapshot(`
      "Hide password"
    `)
    })
  })
})
