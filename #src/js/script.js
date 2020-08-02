
function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
function ibg() {

	let ibg = document.querySelectorAll("._ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}

ibg();

@@include('slider.js', {})
@@include('tabs.js', {})





$(function () {


	$(".trust__items").slick({
		slidesToShow: 4,
		adaptiveHeight: true,
		centerMode: true,
		variableWidth: true,
		dots: true,
		arrows: true,
		prevArrow: '<div class="slick-prev">&#10094;</div>',
		nextArrow: '<div class="slick-next">&#10095;</div>',
		customPaging: function (slider, i) {
			let current = i + 1;
			current = current < 10 ? "0" + current : current;

			let total = slider.slideCount;
			total = total < 10 ? "0" + total : total;

			return (
				'<button type="button" role="button" tabindex="0" class="slick-dots-button">\
			<span class="slick-dots-current">' + current + '</span>\
			<span class="slick-dots-separator"></span>\
			<span class="slick-dots-total">' + total + '</span>\
		</button>'
			);
		}

	});

});


