import { useState } from "react";
export const HandleNextStage = async (orderToUpdate, states, orders, setOrder, setOrders, getAccessTokenSilently) => {
    
    const currentStateIndex = states.findIndex(s => s === orderToUpdate.estado);

    if (currentStateIndex < states.length - 1) {
      const nextState = states[currentStateIndex + 1];

      const token = await getAccessTokenSilently();
      const response = await fetch(`http://127.0.0.1:8000/api/orders/api/${orderToUpdate.id}/update-status/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ estado: nextState })
      });

      if (response.ok) {
        const updatedOrders = orders.map(o =>
          o.id === orderToUpdate.id ? { ...o, estado: nextState } : o
        );
        setOrders(updatedOrders);
        setOrder(updatedOrders.find(o => o.id === orderToUpdate.id));
      }
    }
  };