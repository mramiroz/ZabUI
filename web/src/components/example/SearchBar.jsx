import Image from 'next/image';

export default function SearchBar({ placeholder, onChange, onSearch, borderColor, backColor, textColor }) {
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
  
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <div className="relative w-1/2">
        <input 
          type="text" 
          placeholder={placeholder} 
          onChange={onChange}
          onKeyDown={handleKeyDown}
          style={{borderColor: borderColor, backgroundColor: backColor, color: textColor}}
          className="w-full p-3 pl-10 text-sm font-semibold rounded-full"
        />
        <div className="absolute top-0 left-0 flex items-center h-full p-3">
          <Image src="/search-icon.svg" alt="search" width={20} height={20} />
        </div>
      </div>
    </div>
  );
}