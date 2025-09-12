function animation() {
  let i = 0;
  const input = document.getElementById("input").value;
  const img = document.getElementById("Moon");
  function moon() {
    img.src = "Images/" + i + ".jpg";
    i++;
    if (i === 28) {
      clearInterval(test);
    }
  }
  const test = setInterval(moon, input);
}
