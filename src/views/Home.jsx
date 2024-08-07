import React from 'react'
import useVentas from '../hooks/useVentas'
import { formatearDinero } from '../helpers'
import './Home.css'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Home() {

  const navigate = useNavigate()
  const { dataPizzas, handleSetPizza, handleClickModal } = useVentas()

  const navigatePizza = (pizza) => {
    handleSetPizza(pizza)
    navigate('/pizza/' + pizza.id)
  }

  return (
    <>
      <div className="home-image">
        <div className="overlay d-flex align-items-center">
          <div className="container  flex-column justify-content-center">
            <h1 className='text-white'>¡Pizzería Mamma Mia!</h1>
            <p className='text-white'>¡Tenemos las mejores pizzas que podrias encontrar!</p>
            <hr className='text-white' />
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {dataPizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card">
                <img src={pizza.img} className="card-img-top" alt={pizza.name} />
                <div className="card-body">
                  <h5 className="card-title pb-3 fw-bold text-capitalize border-bottom">{pizza.name}</h5>
                  <p className='fw-bold mb-2'>Ingredientes:</p>
                  <ul className='list-unstyled mb-0'>
                    {pizza.ingredients.map((ingredient) => (
                      <li key={ingredient} className="card-text mb-0 ms-4"><img src='/icons/slice.png' style={{ width: '20px' }} />{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="card-footer">
                  <p className="card-text text-center display-6 fw-bold mb-0 text-warning">{formatearDinero(pizza.price)}</p>
                  <div className="d-flex justify-content-between gap-2">
                    <NavLink
                      to={`/pizza/${pizza.id}`}
                      className='btn btn-primary w-50 rounded'
                      onClick={ () => navigatePizza(pizza) }
                    >
                      Ver
                    </NavLink>
                    <button
                      className='btn btn-info w-50 rounded'
                      onClick={ () => { handleClickModal(); handleSetPizza(pizza)}}
                    >
                      Agregar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
