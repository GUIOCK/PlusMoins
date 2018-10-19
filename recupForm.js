var infos = [];
var historique = new Array();
var pointer = 0;
var nbTentative = 0;
var nbAleatoire = hasard(1,100);


infos[0] = "";
infos[1] = 0;
//console.log(NbAleatoire);

function getForm()
{
    infos[0] = document.getElementById("pseudo").value;
    infos[1] = document.getElementById("nmbr").value;
    console.log(infos);
    nbTentative++;
    document.getElementById("js").innerHTML = compare(nbAleatoire,infos[1]);

}

function compare(nbRandom,number) {
     var strCompare;
    if (number < nbRandom) {
        strCompare = 'Le nombre à trouver est + Grand';
        console.log(infos[1] + "est plus grand a " + nbAleatoire);
    }else if (number > nbRandom) {
        strCompare = 'Le nombre à trouver est + Petit';
        console.log(infos[1] + "est plus petit" + nbAleatoire);
    }else{
        strCompare = 'Bonbon';
        console.log(infos[1] + "est égal à "+ nbAleatoire);
        log();  
    }
    return strCompare;
}

function hasard(Min,Max) { 
    return (Math.floor((Max-Min)*Math.random())+Min); 
} 

function reset() 
{
    nbAleatoire = hasard(1,100);
    nbTentative = 0;
}

function log()
{
    console.log(infos[0]);
    historique.unshift(infos[0],infos[1], nbTentative);
    console.log(historique);
    
    reset();
}

function tableau()
{
    var html;
    html = "<table>";
    html += "<tr><th>Pseudo</th><th>Nombre deviné</th><th>Nombre de coups</th></tr>";
    for(var i = 0; i < (historique.length / 3) && i < 5; i++){
        html += "<tr>";
        for(var j = 0; j < 3; j++){
            html += "<td>";
            html +=  historique[i + (j + i * 2)];
            html += "</td>";
        }
        html +="</tr>";
    }
    html += "</table>";
    console.log(html);
    document.getElementById("tab").innerHTML = html;
}
