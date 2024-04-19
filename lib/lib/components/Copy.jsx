"use client";
import copysvg from "../../svg/copy.svg";
import { useState } from "react";
import Image from "next/image";

export default function Copy({text}) {
  const [value, setValue] = useState(code);
  const handleChange = (e)=>{
    setValue(e.target.value);
  }

  return (
    <div>
      <textarea value={text} onChange={handleChange} className="hidden">{copysvg}</textarea>
      <button onClick={() => navigator.clipboard.writeText(code)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <Image src={copysvg} alt="copy" width={20} height={20}/>
      </button>
    </div>
  );
}