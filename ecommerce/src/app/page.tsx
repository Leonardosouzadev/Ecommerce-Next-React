import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Sejam bem vindos ao Paraíso
          </h1>
          <p className="text-xl mb-8">Transforme seu espirito Gangsta.</p>
          <Link
            href="/produtos"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg"
          >
            Ver Produtos
          </Link>
        </div>
      </section>

      {/* Coleções Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossas Coleções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bloco 1 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/colecao2.jpg"
                alt="Coleção 1"
                width={350}
                height={350}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Real Gangsta</h3>
              <p className="text-gray-700">real gangsta. </p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
              >
                Ver Mais
              </Link>
            </div>

            {/* Bloco 2 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/colecao1.jpg"
                alt="Coleção 2"
                width={350}
                height={350}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Gangsta Plays</h3>
              <p className="text-gray-700">gtarp.</p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
              >
                Ver Mais
              </Link>
            </div>

            {/* Bloco 3 */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
              <Image
                src="/colecao2.jpg"
                alt="Coleção 3"
                width={350}
                height={350}
                className="rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Gang Gang Bro</h3>
              <p className="text-gray-700">gang gang lil raff.</p>
              <Link
                href="#"
                className="text-blue-600 hover:text-blue-700 mt-4 inline-block"
              >
                Ver Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Conheça Nossa História</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/jp288zfsNTI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
