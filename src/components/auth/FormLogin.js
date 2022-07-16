
export const FormLogin = ({ title, formValues, handleChange, handleSubmit, textButton, isLogin }) => {

    const styleForLogin = {
        backgroundColor: "#3AB4F2",
    }

    return (
        <div
            className="card"
            style={isLogin ? styleForLogin : {}}
        >
            <div className='card-body'>
                <h2>{title}</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            name="password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className={`btn ${isLogin ? "btn-light" : "btn-primary"}`}>{textButton}</button>
                </form>
            </div>
        </div>
    )
}
