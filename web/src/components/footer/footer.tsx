export default function Footer(){
  return (
    <footer className="fixed bottom-0 flex items-center justify-center w-full py-6 bg-gray-900">
      <p>
        Todos los derechos reseservados &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}