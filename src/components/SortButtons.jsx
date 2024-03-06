const ButtonsFilter = ({ handleSortSelection }) => {
       return (
        <div className='filter-wrapper' onClick={handleSortSelection}>
            <h5>SORT</h5>
            <button name='artist' className='filter-button'>By Artist</button>
            <button name='title' className='filter-button'>By Album Title</button>
            <button name='All' className='filter-button'>View All</button>
        </div>
)}
  
  export default ButtonsFilter
