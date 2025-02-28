type Numeros = number;

const multiplicar = (a: Numeros, b: Numeros): number => {
    return a * b;
};

type Nome = string;

const saudar = (nome: Nome): string => {
    return `Olá ${nome}`;
};

console.log(multiplicar(5, 3));
console.log(saudar("Christopher"));
