import { Nav } from 'react-bootstrap';
import { Routes, Route, Link } from 'react-router-dom';
import './App.scss';
import About from './pages/About/about';
import ReactForm from './pages/React-forms/forms';
import NotFound from './pages/NotFound/NotFound';
import { Button } from 'react-bootstrap';
import React from 'react';
import MeinAPI from './pages/cardsAPI/mainAPI-page';
import PageCards from './pages/cardsAPI/layout/components/page/pageCards';
import Movie from './pages/cardsAPI/layout/components/Movie';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Link to="/">
              <Button variant="outline-info">React. API</Button>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/about">
              <Button variant="outline-info">About</Button>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/reactForm">
              <Button variant="outline-info">Form</Button>
            </Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Link to="/Movie">
              <Button variant="outline-info">Movie</Button>
            </Link>
          </Nav.Item> */}
        </Nav>
        <Routes>
          <Route path="/" element={<MeinAPI />} />
          <Route path="about" element={<About />} />
          <Route path="reactForm" element={<ReactForm />} />
          <Route path="Movie" element={<Movie />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    );
  }
}

export default App;
