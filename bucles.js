const frutas = ['manzana', 'melon', 'piña', 'uva'];

for(let i=0; i < frutas.length; i++){
    console.log(frutas[i]);
}

for(const fruta of frutas){
    console.log(fruta);
}

const people = [{name: "Laura"}, {name: "Jorge"}];

for(const person in people){
    console.log(people[person].name);
}