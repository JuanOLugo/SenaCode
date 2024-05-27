//Se crea una funcion que facilitara el codigo
Funcion calcularEdad ( añoActual, añoNacimiento )
	Si añoNacimiento > añoActual Entonces // Verificamos que el año de nacimeinto sea menor 
		escribir "[X] ESTA EDAD ES IMPOSIBLE"
	SiNo
		edad <- añoActual - añoNacimiento // Calculamos la edad
		Escribir "Su edad en el ", añoActual, " es: ", edad
	Fin Si
Fin Funcion

Algoritmo calculateEdad
	//Interaccion del usuario
	Escribir "Escriba su año de nacimiento"
	leer añoNacimiento 
	Escribir "Escriba el año actual en la que se encuentra"
	leer añoActual
	calcularEdad(añoActual, añoNacimiento) // Imbocamos la funcion
FinAlgoritmo
