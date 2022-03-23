import './App.scss';
import Icons from './components/Icons'

function App() {

  const navigationItems = ['Cocción', 'Preparación', 'Mesa y accsorios', 'Consumibles', 'Electrodomesticos', 'Línea profesional']
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-banner">
          <h3 className="App-header-banner__text">
            ENVIO GRATIS EN PEDIDOS DESDE $699 
          </h3>
        </div>
        <div className="App-header-navigation">
          <div className="App-header-navigation__img-container">
            <img src="/images/lavasconia.png" alt="lavasconia logo" className="App-header-navigation__img"/>
          </div>
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
    </div>
  );
}

export default App;
