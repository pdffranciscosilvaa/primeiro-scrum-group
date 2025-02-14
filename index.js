import Cubo from "./model/Cubo.js";

let aresta =  7

const cubo1 = new Cubo(aresta1)

let areaTotal = cubo1.calcularAreaTotal()
let volume = cubo1.calcularVolume()

console.log("A área total do cubo 1: ", areaTotal)
console.log("O volume total do cubo 1: ", volume)

let aresta2 = 8
const cubo2 =  new Cubo(aresta2)

areaTotal = cubo2.calcularAreaTotal()
volume = cubo2.calcularVolume()

console.log("A área total do cubo 2: ", areaTotal)
console.log("O volume total do cubo 2: ", volume)