import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';
import DetailMusic from './containers/DetailMusic';
import FilterMusic from './containers/FilterMusic';
import FilterSinger from './containers/FilterSinger';
import PostGenre from './containers/PostGenre';
import PostMusic from './containers/PostMusic';
import PostSinger from './containers/PostSinger';
import ShowMusic from './containers/ShowMusic';

function App() {
  return (
    <Router>
      <div className="topnav">
        <ul className="box">
          <li>
            <Link className="list" to="/">HOME</Link>
          </li>
          <li>
            <Link className="list" to="/post/music">NEW MUSIC</Link>
          </li>
          <li>
            <Link className="list" to="/post/singer">NEW SINGER</Link>
          </li>
          <li>
            <Link className="list" to="/post/genre">NEW GENRE</Link>
          </li>
        </ul>
      </div>
          
        <Route path="/" exact component={ShowMusic} />
        <Route path="/post/music" component={PostMusic} />
        <Route path="/post/genre" component={PostGenre} />
        <Route path="/genre/:id" component={FilterMusic} />
        <Route path="/singer/:id" component={FilterSinger} />
        <Route path="/post/singer" component={PostSinger} />
        <Route path="/detail/:id" component={DetailMusic} />
    </Router>
  );
}

export default App;
