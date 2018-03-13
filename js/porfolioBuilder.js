const jobArticle = (job) => {
    const node = document.createElement('article');
    const header = document.createElement('header');
    const description = document.createElement('p');

    node.classList.add('content');
    header.innerHTML = `<h4 class="uppercase">${job.title}</h4>
						<h5>${job.employer}</h5>
						<small>${job.location}-${job.dates}</small>`;
    description.innerHTML = `<span class="uppercase text-decoration">Description:</span> ${job.description}`;

    node.appendChild(header);
    node.appendChild(description);

    return node;

};

window.addEventListener('load', () => {
    const elem = document.querySelector('.carrusel');
    const carruselContainer = elem.querySelector('.content-container');

    data.work.jobs.forEach(job => {
        const art = jobArticle(job);
        carruselContainer.appendChild(art);

    });

    Object.create(carrusel).init(elem);
});