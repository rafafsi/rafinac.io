import { Link } from "react-router-dom";

const Card = ({ name, url, description, image }) => {
  return (
    <div className="card card-image">
      <img src={image} className="card-img-top " alt={description} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <Link
          to={{ pathname: url }}
          target="_blank"
          className="btn btn-primary"
        >
          See the code!
        </Link>
      </div>
    </div>
  );
};

export default Card;
