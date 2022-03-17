function tabuada(){
    var tn1 = document.getElementById('txtn1');
    var select = document.getElementById('selection');
    var n1 = Number(tn1.value);
    select.innerHTML = ''
    for(var i = 1; i <= 10; i++){
        var item = document.createElement('option');
        item.text = `${n1} x ${i} = ${n1*i}`
        item.value = `tab${i}`
        select.appendChild(item)
    }
}