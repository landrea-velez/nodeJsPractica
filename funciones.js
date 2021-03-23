function saludar (name){
    console.log(`Hola ${name}`);
}

function logSaludar(fn){
    fn();
}

function sumar (n1, n2){
    console.log(n1 + n2);
}

// funciones lambda
const greetMe = (name) => {
    console.log(`Hola ${name}`);
}

 // llamando a la funcion
saludar("Laura");
sumar(3, 5);
//las funciones son expresiones
logSaludar(saludar);
greetMe("Juan");