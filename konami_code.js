const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let idx = 0
// sets our counter id to start at 0
  document.body.addEventListener("keydown", (e) => {
// sets our eventlistener, which is looking for a keypress(keydown)
    const key = e.key
// sets a key variable for the event listener, which logs the keycode for the key pressed.
    idx = (codes[idx] === key) ? ++idx : 0
// increments our counter idx by 1, every time our eventlistener catches a key that matches
// the description of the keypress. ie: 'ArrowUp' === codes[idx]. If it catches a wrong
// input, it resets the counter back to 0.
    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
// this condition is met when every key press matches the codes array in sequential order.
// we get a window alert congratulating us, and the idx counter is reset to 0.
  });
}
