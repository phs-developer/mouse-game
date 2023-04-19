const explan = document.querySelector(".explan");
const startBtn = document.querySelector(".start");
const block = document.querySelectorAll(".box");
const fail = document.querySelector(".result > .fail > img");
const end = document.querySelector(".end");
const reStart = document.querySelector(".restart");

//시작
startBtn.onclick = () => {
  explan.style.display = "none";
};

function result(res) {
  res.style.visibility = "visible";
  res.style.transform = "scale(10)";
  setTimeout(() => {
    reStart.style.visibility = "visible";
  }, 1500);
}

//실패
block.forEach((e) => {
  e.onmouseenter = () => {
    result(fail);
  };
});

//성공
end.onmouseenter = () => {
  const success = document.querySelector(".result > .success > img");
  result(success);
};

//재시작
reStart.onclick = (e) => {
  location.reload();
};
