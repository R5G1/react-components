import { useEffect, useState } from 'react';
import Movie from './components/Movie';
import Movies from './components/Movies';
import Search from './components/Search ';

function Main() {
  const [show, setShow] = useState('index');
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  const handleEnter = function (search: string, type: string, page: string) {
    if (search.trim() === '') return;
    setShow('search');
    search = encodeURIComponent(search);
    let url = `http://www.omdbapi.com/?apikey=5f29dc7d&s=${search}&page=${page}`;

    localStorage.setItem('searchLink', JSON.stringify(url + `&type=${type}`));

    if (type !== 'all') {
      url = url + `&type=${type}`;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search ? data.Search : []);
        setLoading(false);
      });
  };

  const handleReadMore = function (id: object) {
    setLoading(true);
    setShow('movie');
    fetch(`http://www.omdbapi.com/?apikey=5f29dc7d&i=${id}&plot=full`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data.Title ? data : {});
        setLoading(false);
      });
  };

  useEffect(() => {
    const row = localStorage.getItem('searchLink') as string;
    fetch(JSON.parse(row) || 'http://www.omdbapi.com/?apikey=5f29dc7d&s=max&page=1')
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.Search ? data.Search : []);
        setLoading(false);
      });
  }, []);

  return (
    <main className="container">
      <Search enterHandler={handleEnter} />
      {loading ? (
        <div className="loader">Загрузка...</div>
      ) : show === 'movie' ? (
        <Movie {...movie} />
      ) : (
        <Movies movies={movies} readMoreHandler={handleReadMore} />
      )}
    </main>
  );
}

export default Main;
