/**
 * Creando la insercion de multiples 
 * elementos numericos
 */
function insertion(list){
    // let sumalist = 0;
    // for (let i = 0; i < list.length; i++){
    //     sumalist += list[i]; 
    // }

    let sumalist = list.reduce(
        function (valorAcumulado = 0, nuevovalor){
            return valorAcumulado + nuevovalor;
        }
    );
    let csacos = list.length * 4;
    let result = sumalist -(csacos*.200);
    return result;
}

// function calcularMediaAritmetica(lista) {
//     // let sumaLista = 0;
//     // for (let i = 0; i < lista.length; i++) {
//     //   sumaLista = sumaLista + lista[i];
//     // }
  
//     const sumaLista = lista.reduce(
//       function (valorAcumulado = 0, nuevoElemento) {
//         return valorAcumulado + nuevoElemento;
//       }
//     );
  
//     const promedioLista = sumaLista / lista.length;
  
//     return promedioLista;
//   }