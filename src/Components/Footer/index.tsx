import './style.scss';
// Footer must have:
// Follow us row which contains links to social media

export default function Footer() {
    return (<footer>
        <div className={'Follow-us'}>
            <span>Follow us on social media:</span>
            <ul>
               <li>
                   <a href={'https://www.facebook.com/'} target="_blank" id={'facebook'}>
                        Facebook
                    </a>
               </li>
                <li>
                    <a href={'https://www.youtube.com/'} target="_blank" id={'youtube'}>
                        Youtube
                    </a>
                </li>
            </ul>
        </div>
        <div className={'FAQ'}>
            <a href={'/FAQ'} target={'_blank'}>
                FAQ
            </a>
        </div>
    </footer>)
}