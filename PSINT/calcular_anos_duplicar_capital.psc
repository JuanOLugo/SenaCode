Algoritmo calcular_a�os_duplicar_capital
	Escribir "Ingrese el capital inicial (C):"
	Leer C
	Escribir "Ingrese el tipo de inter�s anual (R):"
	Leer R
	
	// Convertir el tipo de inter�s a decimal
	R = R / 100
	
	// F�rmula para calcular el n�mero de a�os
	a�os <- ln(2) / ln(1 + R)
	
	Escribir "El capital ", C, " se doblar� al t�rmino de ", trunc(a�os), " a�os con un tipo de inter�s anual de ", R*100, "%."
FinAlgoritmo
