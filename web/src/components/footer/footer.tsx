export default function Footer(){
  return (
    <footer className="flex justify-center p-4">
      <p className="text-white">
        Todos los derechos reseservados &copy; {new Date().getFullYear()}
      </p>
    </footer>
  );
}