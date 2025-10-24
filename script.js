console.log("Hello from JavaScript!");

const button = document.querySelector("#myButton");
const heading = document.querySelector("#myHeading");
const para = document.querySelector("#myPara");
console.log('Found?', !!button);
button.addEventListener("click", () => {
  alert("You clicked the button!");
  document.getElementById("myPara").style.color = "blue";
  //document.getElementById("myHeading").innerHTML = "I can change!";
    // 1) Change heading text by ChatGPT
  heading.textContent = "Heading updated! ✅";
 // 2) Toggle page background
  document.body.classList.toggle("alt-bg");

  // 3) Append a note
  const note = document.createElement("p");
  note.textContent = "You clicked the button!";
  document.body.appendChild(note);
});
heading.addEventListener("click", () => {
  heading.textContent = "New Heading Text!";
});
para.addEventListener("click", () => {
 para.textContent = "New Paragraph!";
});
const greetBtn = document.querySelector("#greetBtn");
const nameInput = document.querySelector("#nameInput");
const greeting = document.querySelector("#greeting");

greetBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  greeting.textContent = name ? `Hello, ${name}! 👋` : "Please type your name.";
});
