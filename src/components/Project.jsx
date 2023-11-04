import { PropTypes } from 'prop-types';

export default function Project({ title, info, image, alt, link, repo, tag }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5">
      <figure>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={alt} />
        </a>
      </figure>
      <div className="card-body">
        <h2 className="card-title py-1">{title}</h2>
        <div className="badge badge-outline">{tag}</div>
        <p className="py-3">{info}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary p-4">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              Github repo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

Project.PropTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string,
  repo: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};
