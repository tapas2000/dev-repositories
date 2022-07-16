import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { LoginScreen } from "../components/auth/LoginScreen";
import { ProfileScreen } from "../components/profile/ProfileScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {

    // const { authenticated } = useSelector(state => state.auth);
    const isAuthenticated = false;

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
                        path={"/"}
                        component={ProfileScreen}
                        isAuthenticated={isAuthenticated}
                    />
                </Switch>
            </div>
        </Router>
    )
}
