import { ProductType } from "../../../types/producttype";

async function getProdutos(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");

  if (!response.ok) {
    throw new Error("Erro ao buscar os produtos");
  }

  return response.json();
}

export default async function Home() {
  const products: ProductType[] = await getProdutos();
  return (
    <div className="container mx-auto px-4 p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product: ProductType) => (
          <div
            key={product.id}
            className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
          >
            {product.title}
          </div>
        ))}
      </div>
    </div>
  );
}
