//Se crea una funcion que facilitara el codigo
Funcion calcularEdad ( a�oActual, a�oNacimiento )
	Si a�oNacimiento > a�oActual Entonces // Verificamos que el a�o de nacimeinto sea menor 
		escribir "[X] ESTA EDAD ES IMPOSIBLE"
	SiNo
		edad <- a�oActual - a�oNacimiento // Calculamos la edad
		Escribir "Su edad en el ", a�oActual, " es: ", edad
	Fin Si
Fin Funcion

Algoritmo calculateEdad
	//Interaccion del usuario
	Escribir "Escriba su a�o de nacimiento"
	leer a�oNacimiento 
	Escribir "Escriba el a�o actual en la que se encuentra"
	leer a�oActual
	calcularEdad(a�oActual, a�oNacimiento) // Imbocamos la funcion
FinAlgoritmo
