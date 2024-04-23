
const ordenarperrosGatos = (ordenamiento) => {
    const perros = ordenamiento.filter((item) => item === '🐶')
    const gatos = ordenamiento.filter((item) => item === '🐱')
    return perros.concat(gatos)
    
}
console.log("el ordenamiento son primero perros y despues gatos orden")
console.log(ordenarperrosGatos(["🐶","🐱","🐶","🐱","🐱","🐶","🐶"]))
console.log(('perros'));
console.log(('gatos'));



const reversoAnimales = (log) => {
  const strArr = log.split(" ");
  const salida = strArr.map(( perros) => {
    if (!perros.includes(",")) {
      return [...perros].reverse().join("");
    } else {
      let indice = perros.indexOf(",");
      let gatos = perros.substring(0, indice);

      return [...gatos].reverse().join("");
      
    }
  });
  return salida.join("");
};
console.log("el ordenamiento adverso primero gatos y despues perros ")
console.log(reversoAnimales('gatos'));
console.log(reversoAnimales('perros'));





