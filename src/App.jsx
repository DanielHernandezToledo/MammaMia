import Navegation from './components/Navegation'
import useVentas from './hooks/useVentas'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Cart from './views/Cart'
import Product from './views/Product'
import ModalProduct from './components/ModalProduct'
import { Modal } from 'react-bootstrap'
import ModalEliminar from './components/ModalEliminar'
import NotFound from './views/NotFound'


function App() {
  const { modal, handleClickModal, modalEliminar, handleClickModalEliminar } = useVentas()

  return (
    <>
      <Navegation />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/pizza/:id" element={<Product />} />
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Modal
         show={modal}
         onHide={handleClickModal}
      >
        <ModalProduct />
      </Modal>

      <Modal
        show={modalEliminar}
        onHide={handleClickModalEliminar}
      >
        <ModalEliminar />
      </Modal>
    </>
  )
}

export default App
