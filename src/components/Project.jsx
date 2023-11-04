import { PropTypes } from 'prop-types';

function Project({ title, info, image, link, repo, tag }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="portfolio item" />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-outline">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              Github repo
            </a>
          </div>
        </h2>
        <p>{info}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{tag}</div>
        </div>
      </div>
    </div>
  );
}

Project.PropTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};

export default Project;
