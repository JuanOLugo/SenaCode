//Usa Quokka para visualizar los console.log en visual
//ctrl+shift+p y buscas quokka: start on current file

class Mathe {
  triangulo({ a = null, b = null, c = null, h = null }) {
    let perimetroTotal;
    let areaTotal;
    if (h) return (areaTotal = (b * h) / 2);
    else return (perimetroTotal = a + b + c);
  }

  cuadradoOne({ a = null, b = null, perimetro = false, area = false }) {
    let perimetroTotal;
    let areaTotal;
    if (!area && !perimetro)
      return "[x] Error: necesitas al menos especificar que deseas hacer";
    if (perimetro) return (areaTotal = b * a);
    if (area) return (perimetroTotal = 2 * (b + a));
  }

  cuadradoTwo({ a = null, perimetro = false, area = false }) {
    let perimetroTotal;
    let areaTotal;
    if (!area && !perimetro)
      return "[x] Error: necesitas al menos especificar que deseas hacer";
    if (perimetro) return areaTotal = (a ** 2);
    if (area) return perimetroTotal = 4 * a;
  }

  circulo({ r = null, perimetro = false, area = false }) {
    let perimetroTotal;
    let areaTotal;
    if (!area && !perimetro)
      return "[x] Error: necesitas al menos especificar que deseas hacer";
    if (perimetro) return areaTotal = (3.14 * r **2);
    if (area) return perimetroTotal = 2 * 3.14 * r**2;
  }
}

//Llamamos a la clase
const Mate = new Mathe();

//Prueba de funciones

//Triangulo
const myTotalAreaForTriangulo = Mate.triangulo({ b: 100, h: 15 });
const myTotalPerimetroForTriangulo = Mate.triangulo({
  a: 10,
  b: 15,
  c: 10,
});

console.log(myTotalAreaForTriangulo);
console.log(myTotalPerimetroForTriangulo);

//Cuadrado 1
const myTotalAreaForCuadrado = Mate.cuadradoOne({ b: 100, a: 15, area: true });
const myTotalPerimetroForCuadrado = Mate.cuadradoOne({
  a: 10,
  b: 15,
  perimetro: true,
});

console.log(myTotalAreaForCuadrado);
console.log(myTotalPerimetroForCuadrado);


//Cuadrado 2
const myTotalAreaForCuadradoTwo = Mate.cuadradoTwo({ a: 10, area: true });
const myTotalPerimetroForCuadradoTwo = Mate.cuadradoTwo({
  a: 10,
  perimetro: true,
});

console.log(myTotalAreaForCuadradoTwo);
console.log(myTotalPerimetroForCuadradoTwo);

const myTotalAreaForCirculo = Mate.circulo({ r: 10, area: true });
const myTotalPerimetroForCirculo = Mate.circulo({
  r: 10,
  perimetro: true,
});

console.log(myTotalAreaForCirculo);
console.log(myTotalPerimetroForCirculo);
