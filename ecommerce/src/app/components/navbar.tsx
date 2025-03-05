"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa"; // Importando ícones

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold">
            <a href="#" className="hover:text-gray-400">
              <Image src="/logo1.png" alt="Logo" width={50} height={50} />
            </a>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
            <Link href="/produtos" className="hover:text-gray-400">
              Produtos
            </Link>
            <a href="#" className="hover:text-gray-400">
              <FaShoppingCart className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaUser className="w-6 h-6" />
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaShoppingCart className="w-4 h-4" />
            </a>

            <a href="#" className="hover:text-gray-400">
              <FaUser className="w-4 h-4" />
            </a>

            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-gray-400"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/s"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4">
            <Link href="/" className="hover:text-gray-400">
              Inicio
            </Link>
            <Link href="/produtos" className="hover:text-gray-400">
              Produtos
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
