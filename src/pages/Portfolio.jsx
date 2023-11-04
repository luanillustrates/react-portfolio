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
    info: 'A group project implenting both front and back end development',
    image: delt,
    link: 'https://delt-fitness-e-commerce-36c3e8da33f5.herokuapp.com/',
    repo: 'https://github.com/Staroyee/delt-supplements',
    tag: 'full-stack',
  },
  {
    title: 'Text Editor',
    info: 'Showcasing PWA',
    image: jate,
    link: 'https://pwa-text-editor-install-4943d17f6d17.herokuapp.com/',
    repo: 'https://github.com/luanillustrates/PWA-text-editor',
    tag: 'PWA',
  },
  {
    title: 'Recipe Radar',
    info: 'A group project',
    image: recipe,
    link: 'https://jujusoi.github.io/Project-1/index.html',
    repo: 'https://github.com/jujusoi/Project-1',
    tag: 'API',
  },
  {
    title: 'Weather Dashboard',
    info: 'Utilising third party APIs',
    image: weather,
    link: 'https://luanillustrates.github.io/luantran_wk06_weatherdash/',
    repo: 'https://github.com/luanillustrates/luantran_wk06_weatherdash',
    tag: 'API',
  },
  {
    title: 'Prototype Portfolio',
    info: 'One of the first assignments implenting learnt code',
    image: prototype,
    link: 'https://luanillustrates.github.io/luantran_wk02_challenge/',
    repo: 'https://github.com/luanillustrates/luantran_wk02_challenge',
    tag: 'basics',
  },
  {
    title: 'Employee Tracker',
    info: 'SQL assignment',
    image: tracker,
    repo: 'https://github.com/luanillustrates/SQL_employee.tracker',
    tag: 'SQL',
  },
];

export default function Portfolio() {
  return (
    <>
      <h1 className="mb-5 text-9xl font-bold">Portfolio</h1>
      <div className="container flex flex-wrap justify-center">
        <Project
          title={projects.title}
          info={projects.info}
          image={projects.image}
          link={projects.link}
          repo={projects.repo}
          tag={projects.tag}
        />
      </div>
    </>
  );
}
