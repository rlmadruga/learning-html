const addBall = () => {
  let ball = document.createElement("div");
  ball.setAttribute("class", "ball");

  let p1 = Math.floor(Math.random() * 500);
  let p2 = Math.floor(Math.random() * 500);
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  ball.setAttribute(
    "style",
    "left:" + p1 + "px; top:" + p2 + "px; background-color: #" + randomColor
  );
  ball.setAttribute("onclick", "popBall(this)");

  document.body.appendChild(ball);
};

const popBall = (obj) => {
  document.body.removeChild(obj);
};

const start = () => {
  setInterval(addBall, 1000);
};
