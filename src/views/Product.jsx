import React, { useEffect } from 'react'
import useVentas from '../hooks/useVentas'
import { formatearDinero } from '../helpers'
import { NavLink, useParams } from 'react-router-dom'
import NotFound from './NotFound';

export default function Product() {

  const { id } = useParams();
  const {pizza, encontrarPizza, handleClickModal, handleSetPizza} = useVentas()

  useEffect(() => {
    if(id){
      encontrarPizza(id)}
  },[id, pizza])

  return (
    <div className="container">
      {Object.keys(pizza).length === 0 ? (
        <NotFound />
      ) : (
        <div className="row border my-5">
        <div
          className="col-12 col-md-4"
          style={{backgroundImage: `url(${pizza.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}></div>
        <div className="col-12 col-md-8">
          <h2 className="fw-bold border-bottom py-3 text-bottom fw-bold text-capitalize">{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <p className='fw-bold'>Ingredientes:</p>
          <ul className='list-unstyled'>
          {pizza.ingredients.map((ingredient) => (
                      <li key={ingredient} className="card-text mb-0 ms-4"><img src='/icons/slice.png' style={{ width: '20px' }} />{ingredient}</li>
                    ))}
          </ul>
          <div className="d-flex justify-content-between align-items-center my-2">
            <p className='h3 m-0 fw-bold'>Precio: <span className='text-warning'>{formatearDinero(pizza.price)}</span></p>
            <div className="d-flex gap-2">
            <NavLink className='btn btn-primary rounded' to={'/Home'}>Volver</NavLink>
            <button
              className='btn btn-info rounded'
              onClick={() => { handleClickModal(); handleSetPizza(pizza)}}
            >
              Añadir
            </button>
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}
