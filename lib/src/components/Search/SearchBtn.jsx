import React, { useState } from 'react'

export default function SearchBtn( {placeholder, onChange, borderColor, backColor, textColor, onSearch}) {
  const [isOpen, setIsOpen] = useState(false)
  textColor = textColor || 'black';
  borderColor = borderColor || 'black';
  backColor = backColor || 'white';
  onChange = onChange || (() => {});
  onSearch = onSearch || (() => {});

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value);
    }
  }
  const handleButtonClick = () => {
    setIsOpen(!isOpen)
  }
  return( 
    <>
    {!isOpen && (
      <button onClick={handleButtonClick} className='p-2 bg-white rounded-sm '>
        <img src="/search-icon.svg" alt="search" width={20} height={20} />
      </button>
    )
    }
    <div className={`relative w-1/2 transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
      <input 
        type="text" 
        placeholder={placeholder} 
        onChange={onChange}
        onKeyDown={handleKeyDown}
        style={{borderColor: borderColor, backgroundColor: backColor, color: textColor}}
        className="w-full p-3 pl-10 text-sm font-semibold rounded-full"
      />
      <div className="absolute top-0 left-0 flex items-center h-full p-3">
        <img src="/search-icon.svg" alt="search" width={20} height={20} />
      </div>
    </div>
  </>
  )
}