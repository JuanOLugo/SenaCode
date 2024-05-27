Algoritmo PlanViaje
	
	// Datos de entrada
	Escribir "Ingrese la distancia desde su casa hasta el trabajo (en km): "
	Leer distancia
	Escribir "Ingrese la hora a la que debe estar en el trabajo (formato 24h): "
	Leer horaLlegada
	Escribir "Ingrese la velocidad promedio a la que planea viajar (en km/h): "
	Leer velocidad
	
	// Cálculos
	tiempoViaje <- distancia / velocidad
	tiempoViaje <- tiempoViaje * 60 
	tiempoPreparacion <- 30 
	tiempoTotal <- tiempoViaje + tiempoPreparacion
	horaInicio <- horaLlegada - trunc(tiempoTotal / 60) - 1
	
	// Salida
	Escribir "Para llegar a tiempo al trabajo, debes iniciar tu viaje a las ", horaInicio, ":00 horas."
	Escribir "El tiempo estimado de viaje es de ", tiempoViaje, " minutos."
	Escribir "Asegúrate de tener al menos ", tiempoPreparacion, " minutos adicionales para prepararte."
	
FinAlgoritmo
