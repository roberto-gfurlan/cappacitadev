const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function numerosPares(array){
     return array.filter(num => num % 2 == 0 )

}

console.log(numerosPares(numero))