import "../theme";
import getAllProducts from "../graphql/collection-starter-code";

// getAllProducts('test-collection') => returns a Promise, which resolves to an Array of Product Objects

// Your Code Here
getAllProducts("test-collection").then((arr) =>
  arr.forEach((element) => {
    console.log(element);
  })
);
