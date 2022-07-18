import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startChecking } from "../../actions/auth";
import { FormLogin } from "./FormLogin"
import { FormSignIn } from "./FormSignIn";

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [isLogIn, setIsLogIn] = useState(true);
    const changeForm = () => {
        setIsLogIn(!isLogIn);
    }
    const validateStorage = () => {
        dispatch(startChecking());
    }
    useEffect(() => {
        validateStorage();
    })


    return (
        <div className="container">
            <div className="position-absolute top-50 start-50 translate-middle card p-3">
                {
                    isLogIn
                        ?
                        <FormLogin changeForm={changeForm} />
                        :
                        <FormSignIn changeForm={changeForm} />
                }
            </div>
        </div>
    )
}
