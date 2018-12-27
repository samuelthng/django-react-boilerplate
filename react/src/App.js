import React, { lazy, Suspense, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';

// Redux Store Config
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
const middlewareChain = applyMiddleware(thunk);
const devToolsChain = composeWithDevTools(middlewareChain);
const store = createStore(rootReducer, devToolsChain);

// Utilities
const CSRF = lazy(() => import('./utils/CSRF'));
const Title = lazy(() => import('./utils/Title'));
const ErrorBoundary = lazy(() => import('./utils/ErrorBoundary'));
// const StoreLog = lazy(() => import('./utils/StoreLog'));

// Views
const Landing = lazy(() => import('./views/Landing'));
const Error404 = lazy(() => import('./views/Error404'));

const App = () =>
  <Provider store={store}>
    <Fragment>
      <Suspense fallback={<h2>Loading...</h2>}>

        <ErrorBoundary>
          {/* Browser Utilities */}
          <CSRF />
          <Title />
          {/* <StoreLog /> */}

          {/* User Interface */}
          <Router>
            <Switch>
              {/* Landing Page */}
              <Route path='/' exact component={Landing} />

              {/* No-Match Catch-all */}
              <Route component={Error404} />
            </Switch>
          </Router>

        </ErrorBoundary>
      </Suspense>
    </Fragment>
  </Provider>;

// eslint-disable-next-line no-undef
export default hot(module)(App);
