

const SearchItem = ({searchItems, setSearchItems}) => {
    return (
        <form onSubmit={(e) => {e.preventDefault();setSearchItems('')}}>
            <label htmlFor="search"></label>
            <input style={{'width':'94%', 'padding':'.5em'}} type="search" id="search" placeholder="SearchItem" value={searchItems} onChange={(e) => setSearchItems(e.target.value)}>
            </input>
        </form>
    );
}

export default SearchItem;