const ni = document.getElementById("n");
const si = document.getElementById("s");
const ii = document.getElementById("i");
const di = document.getElementById("d");
const form = document.getElementById("form");
const results = document.getElementById("results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let n = parseInt(ni.value),
    s = parseInt(si.value),
    i = parseFloat(ii.value),
    d = parseFloat(di.value),
    numOfSides = n,
    sumOfIntAng,
    sumOfExtAng = 360,
    intAng,
    extAng;
  if (!isNaN(n)) {
    numSides(n);
  } else {
    if (!isNaN(s)) {
      numOfSides = s / 180 + 2;
      numSides(numOfSides);
    } else if (!isNaN(d)) {
      numOfSides = 360 / d;
      numSides(numOfSides);
    } else if (!isNaN(i)) {
      numOfSides = 360 / (180 - i);
      numSides(numOfSides);
    }
  }

  function numSides(num) {
    extAng = 360 / num;
    sumOfIntAng = 180 * (num - 2);
    intAng = sumOfIntAng / num;
  }

  results.innerHTML = `
  <li>Number of sides: ${Math.round(numOfSides * 100) / 100}</li>
  <li>Sum of Interior Angles: ${Math.round(sumOfIntAng * 100) / 100}°</li>
  <li>Sum of Exterior Angles: 360°</li>
  <li>Each Interior Angle: ${Math.round(intAng * 100) / 100}°</li>
  <li>Each Exterior Angle: ${Math.round(extAng * 100) / 100}°</li>`;
});
