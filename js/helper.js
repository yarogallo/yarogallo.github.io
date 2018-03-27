
(function(){
	
	const slideIn = elem => window.requestAnimationFrame( () => elem.classList.add('slide-in'));
	
	const slideOut = (elem, amount) => {
		window.requestAnimationFrame( () => {
			elem.classList.add('slide-out');
			elem.style.transform = `translateY(${amount})`;
		});	
	};
	
	const unShrinkElem = elem => {
		return window.requestAnimationFrame( () => {
			elem.classList.add('unshrink');
			elem.classList.remove('shrink');
		});
	};
	
	const shrinkElem = elem => {
		return window.requestAnimationFrame( () => {
				elem.classList.add('shrink');
				elem.classList.remove('unshrink');
		});
	};
	
	const performHeaderAnimation = ( header ) => {
		const headerPicture = header.querySelector('.text-header img');
		const headerName = header.querySelector('.text-header h1');
		const headerOcupation = header.querySelector('.text-header h2');
		const headerHireButton = header.querySelector('.text-header button');
		
		window.setTimeout( () => unShrinkElem(headerPicture ), 0);
		window.setTimeout( () => slideIn(headerName), 500);
		window.setTimeout( () => slideIn(headerOcupation), 1000);
		window.setTimeout( () => unShrinkElem(headerHireButton), 1500);
	};
	
	const stickNavBar = (nav, stickPoint, scrollPosition) => {
		if (scrollPosition >= stickPoint) {			
			nav.classList.add('sticky');
		} else {	
			nav.classList.remove('sticky');
		}
	};
	
	const scrollItHandler = (distance, direction) => {
		let rest = distance;
		if (rest < 100) {
			return window.setTimeout( () => {
				window.requestAnimationFrame( () => {
					window.scrollBy(0, direction * rest);
				});
			}, 20);
		}
		rest -= 100;
		window.setTimeout( () => {
			window.requestAnimationFrame( () => {
				window.scrollBy(0, direction * 100);
				scrollItHandler(rest, direction);
			});
		}, 20);
	};

	function init(page) {
		const header = page.querySelector('#page-header');
		const navBar = page.querySelector('.page-nav');
		const pageInnerLinks = page.querySelectorAll('a.page-inner-link');
		
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
		
		
		
	}
	
	window.addEventListener('load', () => {
		const page = document.getElementById('page-wrap');		
		init(page);
	});
})();