import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";

//Layouts
import NonAuthLayout from "../Layouts/NonAuthLayout";
import VerticalLayout from "../Layouts/index";
//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import { AuthProtected, AccessRoute } from "./AuthProtected";

const Index = () => {
  const availablePublicRoutesPaths = publicRoutes.map((r) => r.path);
  const availableAuthRoutesPath = authProtectedRoutes.map((r) => r.path);
  const location = useLocation();
  console.log(location);
  return (
    <React.Fragment>
      <Switch>
        <Route path={availablePublicRoutesPaths}>
          <NonAuthLayout>
            <Switch>
              {publicRoutes.map((route, idx) => (
                <Route
                  path={route.path}
                  component={route.component}
                  key={idx}
                  exact={true}
                />
              ))}
            </Switch>
          </NonAuthLayout>
        </Route>

        <Route path={availableAuthRoutesPath}>
          <AuthProtected>
            <VerticalLayout>
              <Switch>
                {authProtectedRoutes.map((route, idx) => (
                  <AccessRoute
                    path={route.path}
                    component={route.component}
                    key={idx}
                    exact={true}
                  />
                ))}
              </Switch>
            </VerticalLayout>
          </AuthProtected>
        </Route>
        <Route path={"/"} exact={true}>
          <Redirect to="/landing" />
        </Route>
      </Switch>
    </React.Fragment>
  );
};

export default Index;
