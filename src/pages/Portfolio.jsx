import Project from '../components/Project';

import delt from '../assets/images/delt.jpg';
import jate from '../assets/images/jate.jpg';
import recipe from '../assets/images/recipe.jpg';
import weather from '../assets/images/weather.jpg';
import prototype from '../assets/images/prototype.jpg';
import tracker from '../assets/images/tracker.jpg';

const projects = [
  {
    title: 'DELT Fitness',
    info: 'A group project implenting both front and back end development. This MVP application is an e-commerce website.',
    image: delt,
    alt: 'DELT Fitness UI',
    link: 'https://delt-fitness-e-commerce-36c3e8da33f5.herokuapp.com/',
    repo: 'https://github.com/Staroyee/delt-supplements',
    tag: 'full-stack',
  },
  {
    title: 'Text Editor',
    info: 'Showcasing my learnings of PWA with a text editing application.',
    image: jate,
    alt: 'text editor interface',
    link: 'https://pwa-text-editor-install-4943d17f6d17.herokuapp.com/',
    repo: 'https://github.com/luanillustrates/PWA-text-editor',
    tag: 'PWA',
  },
  {
    title: 'Recipe Radar',
    info: 'A group project where we had to implement third-party APIs and put our HTML, CSS and JS skills to the test.',
    image: recipe,
    alt: 'Recipe Radar homepage',
    link: 'https://jujusoi.github.io/Project-1/index.html',
    repo: 'https://github.com/jujusoi/Project-1',
    tag: 'API',
  },
  {
    title: 'Weather Dashboard',
    info: 'Working with a third-party API to create a weather dashboard.',
    image: weather,
    alt: 'weather dashboard of city',
    link: 'https://luanillustrates.github.io/luantran_wk06_weatherdash/',
    repo: 'https://github.com/luanillustrates/luantran_wk06_weatherdash',
    tag: 'API',
  },
  {
    title: 'Prototype Portfolio',
    info: 'One of the first assignments implenting learnt HTML and CSS code.',
    image: prototype,
    alt: 'splash page portfolio',
    link: 'https://luanillustrates.github.io/luantran_wk02_challenge/',
    repo: 'https://github.com/luanillustrates/luantran_wk02_challenge',
    tag: 'HTML + CSS',
  },
  {
    title: 'Employee Tracker',
    info: 'A CLI application utilising SQL knowledge.',
    image: tracker,
    alt: 'CLI interface',
    repo: 'https://github.com/luanillustrates/SQL_employee.tracker',
    tag: 'SQL',
  },
];

export default function Portfolio() {
  return (
    <>
      <h1 className="mb-5 text-9xl font-bold">Portfolio</h1>
      <div className="container mx-auto flex flex-wrap justify-center">
        {projects.map((project) => {
          return (
            <Project
              title={project.title}
              info={project.info}
              image={project.image}
              link={project.link}
              repo={project.repo}
              tag={project.tag}
            />
          );
        })}
      </div>
    </>
  );
}
