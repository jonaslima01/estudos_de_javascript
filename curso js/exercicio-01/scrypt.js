var intervald = window.setInterval(() => {carregar()},1000);
function carregar(){
    var msg = window.document.getElementById('msg2');
    var img = window.document.getElementById('imagem')
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    var mtn = window.document.getElementById('msg1');
    msg.innerHTML = `Agora são ${hora} Horas, ${min} minutos e ${seg} segundos.`
    if(hora>=0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
        mtn.innerHTML = '<strong>Bom Dia!</strong>'
    }
    else if(hora>=12 && hora <= 18){
        img.src = 'tarde.png'
        document.body.style.background = 'rgb(200, 88, 40)';
        mtn.innerHTML = '<strong>Boa Tarde!</strong>'
    }
    else {
        img.src = 'noite.png'
        document.body.style.background = 'rgb(70, 38, 75)';
        mtn.innerHTML = '<strong>Boa Noite!</strong>'
    }
}