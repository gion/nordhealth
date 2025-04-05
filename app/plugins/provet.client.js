export default defineNuxtPlugin({
  name: 'provet-plugin',
  async setup() {
    import('@provetcloud/css')
    import('@provetcloud/web-components')
  },
})
