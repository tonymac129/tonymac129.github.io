/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;
const button = document.querySelector(".full-screen");

/* View in fullscreen */

function openFullscreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
  } else if (elem.requestFullscreen) {
    elem.requestFullscreen();
    button.classList.add(".none");
    button.classList.remove(".full-screen");
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    button.classList.add(".none");
    button.classList.remove(".full-screen");
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    button.classList.add(".none");
    button.classList.remove(".full-screen");
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
