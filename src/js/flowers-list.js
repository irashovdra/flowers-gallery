import flowersTemplate from "../templates/flower.hbs";
import flowers from "../data-flowers.json";
const body = document.querySelector("body");

const flowersList = flowersTemplate({ flowers });

body.insertAdjacentHTML("beforeend", flowersList);
