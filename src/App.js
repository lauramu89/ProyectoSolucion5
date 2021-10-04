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
                      <li><a className="dropdown-item" href="#">Registro yarn Ventas</a></li>
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
          <label className="espacioLados">
              Tipo de Actualización de Productos
              <select>
                <option selected></option>
                <option value="1">Creación</option>
                <option value="2">Modificación</option>
                <option value="3">Lista de productos Activos</option>
                <option value="3">Busqueda</option>
                
                
              </select>
            </label> 
          </form>
          <br/>
          
          <br/>

            <from>
            <label for="idProducto" className="espacioLados">
              ID producto 
              <input name="idProducto " placeholder="Ingrese ID producto" type="text"/>
            </label>
            
            <label for="productoInactivo" className="espacioLados">
                Inactivo 
              <input name="productoInactivo" type="checkbox"/> 
            </label>
            
          </from>
          <form className="container flex">  
            <label for="descripcion" className="espacioLados">
              Descripción Producucto
              <br/>
              <input name="descripcion  " type="text" className="descripcionProducto"/>
            </label>
            
            
          </form>
          <form>
            <label for="UM" className="espacioLados">
              Unidad de Medida
              <input name="UM" placeholder="Ej. UN, PACK, CJ" type="text"/>
            </label>
            <label for="precioProducto" className="espacioLados">
              Precio por Unidad de Medida
              <input name="precioProducto" type="number"/>
            </label>
          </form>
        </div>
        <br/>

        <br/>
        <div className="container">
          <button className="btn btn-success" type="submit"> Modificar producto </button>
          
        </div>

        <br/>
        <div className="container">
          <h2> Lista de productos Modificados </h2>
        </div>

        <hr className="anchoBorde" />
        <table className="container table table-striped espacioLados">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id producto</th>
              <th scope="col">Descripción</th>
              <th scope="col">Unidad de Medida</th>
              <th scope="col">Valor Unitario</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>PM0110</td>
              <td>Pulpa de mango 500g  - Packx10</td>
              <td>Pack</td>
              <td>19000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>PM01</td>
              <td>Pulpa de mango 500g </td>
              <td>UN</td>
              <td>2000</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>PP0110</td>
              <td>Pulpa de piña 500g  - Packx10</td>
              <td>Pack</td>
              <td>19000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>PP01</td>
              <td>Pulpa de piña 500g </td>
              <td>UN</td>
              <td>2000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>PF01</td>
              <td>Pulpa de fresa 500g  </td>
              <td>UN</td>
              <td>2500</td>
            </tr>
          </tbody>
        </table>
        
        
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