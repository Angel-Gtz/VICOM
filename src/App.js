import './styles/App.scss';
import React, {useState} from 'react'
import Icons from './components/Icons'
import DeployMenu from './components/DeployMenu'

function App() {

  const [menu, setMenu] = useState(false)
  const navigationItems = ['Cocción', 'Preparación', 'Mesa y accsorios', 'Consumibles', 'Electrodomesticos', 'Línea profesional']
  const losMasVendidos = [{}, {}, {}, {}]

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-banner">
          <h3 className="App-header-banner__text">
            ENVIO GRATIS EN PEDIDOS DESDE $699 
          </h3>
        </div>
        <div className="App-header-navigation">
          <div className="App-header-menu__btn">
            <img src="/icons/menu.png" alt="menu deplegable" className="App-header_menuIcon" onClick={() => setMenu(true)}/>
          </div>
          <div className="App-header-navigation__img-container">
            <img src="/images/lavasconia.png" alt="lavasconia logo" className="App-header-navigation__img"/>
          </div>
          {
            menu === true && <DeployMenu setMenu={setMenu} navigationItems={navigationItems}/>
          }
          <div className="App-header-navigation-options">
            {
              navigationItems.map((element, index) => {
                return <p className="App-header-navigation-options__items" key={index}>{element}</p>
              })
            }
          </div>
          <div className="App-header-navigation__icons-container">
            <Icons />
          </div>
        </div>
      </header>

      <main className="App-main">
        <div className="App-main-eckoContainer">
          <img src="/images/ecko.png" alt="ECKO logo" className="App-body__ecko__img"/>
        </div>
        <div className="App-main-promoContainer">
          <div className="App-main-promoContainer_imgs">
            <img src="/images/bluePromo.png" alt="5 pack de sartenes ekco a solo 899" className="App-main__bluePromoImg"/>
            <img src="/images/kitchen.png" alt="cocina con productos ecko" className="App-main__kitchenImg"/>
          </div>
        </div>
        <div className="App-main-heroContainer">
          <div className="App-main-heroContainer-fryingPanContainer">
            <img src="/images/fryingPan.png" alt="sarten ecko con camarones" className="App-main__fryingPanImg"/>
          </div>
          <div className="App-main-heroContainer-textContainer">
            <h1 className="App-main-heroContainer__h1">
              Recetas EKCO
            </h1>
            <h2 className="App-main-heroContainer__h2">
              Camarones al mojo de ajo
            </h2>
            <h5 className="App-main-heroContainer__h5">
            Ingredientes:
            </h5>
            <p className="App-main-heroContainer__text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="App-main-heroContainer__btn">VER TODO</button>
          </div>
        </div>
      </main>
      <div className="App-losMasVendidos">
          <h1 className="App-losMasVendidos__title">Los más vendidos</h1>
      </div>
      <div className="App-losMasVendidos-content">

        {
          losMasVendidos.map((element, index) => {
            return (
              <div className="App-losMasVendidos-box">
                <img src="/images/placeholder.png" />
                <h3 className="App-losMasVendidos__subtitle">Titulo</h3>
                <p className="App-losMasVendidos__text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <button className="App-main-heroContainer__btn">VER TODO</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
