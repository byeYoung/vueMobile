
function Adaptation() {
  document.addEventListener('DOMContentLoaded', function () {
    let html = document.documentElement;
    let windowWidth = html.clientWidth;
    //html.style.fontSize = windowWidth / 3.75 + 'px';
    html.style.fontSize = windowWidth / 640 * 100 + 'px';
  }, false);
}
export {Adaptation}

