var nome = prompt("Qual o seu nome?");
var usuario = document.getElementById("usuario");
usuario.innerHTML = "Bem vindo, " + nome; 

var confirma = prompt("Deseja fazer a prova? \n 1-Sim \n 2-Não");

if(confirma == 1){
    var p1 = prompt("Quanto é 2+2? \n 1- 4 \n 2- 6 \n 3- 8" );

    if(p1 == 1){
    var certo = document.getElementById("certo1");
    certo.innerHTML = ("Resposta 1");

}
    else{
    var errado = document.getElementById("errado1");
    errado.innerHTML = ("Resposta1")
}

    var p2 = prompt("Quanto é 6*6? \n 1- 28 \n 2 -36 \n 3 -40" );

    if(p2 == 2){
    var certo = document.getElementById("certo2");
    certo.innerHTML = ("Resposta 2")
}
    else{
    var errado = document.getElementById("errado2");
    errado.innerHTML = ("Resposta 2")
}

    var p3 = prompt("Quanto é 5-3? \n 1- 2 \n 2- 6 \n 3- 3");

    if(p3 == 1){
    var certo = document.getElementById("certo3");
    certo.innerHTML = ("Resposta 3")
}
    else{
    var errado = document.getElementById("errado3");
    errado.innerHTML = ("Resposta 3")
}
}
else{
    alert("Tchau!!!!")
    
}


    


