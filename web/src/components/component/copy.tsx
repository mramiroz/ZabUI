"use client";
import copysvg from "../../../public/copy.svg";
import CopyIcon from "../icons/CopyIcon";
import { useState } from "react";
import Image from "next/image";

export default function Copy({code, showCode}: {code: string, showCode: boolean}) {
  const [value, setValue] = useState(code);
  const [copied, setCopied] = useState(false);
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
    <div className="flex justify-between items-center">
      {showCode && (
        <pre className="flex items-center m-2 bg-gray-950 p-2 border">
          {code}
          <textarea value={code} onChange={handleChange} className="hidden"></textarea>
          <button onClick={handleCopy} className="ml-1 items-center text-white py-2 px-4 rounded">
            <Image src={copysvg} alt="copy" width={20} height={20}/>
          </button>
        </pre>
      )}
      {!showCode && (
        <>
          <textarea value={code} onChange={handleChange} className="hidden"></textarea>
          <button onClick={handleCopy} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
            <Image src={copysvg} alt="copy" width={20} height={20}/>
          </button>
        </>
      )}
      {copied && <p className="text-green-500 text-lg font-bold">Copied!</p>}
    </div>
  );
}