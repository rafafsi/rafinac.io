const countdown = require("../assets/project1.jpeg");
const inventory = require("../assets/project2.jpeg");
const countries = require("../assets/project3.jpeg");
const whackAMole = require("../assets/project4.jpeg");

const projectsData = [
  {
    id: 1,
    name: "Countdown clock",
    url: "https://codepen.io/rafafsi/pen/LYdJRrv",
    description: "A clock that counts the time down.",
    image: countdown,
  },
  {
    id: 2,
    name: "Inventory Manager",
    url: "https://github.com/rafafsi/inventory-manager",
    description:
      "A fullstack project that runs CRUD operations with Java to manage a inventory",
    image: inventory,
  },
  {
    id: 3,
    name: "Countries Explorer",
    url: "https://github.com/rafafsi/countries-explorer",
    description: "explore the countries' world",
    image: countries,
  },
  {
    id: 4,
    name: "Whack a Mole",
    url: "https://github.com/rafafsi/whack-a-mole",
    description: "a game that store the score in the localStorage",
    image: whackAMole,
  },
];

export default projectsData;
