import "../theme";
import getAllProducts from "../graphql/collection-starter-code";

// getAllProducts('test-collection') => returns a Promise, which resolves to an Array of Product Objects

// Your Code Here
// use below when done
getAllProducts("test-collection");

// getAllProducts("test-collection").then((arr) =>
//   arr.forEach((element) => {
//     console.log(element);
//   })
// );

// getting a NodeList of all the radio buttons
const input = document.querySelectorAll(".swatch");

// for each of the nodes in the NodeList they are to call the function handleInput when they are selected.
input.forEach((e) => (e.onchange = handleInput));

// right now just logging the target data when a radio is selected.
function handleInput(e) {
  console.log(e.target);
}
