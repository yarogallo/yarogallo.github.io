
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
	
	const stickNavBar = (nav, stickPoint) => {
		const scroll = window.pageYOffset;
		if (scroll >= stickPoint) {
			window.requestAnimationFrame( () => {
				nav.classList.add('sticky');
			});
		} else {
			window.requestAnimationFrame( () => {
				nav.classList.remove('sticky');
			});
		}
	};
	
	
	function init(page) {
		const header = page.querySelector('#page-header');
		const navBar = page.querySelector('.page-nav');
		const stickPoint = navBar.offsetTop;
		
		performHeaderAnimation(header);
		
		window.addEventListener('scroll', () => {
			stickNavBar(navBar, stickPoint);
		});
		
	}
	
	window.addEventListener('load', () => {
		const page = document.getElementById('page-wrap');		
		init(page);
	});
})();