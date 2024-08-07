import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import useVentas from '../hooks/useVentas';
import { formatearDinero } from '../helpers';

export default function Navegation() {

  const {total} = useVentas()

  return (
    <Navbar className="bg-primary">
      <Container>
        <NavLink
          className='text-white h4 m-0 link-underline link-underline-opacity-0'
          to={'/Home'}
        >
          <img src="/icons/slice.png" alt="" style={{ height: '32px' }} />Pizzería Mamma Mia!
        </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <NavLink
              className={"link-underline link-underline-opacity-0 link-opacity-50-hover"}
              to={'/carrito'}
            ><div className="d-flex gap-1 align-items-center">
                <img src="/icons/carrito.png" alt="carrito" style={{ height: '32px' }} />
                <span className="link-light h4 m-0"></span><span className="link-light h4 m-0">{formatearDinero(total)}</span>
              </div>
            </NavLink>

          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
