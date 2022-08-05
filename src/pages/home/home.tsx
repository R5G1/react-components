import React from 'react';

import SearchAppBar from './serch-components/searchBar';
import Cards from './cards-components/cards';
class Home extends React.Component {
  render() {
    return (
      <>
        <main className="container-main">
          <h2>Welcome to the homepage!</h2>

          <div className="container-search-bar">
            <div className="search-bar">
              <SearchAppBar />
            </div>
          </div>
          <div className="container-cards">
            <div>
              <Cards />
            </div>
          </div>
        </main>
      </>
    );
  }
}
export default Home;
