<template lang="pug">
  v-container
    v-layout(wrap)
      v-flex(xs12)
        h2.text-xs-center {{ title }}
      v-flex(xs6 md3 offset-md3)
        h3 Total Income
      v-flex(xs6 md3)
        h3.green--text.text-xs-right {{ $currency(totalIncome) }}
      v-flex(xs6 md3 offset-md3)
        h3 Total Expense
      v-flex(xs6 md3)
        h3.red--text.text-xs-right {{ $currency(totalExpense) }}
      v-flex(xs6 md3 offset-md3)
        h3 
      v-flex(xs6 md3)
        h3.text-xs-right(:class="{ 'green--text': totalSummary >= 0, 'red--text': totalSummary <= 0 }")
          | {{ $currency(totalSummary) }} ({{ totalPercent }}%)
      v-flex(xs12 md6)
        v-progress-linear(background-color="red darken-3" color="green darken-3" :value="totalPercent")
      v-flex.border-bottom.mt-2.mb-2(xs12)
</template>

<script>
  export default {
    props: ['title', 'data'],
    data () {
      return {
        totalIncome: 0,
        totalExpense: 0,
        totalSummary: 0,
        totalPercent: 0
      }
    },
    mounted () {
      const { getters } = this.$store
      this.totalIncome = getters.filterIncome(this.data) 
      this.totalExpense = getters.filterExpense(this.data)
      
      const percent = ((this.totalIncome + this.totalExpense) / this.totalIncome) * 100
      this.totalSummary = this.totalIncome + this.totalExpense
      this.totalPercent = percent.toFixed(2)
    }
  }
</script>
