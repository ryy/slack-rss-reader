new Vue({
  el: '#app',
  data() {
    return {
      articles: [],
      connected: true,
      openForm: false,
      token: null,
      channel: null,
    }
  },
  methods: {
    filter: function (articles) {
      const result = articles.filter(article => article.attachments!= null && article.type == 'message' && article.subtype == 'bot_message');
      return result
    },
    connect: function(token, channel) {
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
    // https://stackoverflow.com/questions/44493426/use-chrome-extension-api-within-vue-js-component
    this.token = localStorage.getItem("token");
    this.channel = localStorage.getItem("channel");

    axios
      .get(`https://slack.com/api/conversations.history?token=${this.token}&channel=${this.channel}`)
      .then(response => {
        this.connected = response.data.ok
        if (this.connected) {
          this.articles = response.data.messages
        }
      })
  },
})