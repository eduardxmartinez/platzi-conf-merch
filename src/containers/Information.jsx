import React, { useContext, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';
import "../styles/components/Information.css"

function Information() {
const {state, addToBuyer} = useContext(AppContext);
const form = useRef(null);
const navigate = useNavigate();
const {cart} = state;

const handleSubmit = () => {
  const formData = new FormData(form.current);
  const buyer = {
    "name": formData.get("name"),
    "email": formData.get("email"),
    "address": formData.get("address"),
    "apt": formData.get("apt"),
    "city": formData.get("city"),
    "country": formData.get("country"),
    "state": formData.get("state"),
    "zipcode": formData.get("zipcode"),
    "phone": formData.get("phone"),
  }
  addToBuyer(buyer);
  navigate("/checkout/payment");
}

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Contact Information</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre Completo" name="name" />
            <input type="text" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apt" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código Postal" name="zipcode" />
            <input type="text" placeholder="Télefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Infromation-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={()=>handleSubmit()}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span> ${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Information;
