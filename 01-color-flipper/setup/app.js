const colors = ["red", "orange", "yellow", "green", "cyan", "blue", "purple", "white", "black", "gray"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    const randomNUmber = getRandomNumber();
    console.log(randomNUmber);

    document.body.style.backgroundColor = colors[randomNUmber];
    color.textContent = colors[randomNUmber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}