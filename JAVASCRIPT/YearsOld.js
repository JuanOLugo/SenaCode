const yearsProgramJson = {
  edades: [],
  menoresDeEdad: [],
  mayoresDeEdad: [],
  edadMODA: null,
  mayorEdad: null,
  menorEdad: null,
  cantidadMenores: null,
  cantidadMayores: null,
};

for (let i = 0; i < 10; i++) {
  let edad = prompt("Ingrese su edad: ");
  edad = Number(edad);
  if (isNaN(edad)) {
    i--;
    alert("INGRESA UN NUMERO");
  } else if (edad > 120 || edad < 1) {
    i--;
    alert("ERROR INGRESE OTRA EDAD");
  } else yearsProgramJson.edades.push(edad);
}
function agregarEdad(edad) {
  if (edad <= 0 || edad >= 120)
    return "Error: La edad ingresada no es correcta";
  if (edades.length > 10) return "Limite de edad alcanzado:", edades.length;
  edades.push(edad);
}

function valorMasRepetido(arr) {
  const contador = {};
  for (let i = 0; i < arr.length; i++) {
    if (contador[arr[i]]) {
      contador[arr[i]]++;
    } else {
      contador[arr[i]] = 1;
    }
  }

  const entradas = Object.entries(contador);
  entradas.sort((a, b) => b[1] - a[1]);
  return Number(entradas[0][0]);
}

for (let i = 0; i < yearsProgramJson.edades.length; i++) {
  const edades = yearsProgramJson.edades[i];
  if (edades >= 60) yearsProgramJson.mayoresDeEdad.push(edades);
  if (edades <= 60 && edades > 0) yearsProgramJson.menoresDeEdad.push(edades);
}

const EdadMayor = Math.max(...yearsProgramJson.edades);
const edadMenor = Math.min(...yearsProgramJson.edades);
yearsProgramJson.menorEdad = edadMenor;
yearsProgramJson.mayorEdad = EdadMayor;
yearsProgramJson.cantidadMayores = yearsProgramJson.mayoresDeEdad.length;
yearsProgramJson.cantidadMenores = yearsProgramJson.menoresDeEdad.length;
yearsProgramJson.edadMODA = valorMasRepetido(yearsProgramJson.edades);

console.log(yearsProgramJson);
