'use cliente'
import React, { useState } from "react";

const Pagamento: React.FC = () => {
  // Estado para controlar a exibição da parte de pagamento confirmada
  const [isPagamentoConfirmado, setIsPagamentoConfirmado] = useState(false);

  const handlePagamento = () => {
    // Ao clicar no botão de pagamento, mudamos o estado
    setIsPagamentoConfirmado(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-800 p-6">
      <div className="bg-white p-8 w-full sm:w-3/4 md:w-1/2 rounded-lg shadow-lg">
        {!isPagamentoConfirmado && (
          <>
            <h2 className="text-2xl font-bold mb-4">Página de Pagamento</h2>
            <p className="text-lg mb-4">Por favor, insira os dados de pagamento abaixo:</p>
          </>
        )}

        {isPagamentoConfirmado ? (
          <div className="text-center">
            <h3 className="text-xl font-semibold text-green-600 mb-4">Pagamento Confirmado!</h3>
            <p className="mb-4">Obrigado por sua compra. Seu pedido está sendo processado.</p>
            <button
              className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600"
              onClick={() => alert('Você será redirecionado para a página de rastreamento.')}
            >
              Ver rastreamento do pedido
            </button>
          </div>
        ) : (
          <div>
            <h3 className="text-xl font-semibold mb-4">Detalhes de Pagamento</h3>
            <p className="mb-4">Total: $71.97</p>
            <form>
              <label htmlFor="cartao" className="block text-lg font-medium mb-2">Número do Cartão:</label>
              <input
                id="cartao"
                type="text"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4"
                placeholder="Insira o número do cartão"
              />
              <label htmlFor="cvv" className="block text-lg font-medium mb-2">CVV:</label>
              <input
                id="cvv"
                type="text"
                className="w-full p-3 border-2 border-gray-300 rounded-lg mb-4"
                placeholder="Código de segurança"
              />
              <div className="flex justify-center mt-4">
                <button
                  type="button"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
                  onClick={handlePagamento} // Chama a função que altera o estado
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
