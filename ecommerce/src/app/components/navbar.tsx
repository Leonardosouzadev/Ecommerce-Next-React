function NavBar() {
  return (
    <nav className="flex z-50  items-center justify-between p-4 bg-black text-white">
      <a href="" className="text-white">
        Gangsta Paradise
      </a>
      <div className="flex space-x-4">
        <a href="" className="text-white">
          Produtos
        </a>
        <a href="" className="text-white">
          Carrinho
        </a>
        <a href="" className="text-white">
          Conta
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
