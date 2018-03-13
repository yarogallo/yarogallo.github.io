const data = (function() {
    return {
        bio: {
            name: "Yanisleidi Rodriguez",
            role: "Front-End Web Developer",
            contacts: {
                mobile: "786-720-5357",
                email: "yaroga88@yahoo.com",
                twitter: "@yrgallo88",
                github: "yarogallo",
                location: "San Francisco"
            },
            welcomeMessage: "Hard way learner web enthusiast who work well independently but loves being part of  a team environment, fast learner and experienced team player with good communication and interpersonal skills.",
            skills: ["Convert PSD designs into mobile-first, cross-browser responsive HTML templates",
                "Test websites in multiple scenarios to ensure responsiveness, good performance and cross-browser compatibility.",
                "Vanilla JS and MV* frameworks",
                "Performance optimization and measurements",
                "Frontend build tools",
                "Manage change on source code using Git and the different Git flows",
                "Basic knowledge of Object Oriented Programming"

            ],
            biopic: "images/yani.jpg"
        },

        education: {
            schools: [{
                name: "Central University Martha Abreu of Las Villas",
                location: "Santa Clara, Cuba",
                degree: "Computer Science",
                majors: ["Bachelor"],
                dates: "2006-2011",
                url: "http://www.uclv.edu.cu/",
            }],
            onlineCourses: [{
                title: "React Nanodegree Program",
                school: "Udacity",
                dates: "in progress",
                url: "www.udacity.com"
            }, {
                title: "Front-End Web Developer Nanodegree Program",
                school: "Udacity",
                dates: "20017-2018",
                url: "www.udacity.com"
            }, {
                title: "Front-end Foundations",
                school: "Code School",
                dates: "March-2016",
                url: "www.codeschool.com"
            }, {
                title: "Front-end Formations",
                school: "Code School",
                dates: "March-2016",
                url: "www.codeschool.com"
            }, {
                title: "CSS Cross-Country",
                school: "Code School",
                dates: "June-2016",
                url: "www.codeschool.com"
            }]
        },

        work: {
            jobs: [{
                employer: "Information Services, Ministry of Transport",
                title: "Software Engineer",
                location: "Villa Clara, Cuba",
                dates: "2013-2016",
                description: `Gathered, defined and specified client requirements for customized Websites. Organized workshops to present  software products and train users.
							Solved Bugs reported from clients within the current applications.
							Collaborated with senior software engineers to develop web applications.
							Participated in software tested, release and deployment period.`
            }, {
                employer: "Jose Marti University",
                title: "Software Engineer",
                location: "Santi Spiritus, Cuba",
                dates: "2011-2013",
                description: `Created presentations to introduce new software products.
							Tested new software products to identify and resolve any performance issues.
							Trained users across the campus in how use and install software applications.
							Tutored  students in web applications final projects.`
            }, {
                employer: "Vision Works",
                title: "Lorem ipsum dolo.",
                location: "Miami, Florida",
                dates: "Lorem-ipsu",
                description: `string description3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi
							Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi
							Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.`
            }]
        },

        projects: {
            projects: [{
                title: "Arcade Game.",
                dates: "2017",
                description: "The player have to do five rounds from the land to the sea. In order to win the game, the player need to finish the rounds with an score equal or over 1000 points. Anytime the player hit an enemy, the score will be decremented 100 points, if the score became negative, the game automatically finish and the player loses. The player can pick up gems on his way to the sea, each gem has an specific value, when the player pick up a gem, the score will be incremented depending on the gem value.There are also some rocks on the player way, they are not a big deal but, the player can not pass trought them",
                images: ["images/arcadegame1.png", "images/arcadegame2.png", "images/arcadegame3.png"]
            }, {
                title: "Lorem ipsum dolor sit amet.",
                dates: "Lorem-ipsu",
                description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
                images: ["images/project.jpg", "images/project1.jpg", "images/project2.jpg"]
            }, {
                title: "Lorem ipsum dolor sit.",
                dates: "Lorem-ipsu",
                description: "project description Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh.",
                images: ["images/project.jpg", "images/project1.jpg", "images/project2.jpg"]
            }]
        }
    };
})();