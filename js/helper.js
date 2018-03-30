
(function(){
	"use strict";
	const slideIn = elem => window.requestAnimationFrame( () => elem.classList.add('slide-in'));
	
	const shrinkElem = elem => {
		return window.requestAnimationFrame( () => {
			if(elem.classList.contains('shrink')) {
				elem.classList.add('unshrink');
				elem.classList.remove('shrink');
			} else {
				elem.classList.remove('unshrink');
				elem.classList.add('shrink');
			}			
		});
	};
	
	const performHeaderAnimation = ( header ) => {
		const headerPicture = header.querySelector('.text-header img');
		const headerName = header.querySelector('.text-header h1');
		const headerOcupation = header.querySelector('.text-header h2');
		const headerHireButton = header.querySelector('.text-header button');
		
		window.setTimeout( () => shrinkElem(headerPicture), 0);
		window.setTimeout( () => slideIn(headerName), 500);
		window.setTimeout( () => slideIn(headerOcupation), 1000);
		window.setTimeout( () => shrinkElem(headerHireButton), 1500);
	};
	
	const stickNavBar = (nav, stickPoint, scrollPosition) => {
		if (scrollPosition >= stickPoint) {			
			nav.classList.add('sticky');
			nav.classList.remove('relative');
		} else {	
			nav.classList.remove('sticky');
			nav.classList.add('relative');
		}
	};
	
	const scrollItHandler = (distance, direction) => {
		let rest = distance;
		if (rest < 100) {
			return window.setTimeout( () => {
				window.requestAnimationFrame( () => {
					window.scrollBy(0, direction * rest);
				});
			}, 50);
		}
		rest -= 100;
		window.setTimeout( () => {
			window.requestAnimationFrame( () => {
				window.scrollBy(0, direction * 100);
				scrollItHandler(rest, direction);
			});
		}, 50);
	};
	
	const toggleMenu = (elem) => {
		if (elem.classList.contains('slide-down')) {
			elem.classList.remove('slide-down');
		} else {
			elem.classList.add('slide-down');
		}
		
	};

	function init(page) {
		const header = page.querySelector('#page-header');
		const navBar = page.querySelector('.page-nav');
		const pageInnerLinks = page.querySelectorAll('a.page-inner-link');
		const hambMenu = navBar.querySelector('.hamb-menu');
		const hambMenuButton = hambMenu.querySelector('button');
		const pageMenu = navBar.querySelector('.menu');
		
		const stickPoint = navBar.offsetTop;
		
		performHeaderAnimation(header);
		
		window.addEventListener('scroll', () => {
			const scrollPosition = window.pageYOffset;
			window.requestAnimationFrame(() => {
				stickNavBar(navBar, stickPoint, scrollPosition);
			});			
		});
		
		pageInnerLinks.forEach( link => {
			link.addEventListener('click', (evt) => {
				const scrollPosition = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
				const destiny = document.getElementById(link.dataset.nav).offsetTop || 0;			
				const distance = Math.abs(destiny - scrollPosition);
				const direction = destiny < scrollPosition ? -1 : 1;
				
				scrollItHandler(distance, direction);
				evt.preventDefault();
			});
		});
			
		hambMenuButton.addEventListener('click', () => {
			hambMenuButton.focus();
			toggleMenu(pageMenu);
		});
		
		hambMenuButton.addEventListener('blur', () => {
			window.requestAnimationFrame(() => {
				pageMenu.classList.remove('slide-down');
			});
		});
	}
	
	window.addEventListener('load', () => {
		const page = document.getElementById('page-wrap');		
		init(page);
	});
})();