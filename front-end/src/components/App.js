import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import GlobalStyle from '../assets/styles/globals';
import Header from './Header/Header';

import HomePage from './HomePage';
import PostShowPage from './PostShowPage/PostShowPage';
import PostEditPage from './PostEditPage';
import NewStoryPage from './NewStoryPage';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/posts/:postId" exact>
          <PostShowPage />
        </Route>

        <Route path="/posts/:postId/edit" exact>
          <PostEditPage />
        </Route>

        <Route path="/new-story" exact>
          <NewStoryPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
