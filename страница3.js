let k = 0;
let l = 0;
let m = 0;
let n = 0;
let o = 0;
let p = 0;
document.getElementById("i1").addEventListener("click", () => {
    k++;
    if (k % 2 == 1)
    {
        document.getElementById("i1").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("p1").style.display = "block";
    }
    else 
    {
        document.getElementById("i1").style.backgroundColor = "red";
        document.getElementById("p1").style.display = "none";
    }
})
document.getElementById("i2").addEventListener("click", () => {
    l++;
    if (l % 2 == 1) 
    {
        document.getElementById("i2").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("p2").style.display = "block";
    }
    else 
    {
        document.getElementById("i2").style.backgroundColor = "red";
        document.getElementById("p2").style.display = "none";
    }
})
document.getElementById("i3").addEventListener("click", () => {
    m++;
    if (m % 2 == 1) 
    {
        document.getElementById("i3").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("p3").style.display = "block";
    }
    else 
    {
        document.getElementById("i3").style.backgroundColor = "red";
        document.getElementById("p3").style.display = "none";
    }
})
document.getElementById("i4").addEventListener("click", () => {
    n++;
    if (n % 2 == 1) 
    {
        document.getElementById("i4").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("p4").style.display = "block";
    }
    else 
    {
        document.getElementById("i4").style.backgroundColor = "red";
        document.getElementById("p4").style.display = "none";
    }
})
document.getElementById("i5").addEventListener("click", () => {
    o++;
    if (o % 2 == 1) 
    {
        document.getElementById("i5").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("p5").style.display = "block";
    }
    else 
    {
        document.getElementById("i5").style.backgroundColor = "red";
        document.getElementById("p5").style.display = "none";
    }
})
document.getElementById("i6").addEventListener("click", () => {
    p++;
    if (p % 2 == 1) 
    {
        document.getElementById("i6").style.backgroundColor = "rgb(80, 80, 80)";
        document.getElementById("p6").style.display = "block";
    }
    else 
    {
        document.getElementById("i6").style.backgroundColor = "red";
        document.getElementById("p6").style.display = "none";
    }
})