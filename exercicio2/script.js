numero1 = Number(prompt("Insira o primeiro número."))
numero2 = Number(prompt("Insira o segundo número."))
divisao1 = numero1%numero2
divisao2 = numero2%numero1

console.log(`número 1: ${numero1}, número 2: ${numero2}`)
console.log(`O primeiro numero é maior que o segundo?`, numero1 > numero2)
console.log(`O primeiro numero é igual ao segundo?`, numero1 === numero2)
console.log(`O primeiro numero é divisível pelo segundo?`, divisao1 === 0 )
console.log(`O segundo numero é divisível pelo primeiro?`, divisao2 === 0)