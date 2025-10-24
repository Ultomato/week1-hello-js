console.log("Week 1 Mini Challenge!");

const buttonQuote = document.getElementById("quoteButton");
const buttonRed = document.getElementById("redButton");
const buttonGreen = document.getElementById("greenButton");
const buttonBlue = document.getElementById("blueButton");
const buttonHide = document.getElementById("hideButton");
const heading = document.querySelector("#myHeading");
const para = document.querySelector("#myPara");
const quotes = [
  "The best way to get started is to quit talking and begin doing. - Walt Disney",
  "Don't let yesterday take up too much of today. - Will Rogers",   
  "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi"]
console.log('Found?', !!buttonRed);
buttonRed.addEventListener("click", () => {
  document.body.style.backgroundColor = "red";

});
buttonGreen.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
});
buttonBlue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

buttonQuote.addEventListener("click", () => {
  const note = document.createElement("p");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  note.textContent = quotes[randomIndex];
  document.body.appendChild(note);

});
buttonHide.addEventListener("click", () => {
  document.body.para.toggle;
});
heading.addEventListener("click", () => {
  heading.textContent = "New Heading Text!";
});
para.addEventListener("click", () => {
 para.textContent = "New Paragraph!";
});