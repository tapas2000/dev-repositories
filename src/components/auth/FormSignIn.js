import { useDispatch } from "react-redux";
import { register } from "../../actions/auth";
import { useForm } from "../../hooks/useForm";

export const FormSignIn = ({ changeForm }) => {

    const dispatch = useDispatch();
    const [formValues, handleChange] = useForm({
        email: 'felipe@gmail.com',
        password: '123456',
        name: 'Juan',
        nickname: 'tapas2000'
    });

    const handleSigin = (e) => {
        e.preventDefault();
        dispatch(register(formValues));
        changeForm();
    }

    return (
        <div>
            <h2>Sign in</h2>
            <form onSubmit={handleSigin}>
                <div className="mb-3">
                    <label htmlFor={`exampleInputname1sigin`} className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id={`"exampleInputname1sigin"`}
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor={`exampleInputnickname1sigin`} className="form-label">Nick name</label>
                    <input
                        type="text"
                        className="form-control"
                        id={`"exampleInputnickname1sigin"`}
                        name="nickname"
                        value={formValues.nickname}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor={`exampleInputEmail1sigin`} className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id={`"exampleInputEmail1sigin"`}
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor={`exampleInputPassword1sigin`} className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id={`exampleInputPassword1sigin}`}
                        name="password"
                        value={formValues.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="d-flex mb-3">
                    <button type="submit" className={`btn btn-primary`}>Sig in</button>
                    <span
                        className={`nav-link`}
                        onClick={changeForm}
                        style={{
                            cursor: "pointer"
                        }}>
                        I have an account
                    </span>
                </div>
            </form>
        </div>
    )
}
