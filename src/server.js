import {getData} from "./api.js";

console.log("Je suis Marvel")
console.log(await getData("https://gateway.marvel.com/v1/public/characters"))