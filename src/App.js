import logo from './logo.svg';
import './styles/styles.css';
import logoSolutionFruits from './media/img/logo.png'

function App() {
  return (
    <div className="App">
      <header>
        <div className="container">
          <nav className="fondoHeader navbar navbar-expand-lg navbar-light sticky-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src={logoSolutionFruits} height="50" alt="logo de la empresa" className="d-inline-block" />
                SOLUTION FRUITS
              </a>
              <button className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toogle navigation">

                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"> Ventas </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Ingresar Venta</a></li>
                      <li><a className="dropdown-item" href="#">Estado de Ventas</a></li>
                      <li><a className="dropdown-item" href="#">Registro de Ventas</a></li>
                    </ul>
                  </li>
                  <li className="nav-item"><a className="nav-link" href="#"> Productos </a></li>
                  <li className="nav-item"><a className="nav-link" href="#"> Usuarios </a></li>
                  <li className="nav-item"><a className="nav-link" href="#"> Signin </a></li>
                </ul>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">
          <form>
            <label for="numPedido" className="espacioLados">
              No. Pedido
              <input name="numPedido" placeholder="Ej. 100" type="number"/>
            </label>
            <label className="espacioLados">
              Vendedor
              <select>
                <option selected>Encargado del pedido</option>
                <option value="1">Laura Perez</option>
                <option value="2">Sandra Lopez</option>
                <option value="3">Oscar Rodriguez</option>
                <option value="4">Jairo Ochoa</option>
              </select>
            </label>
          </form>
          <form>  
            <label for="fechaVenta" className="espacioLados">
              Fecha de Venta
              <input name="fechaVenta" type="date"/>
            </label>
            <label className="espacioLados">
              Forma de Pago
              <select>
                <option selected></option>
                <option value="1">Contado</option>
                <option value="2">Crédito 30 días</option>
                <option value="3">Crédito 45 días</option>
                <option value="1">Crédito 60 días</option>
              </select>
            </label> 
            <label for="fechaPago" className="espacioLados">
              Fecha de Pago
              <input name="fechaPago" type="date" disabled/>
            </label>
          </form>
          <form>
            <label for="nombreCliente" className="espacioLados">
              Nombre del Cliente
              <input name="nombreCliente" placeholder="Ej. Martha Sanchez" type="text"/>
            </label>
            <label for="idCliente" className="espacioLados">
              Id. del Cliente
              <input name="idCliente" type="number"/>
            </label>
          </form>
        </div>
        <hr className="anchoBorde" />
        <table className="container table table-striped espacioLados">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Descripción</th>
              <th scope="col">Cantidad</th>
              <th scope="col">Valor Unitario</th>
              <th scope="col">Valor Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><select>
                <option selected>Producto</option>
              </select></td>
              <td> 3</td>
              <td>6000</td>
              <td>18000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Pulpa de piña 500g  - Packx10</td>
              <td>1</td>
              <td>62500</td>
              <td>62500</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Pulpa de fresa 250g  - Unidad</td>
              <td>5</td>
              <td>3500</td>
              <td>17500</td>
            </tr>
          </tbody>
        </table>
        
        <div className="container">
          <label for="ValorTotal" className="margen">
            Valor Total de Venta
            <input name="valorTotal" type="number" disabled/>
          </label>
        </div>
        <br/>
        <br/>
        <div className="container">
          <button className="btn btn-success" type="submit">Confirmar Venta</button>
          <button className="btn btn-success" type="reset">Cancelar Venta</button>
        </div>
        <br/>
        <br/>
      </main>
      <footer className="container">
        <a href="#">
          <span >
              ¿Necesitas ayuda? Escríbenos a soporte@solutionfruits.com
          </span>
        </a>
      </footer> 
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>

    </div>
  );
}

export default App;