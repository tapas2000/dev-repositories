import { useSelector } from "react-redux";
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { RepositoriesScreen } from "../components/profile/repositories/RepositoriesScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    const { isAuthenticated } = useSelector(state => state.auth);
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        path={"/login"}
                        component={LoginScreen}
                        isAuthenticated={isAuthenticated}
                    />
                    <PrivateRoute
                        exact path={"/"}
                        component={ProfileScreen}
                        isAuthenticated={isAuthenticated}
                    />
                    <PrivateRoute
                        path={"/repositories"}
                        component={RepositoriesScreen}
                        isAuthenticated={isAuthenticated}
                    />
                </Switch>
            </div>
        </Router>
    )
}
