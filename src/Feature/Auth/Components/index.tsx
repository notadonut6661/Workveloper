import Navbar from "../../../Components/Navbar";
import './style.scss';
import LoginWindow from "./LoginWindow";

export default function AuthComponent() {
    return (<div id={'login'}>
        <div id={'main-content'}>
            <LoginWindow/>
        </div>
        <Navbar/>
    </div>)
}