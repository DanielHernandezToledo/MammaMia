import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import useVentas from '../hooks/useVentas'

export default function ModalEliminar() {

  const {handleEliminarPizza, handleClickModalEliminar, pizza} = useVentas()

  return (
    <div className='m-0'>
      <Modal.Header closeButton className='border-0 text-capitalize pb-0'>
        <Modal.Title>¿Eliminar Pizza?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img src="/img/eliminarPizza.png" alt="Eliminar Pizza" className='w-100'/>
      <div className="d-flex mt-2 gap-2">

      <Button variant="primary w-50 rounded" onClick={() => handleClickModalEliminar()}>Cancelar</Button>
      <Button variant="danger w-50 rounded" onClick={() => {handleEliminarPizza(pizza.id);handleClickModalEliminar()}}>Eliminar</Button>
      </div>
      </Modal.Body>
  </div>
  )
}
