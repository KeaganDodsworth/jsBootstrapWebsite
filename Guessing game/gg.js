var randomNum;
var input;

function validate() {
    input = prompt("Enter a number from 1-10  ");

    randomNum = Math.floor(Math.random() * 10) + 1;



    while (parseInt(input) !== randomNum) {

        if ((parseInt(input) < 1) || (parseInt(input) > 10)) {
            alert("Number not in range");
            input = prompt("Enta a number ");
        } else {

            if (parseInt(input) < randomNum) {
                alert("too low");
                input = prompt("Enta a number ");
            } else if (parseInt(input) > randomNum) {
                alert("too high");
                input = prompt("Enta a number ");
            } else {
                alert("Invalid input")
                input = prompt("Enter a number, you vegetable ");
            }

        }
    }
    alert("You got it ");
}