$(".accordion").accordion({
	heightStyle: "content",
	collapsible: true,
	active: 0,

});


const element = document.querySelector('.broadcast__select');
const choices = new Choices(element, {
	searchEnabled: false,
	itemSelectText: '',
	allowHTML: true,
});


new JustValidate('.about__form', {
	rules: {
		name: {
			requared: true,
			minLength: 2,
			maxLength: 10
		},
		mail: {
			requared: true,
			email: true
		},
	},

});


let tabsBtn = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function (element) {
	element.addEventListener('click', function (e) {
		const path = e.currentTarget.dataset.path;

		tabsBtn.forEach(function (btn) {
			btn.classList.remove('tabs-nav__btn--active')
		});
		e.currentTarget.classList.add('tabs-nav__btn--active');

		tabsItem.forEach(function (element) {
			element.classList.remove('tabs-item--active')
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
	});
});

window.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#burger').addEventListener('click', function () {
		document.querySelector('#burger').classList.toggle('active'),
			document.querySelector('#burger-menu').classList.toggle('is-active')
	})
});



$(function () {

	//BEGIN
	$(".playinfo__accordion-title").on("click", function (e) {

		e.preventDefault();
		var $this = $(this);

		if (!$this.hasClass("playinfo__accordion-active")) {
			$(".playinfo__accordion-content").slideUp(400);
			$(".playinfo__accordion-title").removeClass("playinfo__accordion-active");
			$('.playinfo__accordion-arrow').removeClass('playinfo__accordion-rotate');
		}

		$this.toggleClass("playinfo__accordion-active");
		$this.next().slideToggle();
		$('.playinfo__accordion-arrow', this).toggleClass('playinfo__accordion-rotate');
	});
	//END

});

const swiper = new Swiper('.playlists__accordion-block', {
	speed: 400,
	spaceBetween: 15,
	slidesPerView: 2.5,
	loop: true,
	preventClicksPropagation: false,
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 2.3,
			spaceBetween: 15
		},
	}
});
