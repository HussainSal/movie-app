import React, { Suspense } from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context';

import Main from './components/UI/Main';
import Nav from './components/Nav/Nav';
import Trending from './pages/Trending';
import DiscoverMovies from './pages/DiscoverMovies';
import DiscoverTvSeries from './pages/DiscoverTvSeries';
import Search from './pages/Search';

const Specific = React.lazy(() => import('./pages/Specific'));
const NotFound = React.lazy(() => import('./components/UI/NotFound'));

function App() {


  return (
    <div id="App" className="App">
      <Main>
        <Route path="/">
          <Nav />
        </Route>
        <Route path="/" exact>
          <Redirect to="/trending" />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>

        <AuthContextProvider>
          <Route path="/movies" exact>
            <DiscoverMovies />
          </Route>
          <Route path="/tvseries" exact>
            <DiscoverTvSeries />
          </Route>
          <Route path="/search" exact>
            <Search />
          </Route>
        </AuthContextProvider>

        <Suspense fallback={''}>
          <Route path="/:type/:movieId" exact>
            <Specific />
          </Route>
          <Route path="/:type/:movieId/notfound">
            <NotFound />
          </Route>
        </Suspense>

      </Main>

    </div>
  );
}

export default App;


// super Dark Grey : #1a1a1a
// mediumGrey: #828282