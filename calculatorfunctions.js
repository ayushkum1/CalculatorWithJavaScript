document.getElementById("1").addEventListener("click", function(){
    equation("1");
})

document.getElementById("2").addEventListener("click", function(){
    equation("2");
})

document.getElementById("3").addEventListener("click", function(){
    equation("3");
})

document.getElementById("4").addEventListener("click", function(){
    equation("4");
})

document.getElementById("5").addEventListener("click", function(){
    equation("5");
})

document.getElementById("6").addEventListener("click", function(){
    equation("6");
})

document.getElementById("7").addEventListener("click", function(){
    equation("7");
})

document.getElementById("8").addEventListener("click", function(){
    equation("8");
})

document.getElementById("9").addEventListener("click", function(){
    equation("9");
})


document.getElementById("0").addEventListener("click", function(){
    equation("0");
})

document.getElementById("plus").addEventListener("click", function(){
    equation("+");
})

document.getElementById("minus").addEventListener("click", function(){
    equation("-");
})

document.getElementById("mult").addEventListener("click", function(){
    equation("*");
})

document.getElementById("divi").addEventListener("click", function(){
    equation("/");
})

document.getElementById("dot").addEventListener("click", function(){
    equation(".");
})

document.getElementById("equal").addEventListener("click", function(){
    evaluate(document.getElementById("equationinput").value);
})

document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("equationinput").value = "";
})

document.getElementById("history").addEventListener("click", function(){
    getHistoryCookie();
})

function equation(number){
    document.getElementById("equationinput").value += number;
    console.log(document.getElementById("equationinput").value);
}

function evaluate(value){
    let answer = eval(value);
    document.getElementById("equationinput").value = answer;
    let historyvalue = value+" = "+answer;
    console.log(historyvalue);
    setHistoryCookie(historyvalue);
}

// function for setting cookie, taking equation from user and getting the timestamp in the function. 
// timestamp will be our key and equation will be our value
function setHistoryCookie(equation){
    let datetime =  new Date().toLocaleString();
    document.cookie = datetime + "=" + equation;
    // document.cookie = "ayush=kumar";
}

// get cookie
function getHistoryCookie(){
    console.log("into history");
    document.cookie = "ayush=kumar";
    console.log(document.cookie);
    // let history = document.cookie.split(';');
    // for(i = 0; i<history.length; i++){
    //     console.log(history[i]);
    // }
}