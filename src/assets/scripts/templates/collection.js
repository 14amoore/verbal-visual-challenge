import "../theme";
import getAllProducts from "../graphql/collection-starter-code";

// getAllProducts('test-collection') => returns a Promise, which resolves to an Array of Product Objects

// Your Code Here

getAllProducts("test-collection");

// After a few false starts with liquid I decided to just use vanilla js, I was able to make the slim jeans 2 item work as it should and I would probably use similar functions for the the other items. Ideally I would like to be working more efficiently with the array delivered by the API call. I feel like there's a better way to go about this but I can't quite figure it out.

const jeans2Buttons = document.querySelector("#slim-fit-jeans-2").childNodes[6]
  .childNodes;

jeans2Buttons.forEach((e) => (e.onclick = changeJeans2));

function changeJeans2(e) {
  const color = e.target.classList[1];
  const light = document.querySelector(".Light");
  const dark = document.querySelector(".Dark");
  if (color === "Dark") {
    document.querySelector("#slim-fit-jeans-2").childNodes[1].src =
      "https://cdn.shopify.com/s/files/1/0570/7726/8642/products/jeans_dark-wash_flat-lay_cc6f505c-ef8c-4029-b788-579cfe75dd33.jpg?v=1622162406";
    dark.classList.add("outline");
    e.target.previousSibling.classList.remove("outline");
  } else {
    document.querySelector("#slim-fit-jeans-2").childNodes[1].src =
      "https://cdn.shopify.com/s/files/1/0570/7726/8642/products/jeans_light-wash_flat-lay_6ce5d4c2-77eb-422c-bf45-9c488fad3a4b.jpg?v=1622162406";
    light.classList.add("outline");
    e.target.nextSibling.classList.remove("outline");
  }
}
