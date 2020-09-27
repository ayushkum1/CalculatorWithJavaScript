document.getElementById("1").addEventListener("click", function(){
    one("1");
})

document.getElementById("2").addEventListener("click", function(){
    one("2");
})

document.getElementById("3").addEventListener("click", function(){
    one("3");
})

document.getElementById("4").addEventListener("click", function(){
    one("4");
})

document.getElementById("5").addEventListener("click", function(){
    one("5");
})

document.getElementById("6").addEventListener("click", function(){
    one("6");
})

document.getElementById("7").addEventListener("click", function(){
    one("7");
})

document.getElementById("8").addEventListener("click", function(){
    one("8");
})

document.getElementById("9").addEventListener("click", function(){
    one("9");
})


document.getElementById("0").addEventListener("click", function(){
    one("0");
})

document.getElementById("plus").addEventListener("click", function(){
    one("+");
})

document.getElementById("minus").addEventListener("click", function(){
    one("-");
})

document.getElementById("mult").addEventListener("click", function(){
    one("*");
})

document.getElementById("divi").addEventListener("click", function(){
    one("/");
})

document.getElementById("dot").addEventListener("click", function(){
    one(".");
})

document.getElementById("equal").addEventListener("click", function(){
    evaluate(document.getElementById("equationinput").value);
})

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("equationinput").value = "";
})

function one(number){
    document.getElementById("equationinput").value += number;
    console.log(document.getElementById("equationinput").value);
}

function evaluate(value){
    let answer = eval(value);
    document.getElementById("equationinput").value = answer;
    console.log(eval(value));
}

