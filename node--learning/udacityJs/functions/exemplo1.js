function reverseString(reverseMe) { // a funcao tem um parametro, a var reverseMe que sera usada para armazenar o argumento que nesse caso é a string 'Julia'
    var reversed = ""; // a função tem uma var chamada reverse, que uma hora vai conter a string final com todos os caracteres na ordem inversa
    for (var i = reverseMe.length -1; i>=0; i--) { //Depois ela passa o loop pela string reverseMe de trás para frente e add cada caractere nessa ordem a variavel reversed
    }
    return reversed; // ela retorna o resultado e podemos imprimir usando console.log
} // dessa maneira podemos usar e até reutilizar a função para outras strings apenas chamando-a pelo nome e passando uma string diferente por vez

console.log(reverseString("Julia"));

function laugh() {
    var laugh = "hahahahahahahahaha!";
    return laugh;
}
console.log(laugh());

