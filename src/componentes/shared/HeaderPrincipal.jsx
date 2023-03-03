import React from 'react'

const HeaderPrincipal = () => {
  return (
    <header className = "pokedex__title">
        <img className = "pokedex__title-logo" src="/images/logo-pokedex.png" alt="" />
        <div className = "pokedex__title-container-pokebola">
            <img className = "pokedex__title-pokebola" src="/images/pokebola.png" alt="" />
        </div>
    </header>
  )
}

export default HeaderPrincipal