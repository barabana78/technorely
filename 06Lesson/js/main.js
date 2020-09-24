"use strict";
const url = "http://api.tvmaze.com/search/shows/?q=";
let urlSecondPart = "";
let concatURL = "";
//debounce
const debounce = (fn, ms) => {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);
    timeout = setTimeout(fnCall, ms);
  };
};
//event
onChange = debounce(onChange, 200);
document.getElementById("search").addEventListener("keyup", onChange);

function onChange(e) {
  console.log(e.target.value);
  urlSecondPart = e.target.value;
  concatURL = url + urlSecondPart;
  if (urlSecondPart) {
    myFetch(concatURL, "GET", "json")
      .then((response) => {
        console.log("json= ", response, "user.name=", response[0].show.name);
        createHTML(response);
      })
      .catch((err) => console.log(err));
  }
}

function createHTML(film) {
  if (document.getElementById("result").firstElementChild !== null) {
    let cards = Array.from(document.querySelectorAll(".card"));
    cards.map((item) => item.remove());
  }

  //create and insert html
  for (let x = 0; x < film.length; x++) {
    let html = `
    <div class="card" id="card_${film[x].show.id}">
        <div class="poster">
            <img src="" alt="No poster: ${film[x].show.name}" id="image_${film[x].show.id}">
            <div id="clouse_${film[x].show.id}" class="clouse" onclick="clouseItem()">X</div>
        </div>
        <h2 class="title" id="title">${film[x].show.name}</h2>
        <ul id="${film[x].show.id}"></ul>
        <a href="${film[x].show.url}"><button type="button">More...</button></a>
    </div>`;
    document.getElementById("result").insertAdjacentHTML("beforeend", html);
    //insert image if has it
    if (film[x].show.image !== null) {
      document.getElementById(`image_${film[x].show.id}`).src =
        film[x].show.image.medium;
    }
    //insert discriptions
    let arr = ["premiered", "genres"];
    for (let i = 0; i < arr.length; i++) {
      let elem = arr[i];
      if (elem in film[x].show) {
        let li = document.createElement("li");
        if (elem === "genres") {
          let str = film[x].show[elem].join(", ");
          li.innerHTML = `${elem[0].toUpperCase() + elem.slice(1)}: ${str}`;
          document.getElementById(film[x].show.id).append(li);
        } else {
          li.innerHTML = `${elem[0].toUpperCase() + elem.slice(1)}: ${
            film[x].show[elem]
          }`;
          document.getElementById(film[x].show.id).append(li);
        }
      }
    }
    //delete item
    document.getElementById(`clouse_${film[x].show.id}`).onclick = function () {
      document.getElementById(`card_${film[x].show.id}`).remove();
    };
  }
}

//AJAX
function myFetch(url, method, options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = options;
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };
    xhr.onerror = () => {
      reject(xhr.response);
    };
    xhr.send();
  });
}
