let count = 0;
const btn = document.querySelector("button");
const counter = document.querySelector("button span")

btn.addEventListener('click', increment);

function increment() {
    count++;
    counter.innerText = count;
}




