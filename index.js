// document.getElementById("count-el").innerText = 5;

let count = 0
countEl = document.getElementById("count-el")
saveEl = document.getElementById("save-el")

function increment() {
    console.log("button clicked")
    count += 1
    console.log(count)

    countEl.textContent = count;
}

function save() {
    let countDash = count + " - "
    saveEl.textContent += countDash
    count = 0;
    countEl.textContent = count;
}
