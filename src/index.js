import "./styles.css";

document.getElementById("app").innerHTML = `
<h1 id = "toChange" > Hello world</h1> `; //ex1

const firstButton = document.getElementById("my-button");
firstButton.addEventListener("click", function () {
  console.log("hello world");
}); //ex2

const toChange = document.getElementById("toChange");
firstButton.addEventListener("click", function () {
  toChange.textContent = "My notebook";
}); //ex3

const secondButton = document.getElementById("add-data");
const list = document.getElementById("list");
const textArea = document.getElementById("textArea");
secondButton.addEventListener("click", function () {
  const newListItem = document.createElement("li");
  newListItem.textContent = textArea.value;
  list.appendChild(newListItem);
}); //ex4 && ex5
