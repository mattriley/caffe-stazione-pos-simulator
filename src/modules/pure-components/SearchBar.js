import './SearchBar.css';

const SearchBar = () => ({ onSearch }) => {
    return <div className="search-bar">
        <div>
            <img src='caffe-stazione.jpg' />
        </div>
        <div className="search-box">
            <input type="search" onChange={e => onSearch(e.target.value)} />
        </div>
    </div>
}

export default SearchBar;
