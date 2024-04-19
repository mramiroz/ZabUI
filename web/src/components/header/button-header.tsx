type ButtonHeaderProps = {
  text: string;
  href: string;
  color?: 'blue' | 'red' | 'green';
};

export default function ButtonHeader({ text, href, color = 'blue' }: ButtonHeaderProps) {
  const colorClasses = {
    blue: 'text-blue-500 hover:text-blue-300 neon-blue',
    red: 'text-red-500 hover:text-red-300 neon-red',
    green: 'text-green-500 hover:text-green-300 neon-green',
  };

  return (
    <button className={`px-4 py-2 rounded font-bold ${colorClasses[color]} 
      bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-200 ease-in-out 
      shadow-lg hover:shadow-2xl`}>
      <a href={href}>{text}</a>
    </button>
  );
}