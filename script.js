const container = document.getElementById("container");
container.style.display = "grid";

let grid;
createGrid(16);

const removeAllChildNodes = () => {
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  }
  grid = prompt("enter the grid size: ");
  if (grid >= 1 && grid <= 100) {
    createGrid(grid);
  } else {
    alert("enter the range between 1 and 100");
    grid = prompt("enter the grid size: ");
    createGrid(grid);
  }
};

function random_rgba() {
  let ro = Math.round,
    ra = Math.random,
    s = 255;
  return `rgba(${ro(ra() * s)},${ro(ra() * s)},${ro(ra() * s)},${ra().toFixed(
    1
  )})`;
}

function createGrid(grid) {
  container.style.gridTemplateRows = `repeat(${grid}, auto)`;
  container.style.gridTemplateColumns = `repeat(${grid}, auto)`;
  for (let i = 0; i < grid; i++) {
    for (let j = 0; j < grid; j++) {
      let div = document.createElement("div");
      div.setAttribute("id", `grid-div-${i}-${j}`);
      div.style.border = "1px solid black";
      div.addEventListener(
        "mouseover",
        (e) => (e.target.style.backgroundColor = random_rgba())
      );
      container.appendChild(div);
    }
  }
}

const clear = document.getElementById("clear");
clear.addEventListener("click", removeAllChildNodes);
