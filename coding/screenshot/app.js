document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("actual");
  const take = document.getElementById("take");
  const pre = document.getElementById("shot");
  const download = document.getElementById("download");
  take.addEventListener("click", async () => {
    const canvas = await html2canvas(container);
    const url = canvas.toDataURL();
    pre.innerHTML = `<img src="${url}" id="image" style="border-radius: 20px; width: 100%;">`;
    download.href = url;
    download.download = "game.png";
    download.click();
  });
  window.onload = () => {
    download.classList.add("hide");
    pre.innerHTML = "<h2>Preview</h2>";
  }
});
