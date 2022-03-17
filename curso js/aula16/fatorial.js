function fatorial(n){
    if(n<=1){
        return 1;
    }else{
        n = n*fatorial(n-1)
        return n
    }
}
let res = fatorial(2)
console.log(res)
