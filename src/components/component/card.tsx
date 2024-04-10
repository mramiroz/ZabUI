import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Link from 'next/link';
import Copy from './copy';

interface CardProps {
  code: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ code, title, description, link }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg m-4 flex flex-col justify-between">
      <div className="flex justify-center items-center m-8 p-4 bg-white bg-opacity-10">
        <LiveProvider code={code}>
          <LivePreview />
          <LiveError />
        </LiveProvider>
      </div>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex justify-between items-center px-6 py-4">
        <Link href={link} className="inline-block bg-blue-500 rounded-full p-3 p-1 text-sm font-semibold text-gray-700 mr-2">
          Read more
        </Link>
        <Copy code={code}/>
      </div>
    </div>
  );
};

export default Card;