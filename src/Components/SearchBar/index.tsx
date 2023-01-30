import './style.scss';
import searchIcon from '../../assets/search.png';

interface SearchBarProps {
    placeholder?: string;
}

export default function SearchBar({placeholder}: SearchBarProps): JSX.Element {
    return (<div  className={'SearchBarParent'}>
            <div className={'SearchBar'}>
                <input
                    type={'text'}
                    className={'SearchQueryField'} placeholder={placeholder ?? ''}/>
            </div>
            <button id={'Submit'}>
                <img src={searchIcon} alt={'Search'} />
            </button>
        </div>)
}