let display = document.getElementById("display");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");

let count = 0;

plus.addEventListener("click", function () {
    count += 1;
    display.textContent = count;

});

minus.addEventListener("click", function () {
    if (count == 0) {
        count = 0;
    } else {
        {
            count -= 1;
        }
    }

    display.textContent = count;

});

reset.addEventListener("click", function () {
    count = 0;
    display.textContent = count;

});