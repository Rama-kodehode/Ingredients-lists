const box = document.querySelector(".box");
const box2 = document.querySelector(".bigger-box");

box.style.backgroundColor = "salmon";
box.style.height = "50px";
box.style.width = "50px";
box.style.position = "absolute";
//Salmon position
box.style.top = "300px";
box.style.left = "850px";

//PLAYER 2
// box2.style.backgroundColor = "blue";
// box2.style.height = "50px";
// box2.style.width = "50px";
// box2.style.position = "absolute";
// //Blue Position
// box2.style.top = "300px";
// box2.style.left = "800px";

window.addEventListener("keydown", (e) => {
  //Make string to numbers
  let top = parseInt(box.style.top);
  let left = parseInt(box.style.left);

  const moveDistance = 50;

  switch (e.key) {
    case "ArrowUp":
      top -= moveDistance;
      break;
    case "ArrowDown":
      top += moveDistance;
      break;
    case "ArrowLeft":
      left -= moveDistance;
      break;
    case "ArrowRight":
      left += moveDistance;
      break;
  }

  box.style.top = top + "px";
  box.style.left = left + "px";

  console.log(e.key);
});

box2.addEventListener("mousedown", function (e) {
  // On the mouse
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  box.style.left = `${mouseX - parseInt(box.style.width) / 2}px`;
  box.style.top = `${mouseY - parseInt(box.style.height) / 2}px`;
});
