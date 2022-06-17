import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/components/Information.css"

function Information() {
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information</h2>
        </div>
        <div className="Information-form">
          <form action="">
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apt" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="zipcode" />
            <input type="text" placeholder="Télefono" name='phone' />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Infromation-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <Link to="/checkout/payment">Pagar</Link>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        <div className="Information-item">
          <div className="Information-element">
            <h4>Item name</h4>
            <span> $18</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
