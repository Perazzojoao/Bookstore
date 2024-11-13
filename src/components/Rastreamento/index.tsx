'use client'
import React, { useState } from 'react';

const ConfirmacaoEnvio: React.FC = () => {
  // Estado para controlar o status de cada etapa do pedido
  const [status, setStatus] = useState<string[]>([
    'Pedido confirmado',
    'Produto embalado',
    'Enviado para o transporte',
    'A caminho',
    'Entregue',
  ]);
  
  // Função para avançar o status do pedido
  const avançarStatus = () => {
    const newStatus = [...status];
    // Alterar o primeiro item 'não entregue' para 'entregue' (simulando avanço)
    const firstIncomplete = newStatus.findIndex(s => s !== 'Entregue');
    if (firstIncomplete !== -1) {
      newStatus[firstIncomplete] = 'Entregue';
      setStatus(newStatus);
    }
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-center items-center p-7">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">Compra Confirmada!</h1>
        <p className="text-xl text-center text-gray-800 mb-6">Obrigado por sua compra. Seu pedido está sendo processado.</p>

        <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">Rastreamento do Pedido</h2>
        
        <ul className="list-inside list-decimal text-lg text-gray-800 space-y-2">
          {status.map((item, index) => (
            <li key={index} className={item === 'Entregue' ? 'text-green-500 font-semibold' : 'text-gray-800'}>
              {item}
            </li>
          ))}
        </ul>

        <div className="flex justify-center mt-6">
          <button 
            onClick={avançarStatus}
            className="bg-gradient-to-r from-green-400 to-purple-600 text-white rounded-2xl p-4 w-1/2 text-lg"
          >
            Avançar Status
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmacaoEnvio;


