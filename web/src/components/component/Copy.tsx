"use client";
import copysvg from "../../../public/copy.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Copy({code, showCode}: {code: string, showCode: boolean}) {
  const [value, setValue] = useState(code);
  const [copied, setCopied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const handleChange = (e:any)=>{
    setValue(e.target.value);
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }

  return (
    <div className={`flex flex-col sm:flex-row items-center justify-between transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {showCode && (
        <pre className="flex items-center p-2 m-2 border bg-gray-950">
          <code>{code}</code>
          <textarea value={value} onChange={handleChange} className="hidden"/>
          <button onClick={handleCopy} className="items-center px-4 py-2 ml-1 text-white rounded">
            <Image src={copysvg} alt="copy" width={20} height={20}/>
          </button>
        </pre>
      )}
      {!showCode && (
        <>
          <textarea value={value} onChange={handleChange} className="hidden"/>
          <button onClick={handleCopy} className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
            <Image src={copysvg} alt="copy" width={20} height={20}/>
          </button>
        </>
      )}
      {copied && <p className="text-lg font-bold text-green-500">Copied!</p>}
    </div>
  );
}