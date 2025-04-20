const direction = document.getElementById("direction");
const sort = document.getElementById("sort");
const filter = document.getElementById("filter");
const boxes = document.getElementById("container");
let newArray = [];
let secondArray = [];
let everythingArray = [];
let data;
fetch("data.json")
  .then((response) => response.json())
  .then((dataa) => {
    data = dataa;
    for (var i = 0; i < 10; i++) {
      newArray.push(data["object" + i]);
    }
    everythingArray = newArray;
  })
  .catch((error) => console.error("Error fetching data:", error));

direction.addEventListener("change", () => {
  if (document.querySelectorAll(".block").length === 10) {
    sortDirection(newArray, direction.value);
  } else {
    sortDirection(secondArray, direction.value);
  }
});
sort.addEventListener("change", () => {
  if (document.querySelectorAll(".block").length === 10) {
    sortStuff(newArray, sort.value);
  } else {
    sortStuff(secondArray, sort.value);
  }
});
filter.addEventListener("change", () => {
  filterStuff(everythingArray, filter.value);
});
function sortStuff(targetArray, key) {
  direction.value = "ascend";
  if (key === "name") {
    targetArray.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    newArray = targetArray;
    arrangeBoxes(targetArray);
  } else if (key === "time") {
    targetArray.sort((a, b) => {
      const timeA = a.time;
      const timeB = b.time;
      if (timeA < timeB) {
        return -1;
      }
      if (timeA > timeB) {
        return 1;
      }
      return 0;
    });
    newArray = targetArray;
    arrangeBoxes(targetArray);
  } else if (key === "color") {
    let redBoxes = [];
    let greenBoxes = [];
    let blueBoxes = [];
    targetArray.forEach((element) => {
      if (element.color === "red") {
        redBoxes.push(element);
      } else if (element.color === "green") {
        greenBoxes.push(element);
      } else if (element.color === "blue") {
        blueBoxes.push(element);
      }
    });
    let finalArray = redBoxes.concat(greenBoxes, blueBoxes);
    newArray = finalArray;
    arrangeBoxes(finalArray);
  }
}
function filterStuff(colorArray, color) {
  if (color === "red" || color === "green" || color === "blue") {
    let finalArray = [];
    colorArray.forEach((item) => {
      if (item.color === color) {
        finalArray.push(item);
      }
    });
    secondArray = finalArray;
    arrangeBoxes(finalArray);
  } else if (color === "featured") {
    let finalArray = [];
    colorArray.forEach((item) => {
      if (item.featured === true) {
        finalArray.push(item);
      }
    });
    secondArray = finalArray;
    arrangeBoxes(finalArray);
  } else {
    arrangeBoxes(everythingArray);
  }
}
function sortDirection(directionArray, direction) {
  let newArray = [];
  if (direction === "ascend") {
    newArray = directionArray;
  } else {
    for (var i = directionArray.length; i > 0; i--) {
      newArray.push(directionArray[i - 1]);
    }
  }
  arrangeBoxes(newArray);
}
function arrangeBoxes(newArrayy) {
  boxes.innerHTML = "";
  newArrayy.forEach((element) => {
    let newBox = document.createElement("div");
    newBox.classList.add("block");
    if (element.color === "red") {
      newBox.style.backgroundColor = "brown";
    } else if (element.color === "green") {
      newBox.style.backgroundColor = "darkgreen";
    } else {
      newBox.style.backgroundColor = "darkblue";
    }
    newBox.innerHTML = element.name;
    boxes.appendChild(newBox);
  });
}
