carrusel = {
    init: function(elem) {
        const contentContainer = elem.querySelector('.content-container');
        const contents = elem.querySelectorAll('.content');
        const contentWidth = (100 / contents.length).toFixed(2);
        const links = elem.querySelectorAll('.carrusel-link');
        let position = 0;

        this.setContainerStyle(contentContainer, contents.length);

        contents.forEach((content) => content.style.width = `${contentWidth}%`);

        links.forEach(link => {
            link.addEventListener('click', (evt) => {
                const dir = evt.target.dataset.value;

                if (dir === 'back') {
                    position === 0 || position--;
                }
                if (dir === 'next') {
                    position === contents.length - 1 || position++;
                }

                evt.preventDefault();
                this.move(contentContainer, position * contentWidth);
            });
        });

    },

    move: function(contentContainer, distance) {
        contentContainer.style.transform = `translateX(-${distance}%)`;
    },

    setContainerStyle: function(contentContainer, contentAmount) {
        contentContainer.style.width = `${100 * contentAmount}%`;
    }

};