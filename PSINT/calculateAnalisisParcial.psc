Funcion nota_final <- calculateNote ( t1, t2, q, ep)
	Si t1 <= 0 o t2 <= 0 o q <= 0 o ep <= 0 Entonces
		nota_final<- 1100101 //01100101 significa E en codigo binario, esta es la clave de error que utilizaremos cuando algo ande mal en nuestro algoritmo
	SiNo
		//Primero obtenemos el promedio de los talleres y el quiz
		prometio_t_q <- (T1 + T2 + Q) / 3 // la dividimos entre 3 para hayar el promedio de 3 notas
		nota_t_q <- prometio_t_q * 0.3 // lo multiplcamos entre 0.3 para hayar el 30%
		nota_e_parcial <- ep * 0.7 // lo multiplicamos entre 0.7 para hayar el 70%
		nota_final <- nota_t_q + nota_e_parcial //Asignamos el resultado
	Fin Si
Fin Funcion
	
Algoritmo calculateAnalisisParcial
	Escribir "Escribe la nota del taller 1"
	leer t1
	Escribir "Escribe la nota del taller 2"
	leer t2
	Escribir "Escribe la nota del quiz"
	leer q
	Escribir "Escribe la nota de tu examen parcial"
	leer e_p
	
	nota_final <- calculateNote(t1, t2, q, e_p)
	
	Si nota_final == 1100101 Entonces
		escribir "[E] ERROR: HAS UTILIZADO NUMEROS IMPOSIBLES"
	SiNo
		Escribir "Tu nota final es de: ", nota_final
	Fin Si
FinAlgoritmo
