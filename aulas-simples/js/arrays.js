let a = [4,8,3,8,7,1]
console.log(`O vetor A tem ${a.length} números e os valores são: ${a}`)

a.push(6)
console.log(`Foi adicionado o número 6 ao vetor A, os dados agora são: ${a}`)

a.sort()
console.log(`O vetor A foi ordenado e agora está dessa forma: ${a}\n`)

console.log(`[${a}]`)
for (let index = 0; index < a.length; index++) {
    console.log(`O valor da posição ${index} é ${a[index]}`)
}

console.log("\n")

for (let pos in a) {
    console.log(`O valor da posição ${pos} é ${a[pos]}`)
}

console.log("\n")

let posicao = a.indexOf(5)
if (posicao != -1) {
    console.log(`O valor está na posição ${posicao}.`)
} else {
    console.log("O valor não foi encontrado!")
}