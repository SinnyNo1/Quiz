let text = document.getElementById('answer')
let text2 = document.getElementById('number')

var number1 = Math.floor(Math.random() * 2500) +1000
var number2 = Math.floor(Math.random() * 2500) +1000
var number3 = Math.floor(Math.random() * 2)

function Changenumber () {
    if (number3 == 0) {
        text2.innerHTML = number1 + " + " + number2
    }
    else
    {
        text2.innerHTML = number1 + " - " + number2
    }
    console.log('Updated 3')
}

function Check() {
    if (number3 == 0) {
        let answer1 = number1 + number2
        if (text.value == answer1) {
            swal({
                title: "Correct!",
                text: "Nice Job",
                icon: "success",
                button: "Ok",
            });
            setTimeout(function() {
                window.location = "Quiz1.html"
            },1000)
        }
        else
        {
            swal({
                title: "Incorrect!",
                text: "Nice Try",
                icon: "error",
                button: "Ok",
            });
            setTimeout(function() {
                window.location = "Quiz1.html"
            },1000)
        }
    }
    else
    {
        let answer2 = number1 - number2
        if (text.value == answer2) {
            swal({
                title: "Correct!",
                text: "Nice Job",
                icon: "success",
                button: "Ok",
            });
            setTimeout(function() {
                window.location = "Quiz1.html"
            },1000)
        }
        else
        {
            swal({
                title: "Incorrect!",
                text: "Nice Try",
                icon: "error",
                button: "Ok",
            });
            setTimeout(function() {
                window.location = "Quiz1.html"
            },1000)
        }
    }
}

window.onload = Changenumber()