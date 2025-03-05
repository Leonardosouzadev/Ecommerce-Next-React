import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="hover:text-gray-400">
              <Image src="/logo1.png" alt="Logo" width={100} height={100} />
            </a>
          </div>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
            <Link href="/produtos" className="hover:text-gray-400">
              Produtos
            </Link>
            <a href="#" className="hover:text-gray-400">
              Carrinho
            </a>
            <a href="#" className="hover:text-gray-400">
              Conta
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Gangsta&apos;s Paradise. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
