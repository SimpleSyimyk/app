let a1 = 0;
let b1 = 0;
function check(a, b){
    if (a1 != 0 || b1 != 0){
        document.getElementById(a + 'id' + b).style = 'border: 2px solid green; color: green;'
        a1 = a;
        b1 = b;
    }
    else {
        const container = document.getElementById(a1 + 'id' + b1).innerHTML;
        document.getElementById(a1 + 'id' + b1).innerHTML = document.getElementById(a + 'id' + b).innerHTML;
        document.getElementById(a + 'id' + b).innerHTML = container;
        a1 = 0
        b1 = 0
    }
};