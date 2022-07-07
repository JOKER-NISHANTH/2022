import React from 'react'

const SearchItem = ({search,setSearch}) => {
  return (
      <form
          className='searchForm'
          onSubmit={e => e.preventDefault()}
      >
          <label htmlFor="search">Search</label>
          <input
              id="search"
              type="text"
              role="searchbox"
              placeholder="Search Item"
              value={search}
        onChange={(e) => {
          let data =e.target.value
          setSearch(data)
        }}
          />
    </form>
  )
}

export default SearchItem