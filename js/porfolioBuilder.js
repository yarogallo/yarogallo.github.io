CarruselContent = (elem) => {
    const contentContainer = elem.querySelector('.content-container');
    
    function carruselContentNode() {
        const node = document.createElement('div');
        
        node.classList.add('content');
        
        return node;
    }
    
    function carruselContentHeader( text = '', ...classList ) {
        const node = document.createElement('h2');
        
        classList.forEach( cl => node.classList.add(cl));
        node.innerText = text;
        
        return node;
    };
    
    function carruselList( elemts=[] ) {
        const list = document.createElement('ul');
        
        elemts.forEach( elem => list.innerHTML += `<li>${elem}</li>`);
        
        return list;
    }
    
    function skillsCarruselSlice( skills = [] ) {
        const skillsNode = carruselContentNode();
        
        skillsNode.appendChild(carruselContentHeader('skills', 'uppercase', 'muted-color', 'text-size-big', 'text-decoration'));
        skillsNode.appendChild(carruselList( skills ));
      
        contentContainer.appendChild(skillsNode);
        return true;
    }
    
    function educationCarruselSlice( schools = [], onlineCourses = []) {
        const educationNode = carruselContentNode();
        
        educationNode.appendChild(carruselContentHeader( 'schools and online courses', 'uppercase', 'muted-color', 'text-size-big', 'text-decoration'));
        educationNode.appendChild(carruselList(schools.map( school =>  `${school.major} in ${school.degree}-${school.name}-${school.dates}`)));
        educationNode.appendChild(carruselList(onlineCourses.map( course =>  `${course.title} in ${course.school}-${course.dates}`)));
       
        contentContainer.appendChild(educationNode);
        return true;
    }
    
    return {
        emtyContent(){
            return carruselContentNode();
        },
        skills( bio = {} ){
            return skillsCarruselSlice(bio.skills);
        },
        education( education = {} ){
            return educationCarruselSlice(education.schools, education.onlineCourses);
        }
    };
};

SummaryContent = ( header ) => {
    const summaryContainer = header.querySelector('.summary');
    
    return {
        summary( summaryText = '' ) {
            summaryContainer.innerText = summaryText;
        }
    }
};

FooterContent = ( footer ) => {
    const infoContainer = footer.querySelector('.contact-info');
    
    function contactInfoSection( mobile = '', email = '', location= '' ) {
       infoContainer.querySelector('.mobile').innerText = `Phone: ${mobile}`;
       infoContainer.querySelector('.email').innerText = `Email: ${email}`;
       infoContainer.querySelector('.location').innerText = `Location: ${location}`;
    }
    
    return {
        contactInfo( contacts = {} ) {
            contactInfoSection( contacts.mobile, contacts.email, contacts.location );
        }
    }
    
};

ProjectContent = ( projectContainer ) => {
    
    function projectImg( title, images ) {
        const image = document.createElement('img');
        
        image.setAttribute('src', `${images[0]}`);
        image.setAttribute('srcset', `${images[0]} 1x, ${images[1]} 2x`);
        image.setAttribute('alt', `${title} project`);
        
        return image;
    }
    
    function projectName( title ) {
        const text = document.createElement('h3');
        
        text.innerText = title;
        text.classList.add('uppercase');
        text.classList.add('text-size-big');
        
        return text;
    }
    
    function projectLink( linkText, link ) {
        const a = document.createElement('a');
        
        a.innerHTML = linkText;
        a.setAttribute('target', '_blank');
        a.setAttribute('href', `${link}`);
        
        return a;
    };
    
    function createProject( { title = '', images = [], githubRepo = '', profolioLink = '', color='#fff' } = {} ) {
        const node = document.createElement('div');

        node.classList.add('project');
        node.style.backgroundColor = color;
        node.appendChild( projectImg( title, images ) );
        node.appendChild( projectName( title ) );
        node.appendChild( projectLink( 'github repo link', githubRepo ) );
        node.appendChild( projectLink( 'project link', profolioLink ) );
        
        return node;
        
    }
    
    return {
        createProject( projects = [] ) {
            projects.forEach( project => projectContainer.appendChild(createProject(project)));
        }
    }
};

scrollHandler = ( last_known_scroll_position, pageNav ) => {
    if(last_known_scroll_position > 0){
        pageNav.style.backgroundColor = 'rgb(255, 255, 255)';    
    } else {
        pageNav.style.backgroundColor = 'transparent'; 
    }
   
    return false;
}


window.addEventListener('load', () => {
    const elem = document.querySelector('.carrusel');
    const header = document.querySelector('#page-header');
    const pageNav = document.querySelector('#header-nav');
    const footer = document.querySelector('#page-footer');
    const projects = document.querySelector('.project-container');
    const menuButton = document.querySelector('.menu-button');
    
    const carruselContent = CarruselContent(elem);
    const summaryContent = SummaryContent(header);
    const footerContent = FooterContent(footer);
    const projectContent = ProjectContent(projects);
    
    let last_known_scroll_position = 0;
    let ticking = false;

  
    carruselContent.skills(data.bio);
    carruselContent.education(data.education);
    summaryContent.summary(data.bio.summary);
    footerContent.contactInfo(data.bio.contacts);
    projectContent.createProject(data.projects.projects)
    
    window.addEventListener('scroll', evt => {
        last_known_scroll_position = window.scrollY;
        
        if (!ticking) {
            window.requestAnimationFrame( () => ticking = scrollHandler( last_known_scroll_position, pageNav ));
            ticking = true;           
        }
       
    });
    
    menuButton.addEventListener('click', evt => {
        console.log(evt);
    });

    Object.create(carrusel).init(elem);
});