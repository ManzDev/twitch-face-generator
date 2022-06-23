import "./components/FaceGenerator.js";

const container = document.querySelector(".container");
const faceButton = document.querySelector("button");

faceButton.addEventListener("click", () => {
  const oldFace = document.querySelector("face-generator");
  oldFace.remove();
  const newFace = document.createElement("face-generator");
  container.insertAdjacentElement("afterbegin", newFace);
});
