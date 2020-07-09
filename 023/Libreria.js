//Retorna true si el número es palíndromo
function EsPalindromo(num){
	if (num==InvierteNumero(num)) return true;
	return false;
}

//Retorna las dos últimas cifras del número
function retornadosultimascifras(num){
	return num%100;
}

//Dice cuántas cifras de determinado número hay en el número enviado
function cifrashalladas(num, cifra){
	var acumula = 0;
	while (num!=0){
		if ( num%10 == cifra) acumula++;
		num = Math.floor(num/10);
	}
	return acumula;
}

//Invierte un número
function InvierteNumero(num){
	var multiplica = Math.pow(10, TotalCifras(num)-1);
	var acumula = 0;
	while(num!=0){
		cifra = num%10;
		acumula += cifra * multiplica;
		multiplica /= 10;
		num = Math.floor(num/10);
	}
	return acumula;
}

//Retorna la primera cifra de un número
function PrimeraCifra(num){
	var primera = 0;
	while(num!=0){
		primera = num%10;
		num = Math.floor(num/10);
	}
	return primera;
}

//Retorna el número de cifras de un número
function TotalCifras(num){
	var cuenta = 0;
	while(num!=0){
		cuenta++;
		num = Math.floor(num/10);
	}
	return cuenta;
}

//Retorna true si un número es impar
function EsImpar(num){
	if (num%2==1) return true;
	return false;
}

//Retorna true si un número es par
function EsPar(num){
	if (num%2==0) return true;
	return false;
}

//Retorna la sumatoria de las cifras de un número
function SumaCifras(num){
	var acum = 0;
	while(num!=0){
		var cifra = num%10;
		acum += cifra;
		num = Math.floor(num/10);
	}
	return acum;
}

//Retorna la sumatoria de las cifras pares de un número
function SumaCifrasPares(num){
	var acum = 0;
	while(num!=0){
		var cifra = num%10;
		if (cifra%2==0)	acum += cifra;
		num = Math.floor(num/10);
	}
	return acum;
}	

//Retorna la sumatoria de las cifras impares de un número
function SumaCifrasImpares(num){
	var acum = 0;
	while(num!=0){
		var cifra = num%10;
		if (cifra%2!=0)	acum += cifra;
		num = Math.floor(num/10);
	}
	return acum;
}

//Retorna el producto de las cifras de un número
function MultiplicaCifras(num){
	var acum = 1;
	while(num!=0){
		var cifra = num%10;
		acum *= cifra;
		num = Math.floor(num/10);
	}
	return acum;
}

//Retorna el producto de las cifras impares de un número
function MultiplicaCifrasImpares(num){
	var acum = 1;
	while(num!=0){
		var cifra = num%10;
		if (cifra%2!=0) acum *= cifra;
		num = Math.floor(num/10);
	}
	return acum;
}

//Retorna el producto de las cifras pares de un número
function MultiplicaCifrasPares(num){
	var acum = 1;
	while(num!=0){
		var cifra = num%10;
		if (cifra%2==0) acum *= cifra;
		num = Math.floor(num/10);
	}
	return acum;
}

//Retorna la antepenúltima cifra de un número entero
function AntepenultimaCifra(num){
	return Math.floor(num/100)%10;
}

//Retorna la penúltima cifra de un número entero
function PenultimaCifra(num){
	return Math.floor(num/10)%10;
}

//Retorna la última cifra de un número entero
function UltimaCifra(num){
	return num%10;
}

//Retorna true si el número enviado por parámetro es primo
function EsPrimo(num){
	if (num<=1) return false;
	if (num==2) return true;
	if (num%2==0) return false;
	for (var divide = 3; divide <= Math.sqrt(num); divide+=2)
		if (num%divide == 0) return false;
	return true;
}
	
//Retorna true si todas las cifras son pares
function TodasCifrasPares(num){
	while(num!=0){
		var cifra = num%10;
		if (cifra%2!=0) return false;
		num = Math.floor(num/10);
	}
	return true;
}
	
//Retorna true si todas las cifras son impares
function TodasCifrasImpares(num){
	if (num==0) return false;
	while(num!=0){
		var cifra = num%10;
		if (cifra%2==0) return false;
		num = Math.floor(num/10);
	}
	return true;
}
	
//Retorna el número de cifras pares
function TotalCifrasPares(num){
	var acum = 0;
	while(num!=0){
		var cifra = num%10;
		if (cifra%2==0) acum++;
		num = Math.floor(num/10);
	}
	return acum;
}
	
//Retorna el número de cifras impares
function TotalCifrasImpares(num){
	var acum = 0;
	while(num!=0){
		var cifra = num%10;
		if (cifra%2!=0) acum++;
		num = Math.floor(num/10);
	}
	return acum;
}

//Retorna la cifra más alta
function LaCifraMasAlta(num){
  var cifra = 0;
	while (num!=0){
		if ( num%10 > cifra) cifra = num%10;
		num = Math.floor(num/10);
	}
	return cifra;
}

//Retorna la cifra más baja
function LaCifraMasBaja(num){
  var cifra = 9;
	while (num!=0){
		if ( num%10 < cifra) cifra = num%10;
		num = Math.floor(num/10);
	}
	return cifra;
}

//Retorna true si num tiene sólo cifras menores o iguales de cifra
function SoloCifrasMenorIgual(num, cifra){
	while (num!=0){
		if ( num%10 > cifra) return false;
		num = Math.floor(num/10);
	}
	return true;
}

//Retorna true si num tiene sólo cifras mayores o iguales de cifra
function SoloCifrasMayorIgual(num, cifra){
	while (num!=0){
		if ( num%10 < cifra) return false;
		num = Math.floor(num/10);
	}
	return true;
}

//Retorna true si todas las cifras son distintas
function DistintasCifras(num){
	for (var cifra=0; cifra<=9; cifra++){
		var numero = num;
		var cuenta = 0;
		while (numero!=0){
			if (numero%10 == cifra) cuenta++;
			if (cuenta > 1) return false;
			numero = Math.floor(numero/10);
		} 
	}	
	return true;
}

//Retorna si todas las cifras pares son distintas
function DistintasCifrasPares(num){
	for (var cifra=0; cifra<=8; cifra+=2){
		var numero = num;
		var cuenta = 0;
		while (numero!=0){
			if (numero%10 == cifra) cuenta++;
			if (cuenta > 1) return false;
			numero = Math.floor(numero/10);
		} 
	}	
	return true;
}

//Retorna si todas las cifras impares son distintas
function DistintasCifrasImPares(num){
	for (var cifra=1; cifra<=9; cifra+=2){
		var numero = num;
		var cuenta = 0;
		while (numero!=0){
			if (numero%10 == cifra) cuenta++;
			if (cuenta > 1) return false;
			numero = Math.floor(numero/10);
		} 
	}	
	return true;
}

//Elevar al cuadrado cada cifra y retornar la suma
function sumacifrascuadrado(num){
	var acumula = 0;
	while (num!=0){
		acumula+= (num%10)*(num%10);
		num = Math.floor(num/10);
	}
	return acumula;
}
