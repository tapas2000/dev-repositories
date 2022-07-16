import { useState } from "react";
import { useForm } from "../../hooks/useForm";
import { FormLogin } from "./FormLogin"

export const LoginScreen = () => {

    // const dispatch = useDispatch();
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
        // dispatch(login(formLoginValue.lEmail, formLoginValue.lPassword))
    }

    const handleSigin = (e) => {
        e.preventDefault();
        // dispatch(login(formLoginValue.lEmail, formLoginValue.lPassword))
    }

    return (
        <div className="container">
            <div class="row mt-5">
                
                <div class="col">
                    <FormLogin
                        title={"Login"}
                        formValues={formLoginValue}
                        handleChange={handleLoginInputChange}
                        handleSubmit={handleLogin}
                        isLogin={true}
                        textButton={"Log in"}
                    />
                </div>
                
                <div class="col">
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
