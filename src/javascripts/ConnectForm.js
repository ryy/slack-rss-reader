Vue.component('connect-form', {
  data: function () { return {
    token: localStorage.getItem("token"),
    channel: localStorage.getItem("channel"),
  }},
  mounted() {
  },
  template:
  '<div>' +
    '<div class="mb-4">' +
      '<label class="block text-gray-700 text-sm font-bold mb-2" for="token">Token</label>' +
      '<input v-model="token" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="token" type="text" placeholder="token">' +
    '</div>' +
    '<div class="mb-6">' +
      '<label class="block text-gray-700 text-sm font-bold mb-2" for="channel">Channel</label>' +
      '<input v-model="channel" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="channel" type="text" placeholder="channel">' +
      '<p class="text-gray-700 text-xs italic"><a href="https://gist.github.com/ryy/58605d2c8f786920519ee6ed57653699" target="_blank">How to connect</a></p>' +
    '</div>' +
    '<div class="text-right mb-6">' +
      '<a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 text-right" @click="connect">' +
        'Connect' +
      '</a>' +
    '</div>' +
  '</div>',
  methods: {
    connect() {
      this.$emit('connect-slack', this.token, this.channel)
    }
  }
});