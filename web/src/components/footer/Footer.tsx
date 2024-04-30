export default function Footer(){
  return (
    <footer className="flex items-center justify-center w-full py-6 bg-gray-900">
      <p>
        Todos los derechos reseservados &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}