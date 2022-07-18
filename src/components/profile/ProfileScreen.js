import { useSelector } from "react-redux";

export const ProfileScreen = () => {
    const { name, nickname } = useSelector(state => state.auth);
    return (
        <div className="container">
            <h1>Hello {name} </h1>
            <p>This is a simple Single App made with ReactJs, if you click on "Repositories" you will find a small dashboard of yours repositories</p>
            <p><strong>Be aware</strong> You nickname "{nickname}" is really important to make this page works</p>
        </div>
    )
}
