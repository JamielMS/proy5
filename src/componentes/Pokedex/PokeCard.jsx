import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'


const PokeCard = ({ pokemon }) => {

    const [poke, setPoke] = useState()
    const navigate = useNavigate()

        useEffect(() => {
            axios.get(pokemon.url)
                .then( res =>setPoke(res.data))
                .catch(err => console.log(err))
        }, [])

const handleClick = () =>{
    navigate (`/pokedex/${poke.id}`)
}
  return (
    <article onClick={handleClick} className = {`card__pokemon border-${poke?.types[0].type.name} `}>   
        <header className ={ `card__header bg-${poke?.types[0].type.name} `}>
            <img className = "card__img" src={poke?.sprites.other['official-artwork'].front_default} 
            alt="" />
        </header>
        <h2 className = {`card__pokemon-name color-${poke?.types[0].type.name}`}>{poke?.name}</h2>
        
        <p className ="card__pokemon-type">
        {
            poke?.types.map(type =>
                <span key = {type.type.name} >{type.type.name} /</span>
            )
        }
        
        </p> 
        <p className ="card__pokemon-type-title">Tipo</p>
      
        <hr />
        
        <ul>
            <div className = "card__pokemon-stats">
                {
                    poke?.stats.map(stat =>(
                        <div className = "card__pokemon-stat" key = {stat.stat.url}>
                            <li >
                                <p className = "card__pokemon-stat-title">{stat.stat.name}</p>
                                <p className = {`card__pokemon-stat-attrib color-${poke?.types[0].type.name}`}>{stat.base_stat}</p>   
                            </li>
                        </div>
                    ))
                }
            </div>
        </ul>
        
        
    </article>
  )
}

export default PokeCard