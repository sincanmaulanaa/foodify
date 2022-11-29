import data from "../DATA.json";

const drawerElement = document.querySelector("#drawer");
const hamburgerElement = document.querySelector("#hamburger");

const headerElement = document.querySelector("header");
const heroElement = document.querySelector(".hero");
const mainElement = document.querySelector("main");
const cardElement = document.querySelector(".card");

const restaurantLists = data.restaurants;

hamburgerElement.addEventListener("click", (e) => {
  drawerElement.classList.toggle("open");
  e.stopPropagation();
});

headerElement.addEventListener("click", (e) => {
  drawerElement.classList.remove("open");
  e.stopPropagation();
});

heroElement.addEventListener("click", (e) => {
  drawerElement.classList.remove("open");
  e.stopPropagation();
});

mainElement.addEventListener("click", (e) => {
  drawerElement.classList.remove("open");
  e.stopPropagation();
});

restaurantLists.forEach((item) => {
  cardElement.innerHTML += `
	<article class="card-item">
		<img class="card-item_thumbnail" src="${item.pictureId}" alt="${item.alternativeText}">
		<span class="card-item_city">${item.city}</span>
		<span class="card-item_rating">⭐ ${item.rating}</span>
		<h3 class="card-item_title">${item.name}</h3>
		<p class="card-item_description">${item.description}</p>
	</article>
  `;
});
