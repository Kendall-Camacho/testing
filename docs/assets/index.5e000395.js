const navBtn = document.querySelector('.hamburger');const navMobile = document.querySelector('.nav__mobile');const navMobileLinks = document.querySelectorAll('.nav__link-mobile');const currentYear = document.querySelector('.current-year');const showYear = () => {const time = new Date();const year = time.getFullYear();currentYear.textContent = year;};navBtn.addEventListener('click', () => {navBtn.classList.toggle('is-active');navMobile.classList.toggle('show-nav');});navMobileLinks.forEach((link) => {link.addEventListener('click', () => {navBtn.classList.remove('is-active');navMobile.classList.remove('show-nav');});});showYear();
$('.projects__cards').slick({
	arrows: false,
	autoplay: true,
	mobileFirst: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			},
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			},
		},
	],
});