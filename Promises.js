//asincronia
const promise = new Promise(executor);

function executor (resolve, reject){
    //si funciona
    resolve();

    //si falla
    reject();
}
