playSound = e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`li[data-key="${e.keyCode}"]`);
  if (audio) {
    audio.currentTime = 0; // 처음으로 되돌리기
    audio.play();
    key.classList.add("playing");
  }
};

removeTransition = e => {
  if (e.propertyName === "transform") {
    e.target.classList.remove("playing");
  }
};

window.addEventListener("keydown", playSound);

const pianoElList = document.querySelectorAll("li");
pianoElList.forEach(el => {
  el.addEventListener("transitionend", removeTransition);
});
