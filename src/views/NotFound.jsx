import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container d-flex flex-column gap-3 align-items-center">
      <h2 className="text-center mt-5">Pagina no encontrada</h2>
      <img src="/img/notFound.png" alt="notFound" style={{ height: "250px" }}/>
      <NavLink className="btn btn-warning rounded w-25" to={'/Home'}>Volver</NavLink>

    </div>
  )
}
