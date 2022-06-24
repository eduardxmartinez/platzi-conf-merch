import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';

function Success() {
  const {state} = useContext(AppContext)
  const {buyer} = state;
  const location = useGoogleAddress(buyer[0].address);

  return (
  <div className="Success">
    <div className="Success-content">
      <h2>{buyer[0].name}, gracias por tu compra</h2>
      <span>Tu pedido esta en camino, llega en 3 días</span>
      <div className="Success-map">
        <Map data={location}/>
      </div>
    </div>
  </div>
  )
}

export default Success;
