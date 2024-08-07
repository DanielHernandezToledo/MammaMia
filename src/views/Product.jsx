import React, { useEffect } from 'react'
import useVentas from '../hooks/useVentas'
import { formatearDinero } from '../helpers'
import { NavLink, useParams } from 'react-router-dom'
import NotFound from './NotFound';

export default function Product() {

  const { id } = useParams();
  const { pizza, encontrarPizza, handleClickModal, handleSetPizza } = useVentas()

  useEffect(() => {
    if (id) {
      encontrarPizza(id)
    }
  }, [id, pizza])

  return (
    <div className="container">
      {Object.keys(pizza).length === 0 ? (
        <NotFound />
      ) : (
        <div className="row border my-5">
          <div
            className="col-12 col-md-4"
            style={{ backgroundImage: `url(${pizza.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '160px' }}></div>
          <div className="col-12 col-md-8">
            <h2 className="fw-bold border-bottom py-3 text-bottom fw-bold text-capitalize">{pizza.name}</h2>
            <p>{pizza.desc}</p>
            <p className='fw-bold'>Ingredientes:</p>
            <ul className='list-unstyled'>
              {pizza.ingredients.map((ingredient) => (
                <li key={ingredient} className="card-text mb-0 ms-4"><img src='/icons/slice.png' style={{ width: '20px' }} />{ingredient}</li>
              ))}
            </ul>
            <div className="row justify-content-between align-items-center my-2">
              <p className='col-12 col-md-6 h3 fw-bold'>Precio: <span className='text-warning'>{formatearDinero(pizza.price)}</span></p>
              <div className="col-12 col-md-6">
                <div className="row justify-content-end gap-2 mx-2">
                  <NavLink className='col-md-4 btn btn-primary rounded' to={'/Home'}>Volver</NavLink>
                  <button
                    className='col-md-4 btn btn-info rounded'
                    onClick={() => { handleClickModal(); handleSetPizza(pizza) }}
                  >
                    Añadir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
