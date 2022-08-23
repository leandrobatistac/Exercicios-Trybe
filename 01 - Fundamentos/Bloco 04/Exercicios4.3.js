// Exercicio 1

let resultado = 1;

for (let index=1; index<=10; index +=1) {
    resultado = resultado * index;
}

console.log(resultado);

// Exercício 2

let word = 'trybe';
let invertida = '';

    for (let index = word.length-1; index >= 0; index--) {
        invertida += word[index];
    }

console.log(invertida);

// Exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maior = '';
let menor = '';

for (let index=0; index < array.length; index+= 1) {
    if (array[index].length > maior.length){
        maior = array[index];
    }
}

for (let index=0; index < array.length; index+= 1) {
    if (array[index].length < maior.length){
        menor = array[index];
    }
}

console.log(maior);
console.log(menor);

// Exercício 4

let maiorPrimo = 0;

for(let numero = 2; numero <=50; numero++){

    let primo = false;
    let contador = 0;

    for(let dividendo = 1; dividendo <= numero; dividendo++) {
        if(numero % dividendo == 0){
            contador=contador+1;
        }
    }

    if(contador <= 2){
        primo = true;
    }

    if(primo == true){
        if(numero > maiorPrimo){
            maiorPrimo = numero;
        }
    }
}

console.log(maiorPrimo);

// ------------------------- Exercícios Bonus -------------------------

// Exercício 1

let simbolo = '*';
let resultado = '';
let numero = 5;

    for(let index = 0; index < numero; index++){
        resultado += simbolo;
    }

    for(let index = 0; index < numero; index++){
        console.log(resultado);
    }

// Exercicio 2

let simbolo = '*';
let resultado = '';
let numero = 5;

    for(let index = 1; index <= numero; index++){
        resultado += simbolo;
        console.log(resultado);
    }
