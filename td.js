function switchEx1 (variable){
	switch(variable){
		case 1 :
			document.getElementById("js").innerHTML = "1";
		break;

		case 2 :
			document.getElementById("js").innerHTML = "2";
		break;

		case 3 :
			document.getElementById("js").innerHTML = "3";
		break;

		default:
			document.getElementById("js").innerHTML = "Erreur, la variable n'est pas comprise entre 1 et 3";
	}
}

function boucle10 (){
	var i;
	document.getElementById("js").innerHTML += "<br>"; //innerHTML = innerHTML + "<br>";
	for(i = 0; i < 10; i++){
		document.getElementById("js").innerHTML += "<br>" + i;
	}
}

function sqr(nb){
	return nb*nb;
}

function comp100(nb){
	if(nb > 100){
		document.getElementById("js").innerHTML += "<br><br>Le nombre " + nb + " est supérieur à 100";
	}
	else if (nb < 100){
		document.getElementById("js").innerHTML += "<br><br>Le nombre " + nb + " est inférieur à 100";
	}
	else{
		document.getElementById("js").innerHTML += "<br><br>Le nombre " + nb + " est égal à 100";
	}
}

switchEx1(2);	
boucle10();
document.getElementById("js").innerHTML += "<br><br>" + sqr(10);
comp100(10);