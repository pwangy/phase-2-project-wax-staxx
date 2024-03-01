const Nav = (searchQuery, handleSearch) => {



    return (
        <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={handleSearch}
            value={searchQuery}
        />
    )
}

export default Nav