const ButtonsFilter = ({ handleSortSelection }) => {
       return (
        <div className='filter' onClick={handleSortSelection}>
            <button name='All'>All</button>
            <button name='artist'>By Artist</button>
            <button name='title'>By Album Title</button>
        </div>
)}
  
  export default ButtonsFilter
