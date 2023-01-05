import React from 'react'
import './SearchBar.css'

const SearchBar = ({ onSubmit, onChange, clearSearch, value }) => {
  return (
    <div className='searchBar'>
        <form onSubmit={onSubmit}>
            <input
                value={value}
                onChange={onChange}
                type='text'
                placeholder='Search By Category'
            />
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
  )
}

export default SearchBar