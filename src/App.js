import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./screens/Home";
import Search from "./screens/Search";
import Provider, {MyContext} from "./Provider/";
import './App.css';


class MyReadsApp extends React.Component {
  render() {
      return (
          <div className="app">
              <Provider>
                  <Switch>
                      <Route
                          exact
                          path={"/"}
                          render={() => (
                          <MyContext.Consumer>
                                {context => <Home {...context} />} 
                          </MyContext.Consumer> 
                          )}
                         />
                      <Route
                          exact
                          path={"/Search"}
                          render={() => (
                              <MyContext.Consumer>
                                  {context => <Search {...context} />}
                              </MyContext.Consumer>
                          )}
                      />
                  </Switch>
              </Provider>
          </div>
      );
  }
}

export default MyReadsApp
