import { createContext, useEffect, useState } from "react";
import pizzasData from "../data/pizzas.json";
import { toast } from "react-toastify";


const VentasContext = createContext();

const VentasProvider = ({ children }) => {

  const [dataPizzas] = useState(pizzasData)
  const [modal, setModal] = useState(false)
  const [modalEliminar, setModalEliminar] = useState(false)
  const [pizza, setPizza] = useState({})
  const [carrito, setCarrito] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const totalCarrito = carrito.reduce((total, pizza) => total + pizza.price * pizza.cantidad, 0)
    setTotal(totalCarrito)
  }, [carrito])

  const handleSetPizza = pizza => {
    setPizza(pizza)
  }

  const encontrarPizza = (id) => {
   const pizzaBuscada = dataPizzas.find(pizza => pizza.id === id)
   if(!pizzaBuscada){
    return
  }
    setPizza(pizzaBuscada)
  }

  const handleClickModal = () => {
    setModal(!modal)
  }

  const handleClickModalEliminar = () => {
    setModalEliminar(!modalEliminar)
  }

  const handleAgregarPedido = ({ desc, ...producto }) => {
    if (carrito.some(pizzaState => pizzaState.id === producto.id)) {
      const carritoActualizado = carrito.map(pizzaState => pizzaState.id === pizza.id ? producto : pizzaState)
      setCarrito(carritoActualizado)
      toast.success('Pedido agregado, revisa tu carrito!')
    } else {
      setCarrito([...carrito, producto])
      toast.success('Pedido agregado, revisa tu carrito!')
    }
  }

  const handleDisminuirCantidad = (pizza) => {
    const nuevaCantidad = pizza.cantidad - 1;
    if (nuevaCantidad < 1) {
      setPizza(pizza)
      setModalEliminar(!modalEliminar)
      return
    }
    setCarrito(carrito.map(pizzaState => pizzaState.id === pizza.id
      ? { ...pizzaState, cantidad: nuevaCantidad }
      : pizzaState)
    )
  }

  const handleAumentarCantidad = (cantidad, id) => {
    const nuevaCantidad = cantidad + 1;
    setCarrito(carrito.map(pizzaState => pizzaState.id === id
      ? { ...pizzaState, cantidad: nuevaCantidad }
      : pizzaState)
    )
  }

  const handleEliminarPizza = (id) => {
    const actializarCarrito = carrito.filter(pizzaState => pizzaState.id !== id)
    setCarrito(actializarCarrito)
    toast.error('Eliminado del Pedido')
  }

  const handleEliminarTodo = () => {
    setCarrito([])
  }

  return (
    <VentasContext.Provider
      value={{
        dataPizzas,
        modal,
        handleClickModal,
        modalEliminar,
        handleClickModalEliminar,
        pizza,
        handleSetPizza,
        encontrarPizza,
        carrito,
        total,
        handleAgregarPedido,
        handleDisminuirCantidad,
        handleAumentarCantidad,
        handleEliminarPizza,
        handleEliminarTodo
      }}
    >
      {children}
    </VentasContext.Provider>
  )
}

export {
  VentasProvider
}
export default VentasContext