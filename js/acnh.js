function guess() {    
    var c1 = document.getElementById("choice1")
    var c2 = document.getElementById("choice2")
    var c3 = document.getElementById("choice3")
    if (c1.checked == true) {
        document.getElementById("result").innerHTML = "You guessed it right !";
    }
    if (c2.checked == true) {
        document.getElementById("result").innerHTML = "Unlucky, this choice is wrong";
    }
    if (c3.checked == true) {
        document.getElementById("result").innerHTML = "You guessed it right !";
    }
}