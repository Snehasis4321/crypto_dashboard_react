import React from 'react'
import { useState } from 'react'
const SearchBox = ({searchStr,setSearchStr}) => {



  const handleSearch = (e) => {
    setSearchStr(e.target.value)
  }


  return (

        <input type="text" placeholder=' Search...' className='w-full p-3 mb-8 border-2  white rounded-xl' value={searchStr} onChange={handleSearch}/>
 
  )
}

export default SearchBox