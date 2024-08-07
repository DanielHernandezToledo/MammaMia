import React from 'react'
import useVentas from '../hooks/useVentas'
import { formatearDinero } from '../helpers'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function Cart() {

  const { carrito, total, handleDisminuirCantidad, handleAumentarCantidad, handleEliminarTodo } = useVentas()

  const handleClickPagar = () => {
    toast.success('Compra realizada con éxito!')
  }

  return (
    <div className="my-5 container">
      {carrito.length === 0 ? (
            <div className="container d-flex flex-column gap-3 align-items-center">
            <h2 className="text-center">No hay pizzas seleccionadas</h2>
            <img src="/img/NoSelected.webp" alt="Sin pizzas seleccionadas" className="w-25"/>
            <NavLink className="btn btn-warning rounded w-25" to={'/Home'}>Eligelas Aquí</NavLink>
          </div>
      ) : (
        <div className='bg-light py-5 px-4'>
          <h3 className='pb-1'>Detalle del pedido:</h3>
          <div className='bg-white py-3'>
            {carrito.map((pizza) => (
            <div key={pizza.id} className="d-flex justify-content-between px-3 py-3">
              <div className="d-flex align-items-center gap-2">
                <img src={pizza.img} style={{ width: '60px' }} alt="" />
                <h5 className='m-0'>{pizza.name}</h5>
              </div>
              <div className='d-flex gap-2 align-items-center'>
                <p className='m-0 fw-bold text-warning'>{formatearDinero(pizza.price * pizza.cantidad )}</p>
                <button
                  className="btn btn-danger rounded"
                  onClick={() => handleDisminuirCantidad(pizza)}
                >-</button>
                <span>{pizza.cantidad}</span>
                <button className="btn btn-primary rounded"
                  onClick={() => handleAumentarCantidad(pizza.cantidad, pizza.id)}
                >
                  +
                </button>
              </div>
            </div>
            ))}
            <hr className='m-0 mx-3' />
            <h4 className='pt-3 pb-0 ms-3'>Total: <span className='text-warning fw-bold'>{formatearDinero(total)}</span></h4>
            <div className="d-flex justify-content-between">
            <button
              onClick={() => {handleClickPagar(); handleEliminarTodo()}}
              className="btn btn-success rounded ms-3"
            >
              Pagar
            </button>
            <NavLink
              className="btn btn-warning rounded me-3"
              to={'/Home'}
            >
              Seguir Comprando
            </NavLink>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
