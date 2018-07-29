import numeral from 'numeral'

export default {
  $currency (number) {
    return numeral(number).format('0,0.00')
  }
}
