
var select = document.getElementById('sel');
var num = document.getElementById('txtn');
var txt = document.getElementById('res')
var valores = []; 
function isNumero(n){
    if(Number(n )>= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}
function inselect(n,s){
    if(s.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inselect(num.value, valores)){
        valores.push(Number(num.value));
        var item = document.createElement('option');
        item.text = `valor ${num.value} adicionado`
        select.appendChild(item)
        txt.innerHTML = ""
    }else{
        window.alert("Valor inválido ou já encontrado na lista.")
    }
num.value = ''
num.focus();
}
function finalizar(){
    if(valores.length==0){
        window.alert("Adicione valores antes de finalizar.")
    }else{
        valores.sort();
        let primeiro = valores[0]
        let ultimo = valores[valores.length-1];
        let soma = 0;
        let média = 0;
            for(let i in valores){
                soma += valores[i];
                média += valores[i]/valores.length
            }
        txt.innerHTML = `Ao todo, temos ${valores.length} Números Cadastrados.`
        txt.innerHTML += `<br>O maior valor informado foi ${primeiro}.`
        txt.innerHTML += `<br>O maior valor informado foi ${ultimo}.`
        txt.innerHTML += `<br>Somando todos os valores, temos ${soma}.`
        txt.innerHTML += `<br>A média dos valores digitados é ${média}.`
    }
}
function zerar(){
    valores=[]
    txt.innerHTML = ""
    select.options.length = 0;
}