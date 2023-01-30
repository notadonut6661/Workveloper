import Navbar from "../../Components/Navbar";
import './style.scss';
import AnnouncementFilters from "./AnnouncementFilters";

export default function Announcements(): JSX.Element {
    return <div id={'Announcements'}>
        <div id={'main-content'}>
            <AnnouncementFilters/>
        </div>
        <Navbar />

    </div>
}