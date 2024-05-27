Algoritmo calcular_años_duplicar_capital
	Escribir "Ingrese el capital inicial (C):"
	Leer C
	Escribir "Ingrese el tipo de interés anual (R):"
	Leer R
	
	// Convertir el tipo de interés a decimal
	R = R / 100
	
	// Fórmula para calcular el número de años
	años <- ln(2) / ln(1 + R)
	
	Escribir "El capital ", C, " se doblará al término de ", trunc(años), " años con un tipo de interés anual de ", R*100, "%."
FinAlgoritmo
