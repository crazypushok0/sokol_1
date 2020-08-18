

let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
	let tab = tabs[index];
	let tabs_items = tab.querySelectorAll("._tabs-item");
	let tabs_blocks = tab.querySelectorAll("._tabs-block");
	for (let index = 0; index < tabs_items.length; index++) {
		let tabs_item = tabs_items[index];
		tabs_item.addEventListener("click", function (e) {
			slideraAboutArticles();
			for (let index = 0; index < tabs_items.length; index++) {
				let tabs_item = tabs_items[index];
				tabs_item.classList.remove('_active');
				tabs_blocks[index].classList.remove('_active');
			}
			tabs_item.classList.add('_active');
			tabs_blocks[index].classList.add('_active');
			e.preventDefault();
		});
	}
};

if (window.innerWidth < 525) {
	let filterTitles = document.querySelectorAll('.footer__item-title');
	let filterMenu = document.querySelectorAll('.footer__menu');
	for (let index = 0; index < filterTitles.length; index++) {
		let filterTitle = filterTitles[index];
		filterTitle.addEventListener("click", function (e) {
			for (let index = 0; index < filterTitles.length; index++) {
				let filterTitle = filterTitles[index];
				filterTitle.classList.remove('_active');
				filterMenu[index].classList.remove('_active');
			}
			filterTitle.classList.add('_active');
			filterMenu[index].classList.add('_active');
			e.preventDefault();
		});

	}

}