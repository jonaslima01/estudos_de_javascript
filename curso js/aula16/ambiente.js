var n = 3
function parimp(n){
    if(n%2 == 0){
        return 'par!'
    }else{
        return 'ímpar!'
    }
}
var res = parimp(n);
console.log(`o número ${n} é ${res}`)