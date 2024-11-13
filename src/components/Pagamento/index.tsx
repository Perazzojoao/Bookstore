'use client'
import React, { useState } from 'react';

const Pagamento: React.FC = () => {
  const [nome, setNome] = useState('');
  const [numeroCartao, setNumeroCartao] = useState('');
  const [validade, setValidade] = useState('');
  const [cvv, setCvv] = useState('');
  const [isPagamentoEfetuado, setIsPagamentoEfetuado] = useState(false);

  const processarPagamento = () => {
    if (nome && numeroCartao && validade && cvv) {
      setIsPagamentoEfetuado(true);
    } else {
      alert('Por favor, preencha todos os campos!');
    }
  };

  return (
    <div className="bg-neutral-950 text-white min-h-screen flex flex-col justify-center items-center p-7">
      <div className="bg-white text-black p-8 rounded-lg shadow-lg w-3/4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-purple-600 mb-6">Pagamento</h1>
        <p className="text-xl text-center text-gray-800 mb-6">Por favor, insira os dados de pagamento abaixo.</p>

        {isPagamentoEfetuado ? (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-green-500">Pagamento Confirmado!</h2>
            <p className="text-xl text-gray-800 mt-4">Seu pagamento foi processado com sucesso. Clique abaixo para rastrear o pedido.</p>
            <div className="mt-6">
              <a href="/rastreamento" className="bg-gradient-to-r from-green-400 to-purple-600 text-white rounded-2xl p-4 w-1/3 text-lg text-center inline-block">
                Rastrear
              </a>
            </div>
          </div>
        ) : (
          <div>
            <form>
              <label className="block text-2xl text-black font-semibold mb-2">Nome no Cartão:</label>
              <input
                type="text"
                className="border-2 p-3 mb-4 w-full focus:outline-none focus:border-purple-800 text-black rounded-lg"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome completo"
                required
              />

              <label className="block text-2xl text-black font-semibold mb-2">Número do Cartão:</label>
              <input
                type="text"
                className="border-2 p-3 mb-4 w-full focus:outline-none focus:border-purple-800 text-black rounded-lg"
                value={numeroCartao}
                onChange={(e) => setNumeroCartao(e.target.value)}
                placeholder="1234 5678 1234 5678"
                required
              />

              <div className="flex space-x-4 mb-4">
                <div className="w-1/2">
                  <label className="block text-2xl text-black font-semibold mb-2">Validade:</label>
                  <input
                    type="text"
                    className="border-2 p-3 w-full focus:outline-none focus:border-purple-800 text-black rounded-lg"
                    value={validade}
                    onChange={(e) => setValidade(e.target.value)}
                    placeholder="MM/AA"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block text-2xl text-black font-semibold mb-2">CVV:</label>
                  <input
                    type="text"
                    className="border-2 p-3 w-full focus:outline-none focus:border-purple-800 text-black rounded-lg"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    placeholder="123"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <button
                  type="button"
                  onClick={processarPagamento}
                  className="bg-gradient-to-r from-green-400 to-purple-600 text-white rounded-2xl p-4 w-1/2 text-lg"
                >
                  Confirmar Pagamento
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagamento;
