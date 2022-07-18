import { FormLogin } from "./FormLogin"
import { FormSigin } from "./FormSigin";

export const LoginScreen = () => {


    return (
        <div className="container">
            <div className="row mt-5">
                
                <div className="col">
                    <FormLogin />
                </div>
                
                <div className="col">
                    <FormSigin />
                </div>
            </div>
        </div>
    )
}
