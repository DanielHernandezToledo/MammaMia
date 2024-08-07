import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container d-flex flex-column gap-3 align-items-center">
      <h1 className="text-center mt-5">Pagina no encontrada</h1>
      <img src="/img/notFound.png" alt="notFound" className="w-25"/>
      <NavLink className="btn btn-warning rounded w-25" to={'/Home'}>Volver</NavLink>

    </div>
  )
}
