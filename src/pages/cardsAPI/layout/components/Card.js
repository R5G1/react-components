import { Routes, Route, Link } from 'react-router-dom';

function Card(props) {
  const { Title, Year, imdbID, Type, Poster } = props;
  const text = Title.replace(/^a-z0-9 /i, '').replace(/\s/, '+');
  function sek() {
    props.readMoreHandler(imdbID);
  }
  // if (onClick) {
  //   props.readMoreHandler(imdbID);
  // }
  return (
    <div
      className="right"
      onClick={() => {
        <Link to="/">{props.readMoreHandler(imdbID)}</Link>;
      }}
    >
      <div id={'movie-' + imdbID} className="card">
        <div className="card-image waves-effect waves-block waves-light">
          {Poster !== 'N/A' ? (
            <img className="activator" src={Poster} alt="" />
          ) : (
            <img
              className="activator"
              src={`https://via.placeholder.com/300x430.png?text=${text}`}
              alt=""
            />
          )}
        </div>
        <div className="card-content">
          <h3 className="card-title activator grey-text text-darken-4">{Title} </h3>
          <p>
            popooo
            <span>
              {Year}, {Type}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
