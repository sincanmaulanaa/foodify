import data from "../DATA.json";

const drawerElement = document.querySelector("#drawer");
const hamburgerElement = document.querySelector("#hamburger");

const headerElement = document.querySelector("header");
const heroElement = document.querySelector(".hero");
const mainElement = document.querySelector("main");

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
  mainElement.innerHTML += `
	<div>
		<span>${item.name}</span>
		<span>${item.city}</span>
	</div>
  `;
});
