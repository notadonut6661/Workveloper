import './style.scss';
export default function DropdownBody(): JSX.Element {
    return (<div className={'DropdownBody Find'}>
        <ul>
            <li id={'Employee'}><a href={'Employee'}>Looking for new qualified employees</a></li>
            <li id={'Worker'}><a href={'Employee'}>Need a project to work on</a></li>

        </ul>
        <div className={'Image'}>
            <div></div>
        </div>
    </div>);
}