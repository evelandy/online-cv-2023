import GulfCoastCorgis from '../images/GulfCoastCorgis.png'

export interface ProjectData {
    image?: string;
    title?: string;
    description?: string;
    tech?: Array<string>,
    links?: string[];
    className?: string;
}

const projects: ProjectData[] = [
    {
        image: '../images/GulfCoastCorgis.png',
        title: "GulfCoastCorgis.com",
        description: "A fully functional website built with WordPress, MySQL, HTML, CSS, JavaScript, and placed on the client's custom Linux server running Apache. ",
        tech: ["WordPress", "HTML", "CSS", "MySQL", "JavaScript"],
        links: ["https://github.com/evelandy/", "https://gulfcoastcorgis.com/"],
        className: "project-first"
    },
    {
        image: "na",
        title: "Another Project",
        description: "This is another project that will go here and this is the description.",
        tech: ["HTML", "CSS", "React.JS", "Python", "JavaScript"],
        links: ["https://github.com/evelandy/"],
        className: "project-second"
    },
    {
        image: '../images/GulfCoastCorgis.png',
        title: "GulfCoastCorgis.com",
        description: "A fully functional website built with WordPress, MySQL, HTML, CSS, JavaScript, and placed on the client's custom Linux server running Apache. ",
        tech: ["WordPress", "HTML", "CSS", "MySQL", "JavaScript"],
        links: ["https://github.com/evelandy/", "https://gulfcoastcorgis.com/"],
        className: "project-third"
    },
]

export default projects;
