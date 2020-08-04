
document.querySelectorAll(".tabs-catalog__content").forEach((subtab) => {
	let tabHeading = subtab.querySelectorAll(".subheader-tabs-catalog__item");
	let tabContent = subtab.querySelectorAll(".subbody-tabs-catalog__content");
	let tabName;
	tabHeading.forEach((element) => {
		element.addEventListener("click", (event) => {
			event.preventDefault();
			tabHeading.forEach((item) => {
				item.classList.remove("active");
			});
			element.classList.add("active");
			tabName = element.getAttribute("data-tabs-subbody");
			tabContent.forEach((item) => {
				item.id === tabName
					? item.classList.add("active")
					: item.classList.remove("active");
			});
		});
	});
});

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
