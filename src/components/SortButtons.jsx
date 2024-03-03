const ButtonsFilter = ({handleSortSelection}) => {
       return (
      <div className="filter" onClick={handleSortSelection}>
          <button>All</button>
          <button>By Artist</button>
          <button>By Album Title</button>
        </div>
    )
    
  }
  
  export default ButtonsFilter