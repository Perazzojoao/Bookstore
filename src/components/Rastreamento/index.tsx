import React from 'react';

const ConfirmacaoEnvio: React.FC = () => {
  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-center items-center p-7">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">Compra Confirmada!</h1>
        <p className="text-xl text-center text-gray-800 mb-6">Obrigado por sua compra. Seu pedido está sendo processado.</p>

        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">Rastreamento do Pedido</h2>
        
        <ul className="list-inside list-decimal text-lg text-gray-800 space-y-2">
          <li>Pedido confirmado</li>
          <li>Produto embalado</li>
          <li>Enviado para o transporte</li>
          <li>A caminho</li>
          <li>Entregue</li>
        </ul>
      </div>
    </div>
  );
};

export default ConfirmacaoEnvio;
