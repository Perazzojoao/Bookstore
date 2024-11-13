"use client";

import React, { useState } from "react";

interface CartItem {
  id: number;
  title: string;
  author: string;
  price: number;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: 1, title: "Redes de Computadores e a internet", author: "Kurose Ross", price: 349.99, quantity: 1 },
    { id: 2, title: "+ Esperto que o diabo", author: "Napoleon Hill", price: 79.99, quantity: 2 },
  ]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const removeFromCart = (id: number) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-neutral-950 p-6">
      <div className="bg-white w-full max-w-3xl p-8 rounded-lg shadow-lg">
        <h2 className="text-black font-bold mb-6 text-center font-mono text-4xl">Carrinho</h2>

        {cart.length === 0 ? (
          <p className="text-center text-xl text-gray-700">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {cart.map(item => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b pb-4 mb-4 text-gray-700"
              >
                <div>
                  <h3 className="font-semibold text-2xl">{item.title}</h3>
                  <p className="text-lg">Autor: {item.author}</p>
                  <p className="text-lg">Preço: R$ {item.price.toFixed(2)}</p>
                  <p className="text-lg">Quantidade: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-gradient-to-r from-green-400 to-purple-600 text-white font-semibold rounded-lg px-4 py-2 transition duration-200">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-black text-2xl font-bold">Total: R${total.toFixed(2)}</h3>
          {cart.length > 0 && (
            <button
              onClick={clearCart}
              className="bg-gradient-to-r from-green-400 to-purple-600 text-white font-semibold rounded-lg px-6 py-3 transition duration-200">
              Limpar Carrinho
            </button>
          )}
        </div>

        {cart.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => alert("Indo para pagamento...")}
              className="bg-gradient-to-r from-green-400 to-purple-600 text-white font-semibold rounded-lg px-6 py-3 text-lg transition duration-200">
              Ir para pagamento
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
