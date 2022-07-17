import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";
import { FormLogin } from "./FormLogin"

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const [formLoginValue, handleLoginInputChange] = useForm({
        email: 'felipe@gmail.com',
        password: '123456'
    });

    const [formSiginValue, handleSiginInputChange] = useForm({
        email: 'felipe@gmail.com',
        password: '123456'
    });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(formLoginValue.email, formLoginValue.password))
    }

    const handleSigin = (e) => {
        e.preventDefault();
        // dispatch(login(formLoginValue.lEmail, formLoginValue.lPassword))
    }

    return (
        <div className="container">
            <div className="row mt-5">
                
                <div className="col">
                    <FormLogin
                        title={"Login"}
                        formValues={formLoginValue}
                        handleChange={handleLoginInputChange}
                        handleSubmit={handleLogin}
                        isLogin={true}
                        textButton={"Log in"}
                    />
                </div>
                
                <div className="col">
                    <FormLogin
                        title={"Sigin"}
                        formValues={formSiginValue}
                        handleChange={handleSiginInputChange}
                        handleSubmit={handleSigin}
                        isLogin={false}
                        textButton={"Sign in"}
                    />
                </div>
            </div>
        </div>
    )
}
