// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

let mainList = document.querySelectorAll(".main__list");
let mainTitle = document.querySelector(".main__title");
let mainSubTitle = document.querySelector(".main__sub-title");
let mainButton = document.querySelector(".main__button");
let mainItemImg = document.querySelector(".main__item-img");
let headerItem = document.querySelectorAll(".header__item");
let headerLogo = document.querySelector(".header__logo");



document.addEventListener("DOMContentLoaded", function () {
	mainTitle.classList.add('_watcher-view');
	mainSubTitle.classList.add('_watcher-view');
	mainButton.classList.add('_watcher-view');
	mainItemImg.classList.add('_watcher-view');
	headerLogo.classList.add('_watcher-view');
	for (let list of mainList) {
		list.classList.add('_watcher-view');
	}
	for (let item of headerItem) {
		item.classList.add('_watcher-view');
	}


});