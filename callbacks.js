function calcular(n1, n2, operacion){
    return operacion(n1, n2);
}

// se almacena en operacion
function add(n1, n2){
return n1 + n2;
}

const result = calcular(100, 600, add);

console.log(result);