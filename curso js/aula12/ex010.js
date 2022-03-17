var agora = new Date();
var hora = agora.getHours();
console.log(`Agrora são exatamente ${hora} Horas.`);
if(hora < 12){
    console.log("bom dia!");
}
else if(hora <= 18){
    console.log("boa tarde!");
}
else if(hora <= 24){
    console.log("Boa noite!");
}
else{
    console.log("Boa madrugada");
}
