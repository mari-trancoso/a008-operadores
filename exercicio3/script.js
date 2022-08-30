const operacao1 = 5 > 20 && 5 === 2
const operacao2 = 5 === 5 || typeof Number(5) === typeof "5"
const operacao3 = !(20 > 50)
const operacao4 = !(20 > 50 || 50 > 60)

console.log(`5 é maior que 20 e também é menor que 2?`, operacao1)
console.log(`5 é igual a 5 ou é igual a “5”?`, operacao2)
console.log(`negação de (vinte é maior que cinquenta)?`, operacao3)
console.log(`negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)? `, operacao4)