function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById("txtano");
    var res = document.getElementById("res");
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('verifique os dados e tente novamente.');
    }
    else{
        var fsex = window.document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var gen = '';
        var img = document.createElement('img')
        img.setAttribute('id','imagem');
        img.style = "border-radius: 50%" 
        if(fsex[0].checked){
            gen = 'Homem'
            if(idade < 2){
                //ressem nascido
                img.setAttribute('src','bebem.png')
            } else if(idade < 10){
                //criança
                img.setAttribute('src','crim.png')
            } else if(idade < 18){
                //adolecente
                img.setAttribute('src','adom.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','adum.png')
            }else{
                //idoso
                img.setAttribute('src','idom.png')
            }
        } else if(fsex[1].checked){
            gen = 'Mulher'
            if(idade < 2){
                //ressem nascido
                img.setAttribute('src','bebef.png')
            } else if(idade < 10){
                //criança
                img.setAttribute('src','crif.png')
            } else if(idade < 18){
                //adolecente
                img.setAttribute('src','adof.png')
            } else if(idade < 50){
                //adulto
                img.setAttribute('src','aduf.png')
            }else{
                //idoso
                img.setAttribute('src','idof.png')
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`
        res.appendChild(img);
    }
}