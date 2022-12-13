const ProjectsData = [
    {
        id: 1,
        name: 'Cycle Health',
        category: 'MERN stack website.',
        technologies: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB", "Stripe", "Firebase", "Heroku"],
        images: {
            img1: 'https://i.ibb.co/WKVHQ01/ch-img-1.png',
            img2: 'https://i.ibb.co/3z2wk40/ch-img-2.png',
            img3: 'https://i.ibb.co/Ln8v5QJ/ch-img-3.png',
        },
        description: "Website for a cycle repair shop. Users can purchase services with stripe payment, give reviews and check their order status. Admins can control the site from the dashboard, such as add new services, new admin, manage order status and reviews. For authentication firebase login system and JWT token is used.",
        clientSite: 'https://github.com/motiullahsajit/Cycle-Health-Clientt',
        liveSite: 'https://cycle-health.web.app/',
        serverSite: 'https://github.com/motiullahsajit/Cycle-Health-Server',
    },
    {
        id: 2,
        name: 'Daily Grocery',
        category: 'MERN stack website',
        technologies: ["React", "Bootstrap", "Node.js", "Express.js", "MongoDB","Firebase", "Heroku"],
        images: {
            img1: 'https://i.ibb.co/DPB9ppx/ec-img-1.png',
            img2: 'https://i.ibb.co/6Hd0xqX/ec-img-2.png',
            img3: 'https://i.ibb.co/2kGxbNV/ec-img-3.png',
        },
        description: "E-commerce store website. Users can order products and check their order history. Admin can add, update and delete products. To authenticate user firebase login system is used.",
        clientSite: 'https://github.com/motiullahsajit/Daily-Grocery-Client',
        liveSite: 'https://daily-grocery-b2c1c.web.app/',
        serverSite: 'https://github.com/motiullahsajit/Daily-Grocery-Server'
    },
    {
        id: 3,
        name: 'Awesome Transport',
        category: 'React website',
        technologies: ["React","React-router", "Bootstrap","React-google-map", "Firebase"],
        images: {
            img1: 'https://i.ibb.co/MG8Hypr/at-img-1.png',
            img2: 'https://i.ibb.co/0CzVgk9/at-img-2.png',
            img3: 'https://i.ibb.co/x2xHwPb/at-img-3.png',
        },
        description: "This is a Ride Sharing website. Users can book ride with the location and the package they want. The location distance will be shown on the google map.",
        clientSite: 'https://github.com/motiullahsajit/Awesome-Transport',
        liveSite: 'https://awesome-transport.web.app/'
    }
]

export default ProjectsData;