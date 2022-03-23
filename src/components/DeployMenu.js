import React from 'react'
import Icons from './Icons'

const DeployMenu = ({setMenu, navigationItems}) => {
    return (
        <div className="DeployMenu">
            <div className="DeployMenu__closeMark">
                <p onClick={() => setMenu(false)}>X</p>
            </div>
            <div className="DeployMenu__items">
                { 
                navigationItems.map((element, index) => {
                    return <p className="App-header-navigation-options__items" key={index}>{element}</p>
                    })
                }
            </div>
            <div className="DeployMenu-login">
                <Icons />
                <h5>Iniciar Sesión</h5>

            </div>
      </div>
    )
}

export default DeployMenu             
