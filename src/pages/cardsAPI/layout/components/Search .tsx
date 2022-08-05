import React, { useEffect, useState } from 'react';
interface Iprops {
  enterHandler(search: string, type: string, page: string): any;
}

function Search(props: Iprops) {
  const row = localStorage.getItem('inputSearch') as string;
  const rowtype = localStorage.getItem('typeSearch') as string;
  const rowpage = localStorage.getItem('pageSearch') as string;

  const [search, setSearch] = useState(JSON.parse(row) || '');

  const [type, setType] = useState(JSON.parse(rowtype) || 'all');

  const initialCount = 1;

  const [page, setPage] = useState(JSON.parse(rowpage) || initialCount);

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      props.enterHandler(search, type, page);
      localStorage.setItem('inputSearch', JSON.stringify(search));
    }
  };

  useEffect(() => {
    props.enterHandler(search, type, page);
    localStorage.setItem('pageSearch', JSON.stringify(page));
    localStorage.setItem('typeSearch', JSON.stringify(type));
  }, [type, page]);

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          className="row-input-serch"
          type="text"
          value={search}
          checked
          onChange={(event) => setSearch(event.target.value)}
          onKeyUp={handleEnter}
          placeholder="Enter"
        />
      </div>
      <p>
        <label>
          <input
            type="radio"
            name="type"
            value="all"
            onChange={(event) => setType(event.target.value)}
            className="with-gap"
            checked={type === 'all'}
          />
          <span>All</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="movie"
            onChange={(event) => setType(event.target.value)}
            className="with-gap"
            checked={type === 'movie'}
          />
          <span>Movies only</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="series"
            onChange={(event) => setType(event.target.value)}
            className="with-gap"
            checked={type === 'series'}
          />
          <span>Series only</span>
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="game"
            onChange={(event) => setType(event.target.value)}
            className="with-gap"
            checked={type === 'game'}
          />
          <span>Game</span>
        </label>
      </p>
      <div className="page-title">
        <h5>Страница: {page}</h5>
        <button className="page-title__btn-reset btn-mod" onClick={() => setPage(initialCount)}>
          Сбросить
        </button>
        <button
          className="page-title__btn-up btn-mod"
          onClick={() =>
            setPage((prevCount: number) => (prevCount <= 1 ? prevCount : prevCount - 1))
          }
        >
          -
        </button>
        <button
          className="page-title__btn-down btn-mod"
          onClick={() => setPage((prevCount: number) => prevCount + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Search;
