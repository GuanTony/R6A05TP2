import {getData} from "./api.js";
import {fastifyview} from "@fastify/view";

console.log("Je suis Marvel")
console.log(await getData("https://gateway.marvel.com/v1/public/characters"))

fastify.register(require("@fastify/view")),{
    engine : {
        handlebars : require("handlebars"),
    }
};
