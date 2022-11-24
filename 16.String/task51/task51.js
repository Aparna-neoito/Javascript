function extractCurrencyValue(str) {
      return str.slice(1)
}
let rupees=extractCurrencyValue('$120');
console.log(rupees);
