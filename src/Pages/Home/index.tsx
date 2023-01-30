import './style.scss';
import Navbar from "../../Components/Navbar";
import SignUpWindow from "./SignUp";
import Footer from "../../Components/Footer";

export default function Home()  {

    return (<div id={'Home'}>
        <Footer />
        <div id={'main-content'}>
            <SignUpWindow />
        </div>
        <Navbar />
    </div>)
}