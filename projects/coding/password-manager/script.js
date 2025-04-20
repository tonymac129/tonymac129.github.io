const form = document.getElementById("form");
const siteInput = document.getElementById("site");
const userInput = document.getElementById("user");
const passwordInput = document.getElementById("password");
const noteInput = document.getElementById("note");
const searchInput = document.getElementById("search");
const itemList = document.getElementById("list");
const clear = document.getElementById("clear");
const warning = document.getElementById("warning");
let existingData = localStorage.getItem("credentials") ? JSON.parse(localStorage.getItem("credentials")) : [];
let id = localStorage.getItem("id") ? JSON.parse(localStorage.getItem("id")) : 0;

if (existingData.length > 0) {
  existingData.forEach((item) => {
    appendCredentials(item.site, item.user, item.password, item.id, item.note);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let siteValue = siteInput.value.trim().toLowerCase();
  let userValue = userInput.value.trim();
  let passwordValue = passwordInput.value.trim();
  let noteValue = noteInput.value.trim();
  if (!siteValue.includes("http://") && !siteValue.includes("https://")) {
    siteValue = "https://" + siteValue;
  }
  if (siteValue.length > 0 && passwordValue.length > 0) {
    appendCredentials(siteValue, userValue, passwordValue, id, noteValue ? noteValue : undefined);
    let itemInfo = {
      site: siteValue,
      user: userValue,
      password: passwordValue,
      note: noteValue ? noteValue : undefined,
      id: id,
    };
    id++;
    localStorage.setItem("id", JSON.stringify(id));
    existingData.push(itemInfo);
    localStorage.setItem("credentials", JSON.stringify(existingData));
    siteInput.value = "";
    userInput.value = "";
    passwordInput.value = "";
    noteInput.value = "";
    siteInput.focus();
  } else {
    alert("Please enter valid site name and password!");
    return;
  }
});

function appendCredentials(siteValue, userValue, passwordValue, id, note) {
  const newItem = document.createElement("div");
  newItem.classList.add("item");
  newItem.setAttribute("data-id", id);
  newItem.innerHTML = `<div class="item-header" id="header"b>
                <img id="favicon" class="item-icon">
                <span id="link">${siteValue}</span>
                <span id="edit" class="btn">Edit</span>
                <span id="delete" class="btn">Delete</span>
            </div>
            <div class="item-info">
                <div class="item-value">
                    <div class="value-label">Username</div>
                    <span id="user-type">${userValue ? userValue : "No username"}</span>
                </div>
                <div class="item-value">
                    <div class="value-label">Password</div>
                    <span id="password-type">${passwordValue}</span>
                </div>
            </div>
                ${note ? `<div class="note">${note}</div>` : ""}`;

  if (itemList.children.length == 1) {
    warning.style.display = "none";
  }
  itemList.insertBefore(newItem, itemList.children[0]);
  let editing = false;
  newItem.querySelector("#link").addEventListener("click", () => {
    if (!editing) {
      window.open(siteValue, "_blank");
    }
  });
  newItem
    .querySelector("#favicon")
    .setAttribute(
      "src",
      `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${siteValue}&size=256`
    );
  newItem.querySelector("#delete").addEventListener("click", () => {
    let removeIndex = existingData.findIndex((item) => item.id === newItem.getAttribute("data-id"));
    existingData.splice(removeIndex, 1);
    localStorage.setItem("credentials", JSON.stringify(existingData));
    newItem.remove();
    if (itemList.children.length == 1) {
      warning.style.display = "flex";
    }
  });

  newItem.querySelector("#edit").addEventListener("click", () => {
    editing = true;
    let itemIndex = existingData.findIndex((item) => item.id === parseInt(newItem.getAttribute("data-id")));
    const linkType = newItem.querySelector("#link");
    const userType = newItem.querySelector("#user-type");
    const passwordType = newItem.querySelector("#password-type");
    const noteType = newItem.querySelector(".note");
    linkType.contentEditable = true;
    userType.contentEditable = true;
    passwordType.contentEditable = true;
    if (noteType) {
      noteType.contentEditable = true;
    }
    const handleBlur = () => {
      linkType.contentEditable = false;
      userType.contentEditable = false;
      passwordType.contentEditable = false;
      if (noteType) {
        noteType.contentEditable = false;
      }
      editing = false;
      let editedItem = {
        site: linkType.innerHTML,
        user: userType.innerHTML,
        password: passwordType.innerHTML,
        note: noteType ? noteType.innerHTML : undefined,
        id: parseInt(newItem.getAttribute("data-id")),
      };
      existingData[itemIndex] = editedItem;
      localStorage.setItem("credentials", JSON.stringify(existingData));
      itemList.innerHTML = `
        <div id="message"></div>`;
      existingData.forEach((item) => {
        appendCredentials(item.site, item.user, item.password, item.id, item.note);
      });
    };
    linkType.focus();
    document.addEventListener("click", (e) => {
      if (
        e.target !== linkType &&
        e.target !== userType &&
        e.target !== passwordType &&
        e.target !== noteType &&
        e.target !== newItem.querySelector("#edit") &&
        editing
      ) {
        handleBlur();
      }
    });
  });
}

searchInput.addEventListener("input", () => {
  const searchValue = searchInput.value.trim().toLowerCase();
  let hasMatches = false;
  const message = document.getElementById("message");

  itemList.querySelectorAll(".item").forEach((item) => {
    const siteLink = item.querySelector("#link").innerHTML;
    if (siteLink.includes(searchValue)) {
      item.style.display = "block";
      hasMatches = true;
    } else {
      item.style.display = "none";
    }
  });
  if (!hasMatches && !document.get) {
    message.innerHTML = "No passwords match your search query. Try again with a different keyword?";
  } else {
    message.innerHTML = "";
  }
});

clear.addEventListener("click", () => {
  if (
    confirm(
      "Are you sure you want to clear your data? All your accounts and passwords will get deleted! This action cannot be reversed."
    )
  ) {
    localStorage.clear();
    window.location.reload();
  }
});
