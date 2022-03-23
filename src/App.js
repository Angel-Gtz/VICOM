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
              navigationItems.map(element => {
                return <p className="App-header-navigation-options__items">{element}</p>
              })
            }
          </div>
          <div className="App-header-navigation__icons-container">
            <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Iconly/Curved/Profile">
              <g id="Profile">
              <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M11.8445 21.6618C8.15273 21.6618 5 21.0873 5 18.7865C5 16.4858 8.13273 14.3618 11.8445 14.3618C15.5364 14.3618 18.6891 16.4652 18.6891 18.766C18.6891 21.0658 15.5564 21.6618 11.8445 21.6618Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.8372 11.1735C14.26 11.1735 16.2236 9.2099 16.2236 6.78718C16.2236 4.36445 14.26 2.3999 11.8372 2.3999C9.41452 2.3999 7.44998 4.36445 7.44998 6.78718C7.4418 9.20172 9.3918 11.1654 11.8063 11.1735C11.8172 11.1735 11.8272 11.1735 11.8372 11.1735Z" stroke="#130F26" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </g>
              </g>
            </svg>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
