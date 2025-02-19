Vue.component('connect-form', {
  data() {
    return {
      token: '',
      channel: ''
    }
  },
  methods: {
    connect() {
      this.$emit('connect-slack', this.token, this.channel)
    }
  },
  render(h) {
    return h('div', { 
      staticClass: 'bg-gray-900 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0'
    }, [
      h('h2', { 
        staticClass: 'text-white text-lg font-medium title-font mb-5'
      }, ['Connect to Slack']),
      h('div', { 
        staticClass: 'relative mb-4'
      }, [
        h('label', {
          staticClass: 'leading-7 text-sm text-gray-400',
          attrs: { for: 'token' }
        }, ['Token']),
        h('input', {
          staticClass: 'w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out',
          attrs: {
            type: 'text',
            id: 'token',
            name: 'token'
          },
          domProps: {
            value: this.token
          },
          on: {
            input: (e) => this.token = e.target.value
          }
        })
      ]),
      h('div', { 
        staticClass: 'relative mb-4'
      }, [
        h('label', {
          staticClass: 'leading-7 text-sm text-gray-400',
          attrs: { for: 'channel' }
        }, ['Channel']),
        h('input', {
          staticClass: 'w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out',
          attrs: {
            type: 'text',
            id: 'channel',
            name: 'channel'
          },
          domProps: {
            value: this.channel
          },
          on: {
            input: (e) => this.channel = e.target.value
          }
        })
      ]),
      h('button', {
        staticClass: 'text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg',
        on: {
          click: this.connect
        }
      }, ['Connect'])
    ])
  }
})