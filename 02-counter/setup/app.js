var cnt = 0;

const value = document.querySelector("#value");
function show() {
    if (cnt > 0) {
        value.style.color = "green";
    } else if (cnt < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
    value.textContent = cnt;
}

const btn_dec = document.querySelector(".btn.decrease");
btn_dec.addEventListener("click", function() {
    cnt--;
    show();
    console.log("dec");
})

const btn_reset = document.querySelector(".btn.reset");
btn_reset.addEventListener("click", function() {
    cnt = 0;
    show();
    console.log("reset");
})

const btn_inc = document.querySelector(".btn.increase");
btn_inc.addEventListener("click", function() {
    cnt++;
    show();
    console.log("inc");
})