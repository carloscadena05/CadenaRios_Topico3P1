function mostrarResultado() {
    console.log("resultado")                
    var p1, p2, p3, p4, p5;                
    if (document.getElementById('preg11').checked==true) {p1=1}
    else if (document.getElementById('preg13').checked==true) {p1=0.6}
    else if (document.getElementById('preg12').checked==true) {p1=0.3}
    else {p1=0}
    if (document.getElementById('preg24').checked==true) {p2=1}
    else if (document.getElementById('preg21').checked==true) {p2=0.6}
    else if (document.getElementById('preg22').checked==true) {p2=0.3}
    else {p1=0}
    if (document.getElementById('preg34').checked==true) {p3=1}
    else if (document.getElementById('preg31').checked==true) {p3=0.6}
    else if (document.getElementById('preg33').checked==true) {p3=0.3}
    else {p1=0}
    if (document.getElementById('preg43').checked==true) {p4=1}
    else if (document.getElementById('preg44').checked==true) {p4=0.6}
    else if (document.getElementById('preg42').checked==true) {p4=0.3}
    else {p1=0}
    if (document.getElementById('preg52').checked==true) {p5=1}
    else if (document.getElementById('preg53').checked==true) {p5=0.6}
    else if (document.getElementById('preg51').checked==true) {p5=0.3}
    else {p1=0}
    
    const nota=(p1+p2+p3+p4+p5)*20;

    if (nota>=0 && nota<20){
        recom='Parece que no eres muy propenso a tener éxito';
    } else if (nota>=20 && nota<40 ){
        recom='Sigue participando \n¡Vamos! \nPuede que no tengas éxito :c';
    } else if (nota>=40 && nota<60){
        recom='Por poco pasas de la mitad \n¡Vamos! Cambia tus habitos y mentalidad';
    } else if (nota>=60 && nota<80){
        recom='Casi \nEres propenso a tener éxito, solo debes corregir algunas conductas.';
    } else if (nota>=80 && nota<100){
        recom='¡Por poco lo logras!  \nSolo es cuestión de corregir algunas cosas.';
    } else if (nota==100){
        recom='¡Felicidades! \nEres muy propenso a ser una persona exitosa';
    } else {
        recom='Suerte para la próxima'
    }

    alert('Tu puntaje fue: ' + nota + '\n' + recom);


}