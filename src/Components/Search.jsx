import React from 'react'
 // Example using Lucide Icons (or use an SVG)

const Search = () => {
  return (
    <div className='relative w-full max-w-md '>
      {/* Search Input */}
      <input 
        className='w-full px-[10px] pr-[50px] py-[12px] text-inherit rounded-full border border-gray-400 focus:outline-none'  
        type="text" 
        placeholder="Search..."
      />

      {/* Search Button */}
      <button 
        className='w-[40px] h-[40px] bg-blue-600 rounded-full flex items-center justify-center absolute right-1 top-1 text-white hover:bg-blue-700'
      >
       Tap
      </button>
    </div>
  )
}

export default Search;
