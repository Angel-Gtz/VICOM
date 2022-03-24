import './styles/App.scss';
import React, {useState, useEffect} from 'react'
import DeployMenu from './components/DeployMenu'

function App() {

  const [menu, setMenu] = useState(false)
  const navigationItems = ['Cocción', 'Preparación', 'Mesa y accsorios', 'Consumibles', 'Electrodomesticos', 'Línea profesional']
  const losMasVendidos = new Array(4).fill(0)
  const [state, setState] = useState(false)
  const [character, setCharacter] = useState(null)
  const [index, setIndex] = useState(2)
  let arr = []
  
  try{
    for(let i = 0; i < 5; i++){
      arr.push(character.episode[i])
    }
    console.log(arr)
  } catch {
    console.log('ERROR')
  }


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${index}`)
    .then(data => data.json())
    .then(data => setCharacter(data))
    .catch(setCharacter(false))
  }, [index])

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
            <img src="/icons/profile.svg" alt="icono del perfil" className="App-header__icon"/>
            <img src="/icons/cart.svg" alt="icono del carrito" className="App-header__icon"/>
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
            <button className="App-main-heroContainer__btn">
              VER TODO
            </button>
          </div>
        </div>
      </main>
      <div className="App-losMasVendidos">
          <h1 className="App-losMasVendidos__title">
            Los más vendidos
          </h1>
      </div>
      <div className="App-losMasVendidos-content">
        {
          losMasVendidos.map((element, index) => {
            return (
              <div className="App-losMasVendidos-box" key={index}>
                <img src="/images/placeholder.png" />
                <h3 className="App-losMasVendidos__subtitle">
                  Titulo
                </h3>
                <p className="App-losMasVendidos__text">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
                <button className="App-main-heroContainer__btn">
                  VER TODO
                </button>
              </div>
            )
          })
        }
      </div>
      <div className="App-characterAndQuestions-container">
        <div className="App-questions-container"> 
          <div className="App-questions-inner-container">
            <div className="App-questions-question-container">
              <p>
                  Pregunta 1
              </p>
              <p className="App__plus" onClick={() => setState(!state)}> 
                {state? '-' : '+'}
              </p>
            </div>
            {
              state && 
              <div className="App-question-textBox">
                <p className="App-question__text">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              </div>
            }
          </div>
        </div>
        <div className="App-character-container">
          <div className="App-character-inner-container">
              <div className="App-character__img-container">
                <h3 className="App-character__title">Personaje</h3>
                {
                character && <img src={character.image} alt="Foto del personaje" className='App-character__img'/>
                }
                {
                !character && <img src='/images/err.png' alt="Cargando contenido" className='App-character__img'/>
                }
              </div>
              <div className="App-character-info-continer">
                  <p>Nombre: <span className="App-character__info">{character?character.name: 'Cargando...'}</span></p>
                  <p>Genero: <span className="App-character__info">{character?character.gender: 'Cargando...'}</span></p>
                  <p>Episodes:</p>
                  <ul>
                    {
                      arr.map(el => {
                        return <li className="App-character__info">{el}</li>
                      })
                    }
                  </ul>
                  <div className="App-character-selector-container">
                    <button className="App-main-heroContainer__btn" onClick={() => setIndex(index - 1)}>Anterior</button>
                    <button className="App-main-heroContainer__btn" onClick={() => setIndex(index + 1)}>Siguiente</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
