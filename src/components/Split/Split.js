import { _setRate, _removeSplit, months } from '@/helpers'

export default {
  name: 'split',
  props: ['split'],
  data () {
    return {
      rate: +this.split.mark
    }
  },
  updated () {
    this.rate = +this.split.mark
  },
  methods: {
    async setRate (rate) {
      try {
        const res = await _setRate(rate, this.split.id, this.$store.state.token)
        if (res.data.success) {
          this.$store.commit('setRateToSplit', {rate, id: this.split.id})
        }
      } catch (e) {
        console.error(e)
      }
    },
    async removeSplit () {
      try {
        const res = await _removeSplit(this.split.id, this.$store.state.token)
        if (res.data.success) {
          this.$store.commit('removeSplit', this.split.id)
        }
      } catch (e) {
        console.log(e)
      }
    }
  },
  filters: {
    convertData (data) {
      const arr = data.split('/')
      const month = months[arr[0]]
      return arr[1] + ' ' + month + ' ' + arr[2]
    }
  }
}
