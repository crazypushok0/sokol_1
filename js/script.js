$(function () {
	$(".sale-slider__items").slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
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
	$(".about-gallery__items").slick({
		slidesToShow: 1,
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
	$(".about-articles__slider").slick({
		slidesToShow: 4,
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

	$('.about-item-tabs .submenu__link').click(function () {
		$('.about-gallery__items').slick("getSlick").refresh();;
		$('.about-articles__slider').slick("getSlick").refresh();;
		let id = $(this).attr('data-id');
		$('.about-tabs').find('.tab-item-about').removeClass('active-tab');
		$('.about-item-tabs').find('.submenu__link').removeClass('active');
		$(this).addClass('active');
		$('#' + id).addClass('active-tab');
		return false;
	});

})