import React, { FC, useEffect } from 'react';
import { TopNav } from './components/Nav';
import { BrowserRouter, Route, Switch, RouteComponentProps  } from 'react-router-dom';
import routes from './config/routes';


const App = () => {
  useEffect(() => {
    console.log('Loading App')
  }, [])
  return (
    <div className={'w-9/12 mx-auto'}>
      <BrowserRouter>
      <TopNav />
        <Switch>
          {routes.map((route, i) => {
            return (
              <Route 
                key={i}
                path={route.path}
                exact={route.exact}
                render={(props: RouteComponentProps<any>) => (
                  <route.component
                  name={route.name}
                  {...props}
                  {...route.props}
                  />
                )}
              />
            )
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
