document.querySelectorAll(".about").forEach((tab) => {

	let tabHeading = tab.querySelectorAll(".submenu__link");
	let tabContent = tab.querySelectorAll(".tab-item-about");
	let tabName;
	tabHeading.forEach((element) => {

		element.addEventListener("click", (event) => {
			event.preventDefault();
			slideraAboutArticles();
			tabHeading.forEach((item) => {
				item.classList.remove("active");
			});
			element.classList.add("active");
			tabName = element.getAttribute("data-id");
			tabContent.forEach((item) => {
				item.id === tabName
					? item.classList.add("active-tab")
					: item.classList.remove("active-tab");

			});
		});
	});
});

document.querySelectorAll(".tabs-catalog").forEach((tab) => {
	let tabHeading = tab.querySelectorAll(".tabs-catalog__item");
	let tabContent = tab.querySelectorAll(".tabs-catalog__content");
	let tabName;
	tabHeading.forEach((element) => {
		element.addEventListener("click", (event) => {
			event.preventDefault();
			tabHeading.forEach((item) => {
				item.classList.remove("active");
			});
			element.classList.add("active");
			tabName = element.getAttribute("data-tabs-item");
			tabContent.forEach((item) => {
				item.id === tabName
					? item.classList.add("active")
					: item.classList.remove("active");
			});
		});
	});
});

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