import React, { useState } from 'react'
import useVentas from '../hooks/useVentas'
import { formatearDinero } from '../helpers'
import { Button, Modal } from 'react-bootstrap'

export default function ModalProduct() {
  const { handleAgregarPedido, handleClickModal, pizza } = useVentas()
  const [cantidad, setCantidad] = useState(1)

  return (
    <div className='row m-0'>
      <div className='col-3 col-md-5' style={{ backgroundImage: `url(${pizza.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      </div>
      <div className='col-9 col-md-7'>
        <Modal.Header closeButton className='border-0 text-capitalize pb-0'>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='fw-bold m-0'>Ingredientes:</p>
          <ul className='list-unstyled'>
            {pizza.ingredients.map((ingredient) => (
              <li key={ingredient} className="card-text mb-0 ms-4"><img src='/icons/slice.png' style={{ width: '20px' }} />{ingredient}</li>
            ))}
          </ul>
          <p className='fw-bold mb-0 h3'>Precio: <span className='text-warning'>{formatearDinero(pizza.price * cantidad)}</span></p>
          <div className='d-flex gap-2 align-items-center mt-3'>
            <Button
              variant='danger w-100 rounded'
              size='sm'
              onClick={() => {
                if (cantidad <= 1) return
                setCantidad(cantidad - 1)
              }}
            >
              <span className='fw-bold h3'>-</span>
            </Button>
            <span className='fw-bold h3'>{cantidad}</span>
            <Button
              variant='primary w-100 rounded'
              size='sm'
              onClick={() => {
                if (cantidad >= 9) return
                setCantidad(cantidad + 1)
              }}
            >
              <span className='fw-bold h3'>+</span>
            </Button>
          </div>
          <button
            className='btn btn-info w-100 rounded mt-3'
            onClick={() => { handleAgregarPedido({ ...pizza, cantidad }); handleClickModal() }}
          >
            Añadir
          </button>
        </Modal.Body>
      </div>
    </div>
  )
}
