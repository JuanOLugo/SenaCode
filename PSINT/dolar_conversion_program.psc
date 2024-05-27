Algoritmo dolar_conversion_program
	
	Repetir
		dolar_cost<-3887
		user_dolar_amount<- 0
		Escribir "Costo de dolar:", dolar_cost
		Leer  user_dolar_amount
		conversion<-user_dolar_amount * dolar_cost
		Escribir "$",conversion, " Pesos colombianos"
	Hasta Que user_dolar_amount == -99 
	
FinAlgoritmo
