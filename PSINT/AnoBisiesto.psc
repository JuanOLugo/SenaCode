Funcion detectYear( year )
    Si year MOD 400 = 0 Entonces // Nos preguntamos si el residuo de la division es 0 
        Imprimir "El a�o ", year, " es bisiesto"
    Sino
        Si year MOD 100 = 0 Entonces
            Imprimir "El a�o ", year, " no es bisiesto" 
        Sino
            Si year MOD 4 = 0 Entonces
                Imprimir "El a�o ", year, " es bisiesto"
            Sino
                Imprimir "El a�o ", year, " no es bisiesto"
            FinSi
        FinSi
    FinSi
Fin Funcion

Algoritmo AnoBisiesto
	escribir "Escribe el a�o que quieres verificar"
	leer year
	detectYear(year)
FinAlgoritmo