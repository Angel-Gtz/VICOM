import React from 'react'

const DeployMenu = ({setMenu, navigationItems}) => {
    return (
        <div className="DeployMenu">
            <div className="DeployMenu__closeMark">
                <p onClick={() => setMenu(false)}>X</p>
            </div>
            <div className="DeployMenu__items">
                { 
                navigationItems.map((element, index) => {
                    return <p className="App-header-navigation-options__deployitems" key={index}>{element}</p>
                    })
                }
            </div>
      </div>
    )
}

export default DeployMenu
