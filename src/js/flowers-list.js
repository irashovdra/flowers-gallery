import Handlebars from "handlebars";
import flowersTemplate from "../templates/flower.hbs";
import flowers from "../data-flowers.json";
const body = document.querySelector("body");
// const template = Handlebars.compile({ flowersTemplate });
// console.log(template({{ flowersData } }));
// console.log("TEST");

const flowersList = flowersTemplate({ flowers });

body.insertAdjacentHTML("beforeend", flowersList);
