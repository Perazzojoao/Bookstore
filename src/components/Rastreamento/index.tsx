import React from 'react';

const ConfirmacaoEnvio: React.FC = () => {
  return (
    <div>
      <h1>Compra Confirmada!</h1>
      <p>Obrigado por sua compra. Seu pedido está sendo processado.</p>
      <h2>Rastreamento do Pedido</h2>
      <ul>
        <li>Pedido confirmado</li>
        <li>Produto embalado</li>
        <li>Enviado para o transporte</li>
        <li>A caminho</li>
        <li>Entregue</li>
      </ul>
    </div>
  );
};

export default ConfirmacaoEnvio;
