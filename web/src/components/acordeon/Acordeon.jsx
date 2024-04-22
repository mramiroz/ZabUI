import { useState } from 'react';
import Link from 'next/link';

export default function Acordeon({data, titleKey, subDataKey, urlKey, nameKey}) {
    const [openIndex, setOpenIndex] = useState(null);
    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <button onClick={() => handleClick(index)}>
                        {item[titleKey]}
                    </button>
                    {openIndex === index && (
                        <div>
                            {item[subDataKey].map((subItem, subIndex) => (
                                <Link key={subIndex} href={subItem[urlKey]}>
                                    <p key={subIndex}>{subItem[nameKey]}</p>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}