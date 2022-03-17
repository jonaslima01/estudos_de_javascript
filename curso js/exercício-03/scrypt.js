function contagem(){
    var msg=window.document.getElementById('tag2');
    var tn1=window.document.getElementById('txtn1');
    var tn2=window.document.getElementById('txtn2');
    var tn3=window.document.getElementById('txtn3');
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var n3 = Number(tn3.value);
    var emote = String.fromCodePoint('0x1F449');
    var emotef = String.fromCodePoint('0x1F3C1');
    var res = ''
    if(n3 == 0){   
        window.alert('Passo inválido Considerando Passo = 1');
        n3=1;
    }if(n1<n2){
    while(n1<=n2){
            if(n1+n3<=n2){
            res += n1+ emote;
            n1+=n3;
            }
            else{
                res += n1+ emotef;
                n1+=n3;
            }
        }
    }else if(n1>n2){
        while(n1>=n2){
                if(n1-n3>=n2){
                res += n1+ emote;
                n1-=n3;
                }
                else{
                    res += n1+ emotef;
                    n1-=n3;
                }
            }
        }

    msg.innerHTML = `<p>Contando:<br>${res}</p>`;
}
