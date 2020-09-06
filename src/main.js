import render from "./render.js";

const virtualApp = {
  tagName: "div",
  attrs: {
    id: "app",
  },
  children: [
    {
      tagName: "img",
      attrs: {
        src: "https://media.giphy.com/media/6CovzgyTig7M4/giphy.gif",
      },
      children: [],
    },
  ],
};

const realApp = render(virtualApp);
var targetDiv = document.getElementById("app");
console.log("Before Mounting", targetDiv);
targetDiv.replaceWith(realApp);
console.log("After Mounting", realApp);
