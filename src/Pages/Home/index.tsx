import './style.scss';
import Navbar from "../../Components/Navbar";
import SignUpWindow from "./SignUp";

export default function Home()  {

    return (<>
        <div id={'main-content'}>
            <SignUpWindow />
        </div>
        <Navbar />
    </>)
}