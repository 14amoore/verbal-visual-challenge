import "../theme";
import getAllProducts from "../graphql/collection-starter-code";

// getAllProducts('test-collection') => returns a Promise, which resolves to an Array of Product Objects

// Your Code Here

const buttons = document.querySelectorAll(".swatch");

// This is basically working, now I'd just need more time to write out logic for all of the different items.

getAllProducts("test-collection").then((response) => {
  console.log(response);
  buttons.forEach(
    (el) =>
      (el.onclick = function changePic(e) {
        const item = e.path[2].id;
        const classNameArr = e.target.className.split(" ");
        const color = classNameArr.slice(1, classNameArr.length).join(" ");
        let ind = parseInt(e.target.attributes[1].nodeValue, 10);
        let totalChoices = 0;
        let totalSizes = 0;

        if (item === "short-sleeve-t-shirt") {
          totalSizes = response[0].options[1].values.length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[0].variants[ind * totalSizes].image.src;
        }
        if (item === "crew-neck-long-sleeve-t-shirt") {
          totalSizes = response[1].options[1].values.length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[1].variants[ind * totalSizes].image.src;
        }
        if (item === "knitted-beanie") {
          document.querySelector(`#${item}`).childNodes[1].src =
            response[2].variants[ind].image.src;
        }
        if (item === "slim-fit-jeans") {
          totalSizes = response[3].options[1].length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[3].variants[ind * totalSizes].image.src;
        }
        if (item === "chino-pants") {
          totalSizes = response[5].options[1].length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[5].variants[ind * totalSizes].image.src;
        }
        if (item === "chino-pants-2") {
          totalSizes = response[6].options[1].length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[6].variants[ind * totalSizes].image.src;
        }
        if (item === "slim-fit-jeans-2") {
          totalSizes = response[8].options[1].length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[8].variants[ind * totalSizes].image.src;
        }
        if (item === "knitted-beanie-2") {
          document.querySelector(`#${item}`).childNodes[1].src =
            response[9].variants[ind].image.src;
        }
        if (item === "crew-neck-long-sleeve-t-shirt-2") {
          totalSizes = response[10].options[1].length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[10].variants[ind * totalSizes].image.src;
        }
        if (item === "short-sleeve-t-shirt-2") {
          totalSizes = response[11].options[1].length;
          document.querySelector(`#${item}`).childNodes[1].src =
            response[11].variants[ind * totalSizes].image.src;
        }

        console.log(ind, totalSizes, totalChoices);
      })
  );
});

// function changeJeans2(e) {
//   const color = e.target.classList[1];
//   const light = document.querySelector(".Light");
//   const dark = document.querySelector(".Dark");
//   if (color === "Dark") {
//     document.querySelector("#slim-fit-jeans-2").childNodes[1].src =
//       "https://cdn.shopify.com/s/files/1/0570/7726/8642/products/jeans_dark-wash_flat-lay_cc6f505c-ef8c-4029-b788-579cfe75dd33.jpg?v=1622162406";
//     dark.classList.add("outline");
//     e.target.previousSibling.classList.remove("outline");
//   } else {
//     document.querySelector("#slim-fit-jeans-2").childNodes[1].src =
//       "https://cdn.shopify.com/s/files/1/0570/7726/8642/products/jeans_light-wash_flat-lay_6ce5d4c2-77eb-422c-bf45-9c488fad3a4b.jpg?v=1622162406";
//     light.classList.add("outline");
//     e.target.nextSibling.classList.remove("outline");
//   }
// }
