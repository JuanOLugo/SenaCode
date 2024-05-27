Algoritmo verificar_nums
	definir nums Como Entero // definimos nums para que solo reciba enteros
	Dimension nums[20] // asignamos que la dimendision/array solo puede tener 20 valores
	Para  i <- 1 Hasta 20 hacer
		escribir "El numero ", i
		leer nums[i] //añadimos los numero que queremos
	Fin Para
	//recorremos los numeros que sean menor a 25
	Para i <- 1 Hasta 20  Hacer
		Si nums[i] < 25 Entonces 
			escribir "* ", nums[i]
		Fin Si
	Fin Para

FinAlgoritmo
