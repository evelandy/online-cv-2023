import GulfCoastCorgis from '../images/GulfCoastCorgis.png';
import wrgcv from '../images/wrgcv.png';


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
        image: GulfCoastCorgis,
        title: "GulfCoastCorgis.com",
        description: "A fully functional website built with WordPress, MySQL, HTML, CSS, JavaScript, and placed on the client's custom Linux server running Apache. ",
        tech: ["WordPress", "HTML", "CSS", "MySQL", "JavaScript"],
        links: ["https://github.com/evelandy/", "https://gulfcoastcorgis.com/"],
        className: "project-first"
    },
    {
        image: wrgcv,
        title: "Online Portfolio",
        description: "An updated portfolio built in React.JS, TypeScript, TailWind, CSS, and JavaScript and is maintained through CI/CD via git with the repo on bitbucket. This project is updated regularly.",
        tech: ["React.JS", "TypeScript", "Tailwind", "CSS", "JavaScript"],
        links: ["https://github.com/evelandy/", "https://wrgcv.com/"],
        className: "project-second"
    },
    // {
    //     image: '../images/GulfCoastCorgis.png',
    //     title: "GulfCoastCorgis.com",
    //     description: "A fully functional website built with WordPress, MySQL, HTML, CSS, JavaScript, and placed on the client's custom Linux server running Apache. ",
    //     tech: ["WordPress", "HTML", "CSS", "MySQL", "JavaScript"],
    //     links: ["https://github.com/evelandy/", "https://gulfcoastcorgis.com/"],
    //     className: "project-third"
    // },
]

export default projects;
