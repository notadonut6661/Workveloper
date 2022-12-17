import './style.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

// Footer must have:
// Follow us row which contains links to social media

export default function Footer() {
    return (<footer>
        <div className={'Follow-us'}>
            {/*<span>Follow us on social media:</span>*/}
            <div>
                <a href={'https://www.facebook.com/'} target="_blank" id={'facebook'}>
                    <FontAwesomeIcon icon={faCoffee} />
                </a>
                <a href={'https://www.youtube.com/'} target="_blank" id={'youtube'}></a>
            </div>
        </div>
    </footer>)
}