const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!"

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
})

// Alternative way of writing anonymous function
document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me. Alternative way.")
})