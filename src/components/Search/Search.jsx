import React, { useState } from "react";
import SearchLogo from '../../assets/SearchLogo'

function Search(props) {

  const {onSearch} =  props
  let placeHolderText = 'Search...'
  const [value, setValue] = useState(placeHolderText)
  const handleChange = (e) => {
    if(!e.target.valie) {
      setValue('')
    }
    setValue(e.target.value)
    onSearch(e.target.value)
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      onSearch(value)
    }
  }
  return (
    <div className=" relative h-4 m-4 w-full lg:w-[40%] mt-0 mb-4 xl:mb-0 mx-auto">
      <input
        className="appearance-none bg-stone-950 border border-zinc-500 outline-none text-sm text-zinc-400 rounded-lg w-full h-10 p-1"
        type={"search"}s
        name="search"
        placeholder={placeHolderText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      ></input>
      <button type="submit" className=" absolute right-0 top-0 mt-2 mr-2">
      <SearchLogo 
      fillColor = '#ff333'
      />
      </button>
    </div>
  );
}

export default Search;
