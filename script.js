console.log("Hello from JavaScript!");

const button = document.querySelector("#myButton");
button.addEventListener("click", () => {
  alert("You clicked the button!");
  document.getElementById("myPara").style.color = "blue";
  document.getElementById("myHeading").innerHTML = "I can change!";
});
