export default function LinkButton({ href, text, color }) {
  return (
    <a href={href} className={`text-${color}-500 hover:text-${color}-700 m-4 transform hover:scale-110`}>
      {text}
    </a>
  );
}