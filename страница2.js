let k = 0;
function pam() {
    let a, b, c;
    a = document.getElementById("kvadrat");
    b = a.parentElement.clientWidth - 100;
    c = a.parentElement.clientHeight - 100;
    a.style.top = Math.floor(Math.random() * c) + "px";
    a.style.left = Math.floor(Math.random() * b) + "px";
    k++;
    if (k % 3 == 1) {
        a.style.backgroundColor = "blue";
    }
    else if (k % 3 == 2) {
        a.style.backgroundColor = "red";
    }
    else{
        a.style.backgroundColor = "white";   
    }
}