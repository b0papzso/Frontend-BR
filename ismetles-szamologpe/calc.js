function Calculate()
{
    var eredmeny = eval(document.getElementById("inputtext").value.replace("x", "*"));
    document.getElementById("inputtext").value = eredmeny;
}

addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        Calculate();
    }
})

/*addEventListener("keypress", function(replace){
    if(replace.key == "x" || replace.key == "X")
    {
        document.getElementById("inputtext").value = eredmeny;
    }
})*/

function addEvent(input)
{
    document.getElementById("inputtext").value += input.innerHTML;
    console.log(input.innerHTML)
}