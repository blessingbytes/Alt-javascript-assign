function appendBox(container, position, text) {
  const box = document.createElement("div");
  box.classList.add("box");
  box.textContent = text;

  container.appendChild(box);

  // Position the box
  switch (position) {
    case "top":
      box.style.left = "-15px";
      box.style.top = "-30px";
      box.style.backgroundColor = "white";
      break;

    case "bottom":
      box.style.left = "-13px";
      box.style.bottom = "-30px";
      box.style.backgroundColor = "white";
      break;

    case "right":
      box.style.right = "-150px";
      box.style.top = "-2px";
      box.style.backgroundColor = "white";
      break;

    default:
      console.error("Invalid position");
  }
}

const container = document.getElementById("container");
appendBox(container, "top", "note above");
appendBox(container, "bottom", "note below");
appendBox(container, "right", "note at the right");
