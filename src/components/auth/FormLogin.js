import { useDispatch } from "react-redux";
import { login } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const FormLogin = () => {

    const dispatch = useDispatch();
    const [formValues, handleChange] = useForm({
        email: 'felipe@gmail.com',
        password: '123456'
    });

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(login(formValues))
    }

    const styleForLogin = {
        backgroundColor: "#3AB4F2",
    }

    return (
        <div
            className="card"
            style={styleForLogin}
        >
            <div className='card-body'>
                <h2>Sig in</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor={`exampleInputEmail1login`} className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id={`"exampleInputEmail1login"`}
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor={`exampleInputPassword1login`} className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id={`exampleInputPassword1login`}
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className={`btn btn-light`}>Sig in</button>
                </form>
            </div>
        </div>
    )
}
