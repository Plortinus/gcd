import gcd from './gcd.js'

var app = new Vue({
  el: '#app',
  data: {
    x: 1,
    y: 2
  },
  computed: {
    z () {
      if (!this.x || !this.y) {
        return ''
      }
      return gcd(this.x, this.y)
    }
  }
})