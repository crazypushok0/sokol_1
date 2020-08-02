//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			// slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}
function sliders_bild_callback(params) { }
//SliderSale
if (document.querySelector('.sale-slider__items')) {
	let sliderSale = new Swiper('.sale-slider__body', {
		// effect: 'fade',
		// autoplay:{
		// 	delay: 3000,
		// 	disableOnInteraction:false,
		// },
		observer: true,
		observerParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 800,
		// touchRatio: 0,
		// simulateTouch: false,
		// loop: true,
		// preloadImages: false,
		// lazy: true,
		//Dots
		pagination: {
			el: '.sale-slider__dots',
			type: 'fraction',
			clickable: true,
		},
		//Arrows
		navigation: {
			nextEl: '.sale-slider__arrows.sale-slider__arrow-next',
			prevEl: '.sale-slider__arrows.sale-slider__arrow-prev',
		},
		// on:{
		// 	lazyImageReady: function(){
		// 		ibg();
		// 	},
		// },
		//And if we need scrollbar
		// scrollbar:{
		// 	el:'.swiper-scrollbar',
		// },
	});

};

//SliderArticles

function slideraAboutArticles() {
	let sliderAboutArticles = new Swiper('.slider-about-articles__body', {
		// effect: 'coverflow',
		// autoplay:{
		// 	delay: 3000,
		// 	disableOnInteraction:false,
		// },
		observer: true,
		observerParents: true,
		observeSlideChildren: true,
		slidesPerView: 4,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		// touchRatio: 0,
		// simulateTouch: false,
		// loop: true,
		// preloadImages: false,
		// lazy: true,
		//Dots
		pagination: {
			el: '.slider-about-articles__dots',
			type: 'fraction',
			clickable: true,
		},
		//Arrows
		navigation: {
			nextEl: '.slider-about-articles__arrows.slider-about-articles__arrow-next',
			prevEl: '.slider-about-articles__arrows.slider-about-articles__arrow-prev',
		},
		// on:{
		// 	lazyImageReady: function(){
		// 		ibg();
		// 	},
		// },
		//And if we need scrollbar
		// scrollbar:{
		// 	el:'.swiper-scrollbar',
		// },
	});
	let sliderAboutGallery = new Swiper('.about-gallery__items-body', {
		// effect: 'fade',
		// autoplay:{
		// 	delay: 3000,
		// 	disableOnInteraction:false,
		// },
		observer: true,
		observerParents: true,
		observeSlideChildren: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		// touchRatio: 0,
		// simulateTouch: false,
		loop: true,
		// preloadImages: false,
		// lazy: true,
		//Dots
		pagination: {
			el: '.about-gallery__dots',
			type: 'fraction',
			clickable: true,
		},
		//Arrows
		navigation: {
			nextEl: '.about-gallery__arrows.about-gallery__arrow-next',
			prevEl: '.about-gallery__arrows.about-gallery__arrow-prev',
		},
		// on:{
		// 	lazyImageReady: function(){
		// 		ibg();
		// 	},
		// },
		//And if we need scrollbar
		// scrollbar:{
		// 	el:'.swiper-scrollbar',
		// },
	});
}


//SliderProduct
if (document.querySelector('.product__slider')) {
	let sliderProduct = new Swiper('.slider-product', {
		// effect: 'fade',
		// autoplay:{
		// 	delay: 3000,
		// 	disableOnInteraction:false,
		// },
		observer: true,
		observerParents: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoHeight: true,
		speed: 800,
		// touchRatio: 0,
		// simulateTouch: false,
		// loop: true,
		// preloadImages: false,
		// lazy: true,
		//Dots
		pagination: {
			el: '.product__slider-dots',
			clickable: true,
		},
		//Arrows
		// navigation: {
		// 	nextEl: '.about__more .more__item_next',
		// 	prevEl: '.about__more .more__item_prev',
		// },
		// on:{
		// 	lazyImageReady: function(){
		// 		ibg();
		// 	},
		// },
		//And if we need scrollbar
		// scrollbar:{
		// 	el:'.swiper-scrollbar',
		// },
	});
	let productSliderImages = document.querySelectorAll('.slider-product__item');
	let productSliderDots = document.querySelectorAll('.product__slider-dots .swiper-pagination-bullet');
	for (let index = 0; index < productSliderImages.length; index++) {
		const productSliderImage = productSliderImages[index].style.backgroundImage;
		productSliderDots[index].style.backgroundImage = productSliderImage;
	}
};


