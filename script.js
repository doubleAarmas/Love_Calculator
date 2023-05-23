const API_BASE = "https://api.giphy.com/v1/gifs/random";
const API_KEY = "?api_key=fCkeQWWxRQTlf7941o57BilIbfCceS8a";
//template BASE + KEY + TAG + RATING
const container = document.querySelector(".love__container");
const loveForm = document.querySelector("love__form");
const loveList = ["love", "friend zone", "kiss", "no"];
const button = document.querySelector(".like");
// let gifs;

function randomGif(tag, rating) {
  axios
    .get(`${API_BASE}${API_KEY}&tag=${tag}&rating=${rating}`)
    .then((response) => {
      console.log(response);
      //   console.log(gifs);
      renderGifs(response.data.data.images.downsized_large.url);
    })
    .catch((errors) => {
      console.error("errors: ", errors);
    });
}
//randomGif(loveList[Math.floor(Math.random() * loveList.length)], "g");
// randomGif("love", "r");
// randomGif("hate", "r");

function renderGifs(gifUrl) {
  gifEl = document.createElement("img");
  gifEl.classList.add("image__styling");
  container.appendChild(gifEl);
  gifEl.setAttribute("src", gifUrl);
}
//iterating through the array
button.addEventListener("click", (e) => {
  // e.preventDefault();
  container.innerHTML = "";
  randomGif(loveList[Math.floor(Math.random() * loveList.length)], "g");
});

// function eventHandler() {
//   loveFormEvtHandler.preventDefault();
//   loveFormEvtHandler.target.reset();
// }
//loveForm.addEventListener('submit', loveFormEvtHandler);
// BUTTON AREA
let b = document.querySelector("button");
setTimeout(() => b.focus(), 100);
setTimeout(() => b.blur(), 1000);
