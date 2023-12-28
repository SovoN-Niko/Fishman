import React from 'react';

const products = [
  { id: 1, name: 'Удочка', price: 29.99, image: 'https://img.joomcdn.net/f6c33fdcde3205c696faa78fde55ecf4ed9c2bbe_original.jpeg' },
  { id: 2, name: 'Катушка', price: 49.99, image: 'https://img.joomcdn.net/beacc23f0eb613f378a4de0f17f6f83ced967bd1_original.jpeg' },
  { id: 3, name: 'Набор наживок', price: 14.99, image: 'https://images.prom.ua/4529531694_w640_h640_nabor-primanok-dlya.jpg' },
  // Добавьте больше товаров по аналогии
];

function ProductList() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Популярные товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex items-center justify-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-48 h-48 object-cover mb-4"
            />
            </div>
            <div className="flex items-center justify-center mb-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
            <div className="flex items-center justify-center mb-4">
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center justify-center mb-4">
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Добавить в корзину
                </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;