Funcion velocidad_promedio <- calcular_velocidad ( horas,minutos,distancia_recorrida )
	Si horas <= 0  y minutos <= 0 o distancia_recorrida == 0 Entonces
		velocidad_promedio<- 01100101 //Asignamos E en binario para indicar un error
	SiNo
		calculate_time <- horas + (minutos / 60) //hacemos la operacion para obtener las horas exactas
		velocidad_promedio<- distancia_recorrida/calculate_time //dividimos la distancia recorrida entre las horas
	Fin Si
	
Fin Funcion

Algoritmo maraton_calculate
	//Automatiza el codigo
	//escribir "Cuantas horas duraste"
	//Leer  horas
	//escribir "Con cuantos minutos"
	//leer minutos
	//escribir "Cuanta distancia recorriste"
	//leer distancia_recorrida
	//velocidad_promedio<-calcular_velocidad(horas,minutos,distancia_recorrida)
	//Problema resuelto
	velocidad_promedio<-calcular_velocidad(2,25,42.195)
	Si velocidad_promedio == 01100101 Entonces
		escribir "[X] ERROR AL EJECUTAR EL PROGRAMA"
	SiNo
		escribir "Tu velocidad promedio es de: ",trunc( velocidad_promedio), "kmh"
	Fin Si
	
FinAlgoritmo
