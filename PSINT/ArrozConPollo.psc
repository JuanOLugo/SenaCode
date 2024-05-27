Algoritmo ArrozConPollo
	
	cantidadArrozPersona <- 0.25
	cantidadPolloPersona <- 0.2 
	cantidadCebollasPersona <- 0.1 
	cantidadAjosPersona <- 2 
	

	Escribir "Ingrese la cantidad de personas: "
	Leer cantidadPersonas
	
	cantidadArrozTotal <- cantidadArrozPersona * cantidadPersonas
	cantidadPolloTotal <- cantidadPolloPersona * cantidadPersonas
	cantidadCebollasTotal <- cantidadCebollasPersona * cantidadPersonas
	cantidadAjosTotal <- cantidadAjosPersona * cantidadPersonas
	
	Escribir "Para elaborar un arroz con pollo para ", cantidadPersonas, " personas, necesitarás:"
	Escribir "- ", cantidadArrozTotal, " kg de arroz"
	Escribir "- ", cantidadPolloTotal, " kg de pollo"
	Escribir "- ", cantidadCebollasTotal, " kg de cebollas"
	Escribir "- ", cantidadAjosTotal, " dientes de ajo"
	
FinAlgoritmo