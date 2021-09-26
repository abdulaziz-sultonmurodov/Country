import React, { useRef, useState } from 'react'
import {IoSearchSharp} from "react-icons/io5"


const Search = ({url, setSearchWord}) => {
  const [word, setWord] = useState("")
  const input = useRef(null);
  const handleClick = () => {
    setSearchWord(word)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchWord(word)
    }
  }
 
    return (
        <div className={url === "/" ? `flex` : "hidden"}>
  <div className="bg-white flex items-center rounded-full shadow-xl">
    <input autoFocus onKeyDown={handleKeyDown} onChange={(e) => setWord(e.target.value)} ref={input}  className="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none" id="search" type="search" placeholder="Search for a city" autoComplete="off" />
    
    <div className="p-2">
    
      <button onClick={handleClick} id="button" className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none  flex items-center justify-center">
        <IoSearchSharp className="h-6 w-6" />
      </button>
      </div>
    </div>
    {/* {searchList()} */}
  </div>
    )
}

export default Search
