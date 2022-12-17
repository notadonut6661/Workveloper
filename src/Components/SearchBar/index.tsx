import './style.scss';
import searchIcon from '../../assets/search.png';

export default function SearchBar({placeholder}: {placeholder?: string}): JSX.Element {
    return (<div  className={'SearchBarParent'}>
            <div className={'SearchBar'}>
                <input
                    type={'text'}
                    className={'SearchQueryField'} placeholder={placeholder ?? ''}/>
            </div>
            <button id={'Submit'}>
                <img src={searchIcon} />
            </button>
        </div>)
}