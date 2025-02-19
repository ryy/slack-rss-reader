new Vue({
  render(h) {
    return h('div', [
      h('nav', { staticClass: 'flex items-center justify-between flex-wrap bg-gray-900 p-6' }, [
        h('div', { staticClass: 'flex items-center flex-shrink-0 text-white mr-6' }, [
          h('svg', {
            staticClass: 'fill-current h-8 w-8 mr-2',
            attrs: {
              xmlns: 'http://www.w3.org/2000/svg',
              width: '54',
              height: '54',
              viewBox: '0 0 24 24'
            }
          }, [
            h('path', {
              attrs: {
                d: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.29 14.646c0 .748-.607 1.354-1.354 1.354-.749 0-1.356-.606-1.356-1.354 0-.747.607-1.353 1.355-1.353.748.001 1.355.606 1.355 1.353zm-2.71-5.237v2.004c2.521.025 4.567 2.068 4.592 4.587h2.008c-.026-3.629-2.965-6.566-6.6-6.591zm0-1.404c4.407.02 7.98 3.581 7.993 7.995h2.007c-.012-5.513-4.48-9.981-10-10v2.005z'
              }
            })
          ]),
          h('span', { staticClass: 'font-semibold text-sm tracking-tight' }, ['Slack RSS Reader'])
        ]),
        h('div', { staticClass: 'w-full block flex-grow lg:flex lg:items-center lg:w-auto' }, [
          h('div', { staticClass: 'text-sm lg:flex-grow' }),
          !this.connected
            ? h('div', [
                h('a', {
                  staticClass: 'text-red-800 inline-block text-xs px-4 py-2 leading-none mt-4 lg:mt-0',
                  attrs: { href: '#' },
                  on: { click: this.toggleForm }
                }, ['unconnected'])
              ])
            : h('div', [
                h('a', {
                  staticClass: 'text-green-800 inline-block text-xs px-4 py-2 leading-none mt-4 lg:mt-0',
                  attrs: { href: '#' },
                  on: { click: this.toggleForm }
                }, ['connected'])
              ])
        ])
      ]),
      h('section', [
        h('div', { staticClass: 'container-lg px-10 py-10 mx-auto' }, [
          this.openForm
            ? h('connect-form', {
                on: { 'connect-slack': this.connect }
              })
            : null,
          h('div', { staticClass: 'flex flex-wrap -m-4' },
            this.filteredArticles.map(article =>
              h('article-card', {
                key: article.id,
                props: { article }
              })
            )
          )
        ])
      ])
    ])
  },
  data() {
    return {
      articles: [],
      connected: true,
      openForm: false,
      token: null,
      channel: null,
    }
  },
  computed: {
    filteredArticles() {
      return this.articles.filter(article => 
        article.attachments != null && 
        article.type == 'message' && 
        article.subtype == 'bot_message'
      );
    }
  },
  methods: {
    toggleForm() {
      this.openForm = !this.openForm;
    },
    connect(token, channel) {
      localStorage.setItem("token", token)
      localStorage.setItem("channel", channel)

      axios
        .get(`https://slack.com/api/conversations.history?token=${token}&channel=${channel}`)
        .then(response => {
          if (response.data.ok) {
            this.connected = true
            alert("success!!")
            this.openForm = false
            this.articles = response.data.messages
          } else {
            this.connected = false
            alert("error!! \n" + response.data.error)
          }
        })
    }
  },
  mounted () {
    this.token = localStorage.getItem("token");
    this.channel = localStorage.getItem("channel");

    if (this.token && this.channel) {
      axios
        .get(`https://slack.com/api/conversations.history?token=${this.token}&channel=${this.channel}`)
        .then(response => {
          this.connected = response.data.ok
          if (this.connected) {
            this.articles = response.data.messages
          }
        })
    } else {
      this.connected = false
    }
  }
}).$mount('#app')