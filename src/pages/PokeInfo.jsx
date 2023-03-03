import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import HeaderPrincipal from '../componentes/shared/HeaderPrincipal';

const PokeInfo = () => {

    const { id } = useParams()

    const [poke, setPoke] = useState()
    const [hasError, setHasError] = useState(false)

    useEffect(() =>{
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        axios.get(url)
            .then(res => { 
                setPoke(res.data)
                console.log(res.data);
                setHasError(false)
            })
            .catch(err => {
                setHasError(true)
                console.log(err)
            })
    },[id])

    if(hasError){
        return (
            <div>   
                <HeaderPrincipal />
                <h1>The pokemon with name "{id}"" not found</h1>
            </div>
        )
    }
    else{
    return (

        <div>
            <HeaderPrincipal />
            <div className = "pokemon__card">
            <div className = {`pokemon__header bg-${poke?.types[0].type.name}` }>
                <img className = "pokemon__img" src={poke?.sprites.other['official-artwork'].front_default} alt="" />
            </div>
            <div className='pokemon__id-container'>
                <span className={`pokemon__id border-${poke?.types[0].type.name}`}>#{poke?.id}</span>
            </div>

            <h1 className= {`pokemon__name color-${poke?.types[0].type.name}` }>{poke?.name}</h1>

            <div className="pokemon__measures">
                <div>
                    <h6 className='pokemon__measure'>Weight</h6>
                    <p className='pokemon__measure'> {poke?.weight}</p>
                </div>
                <div>
                    <h6 className='pokemon__measure'>Height</h6>
                    <p className='pokemon__measure '>{poke?.height}</p>
                </div>
            </div>

            <div className='pokemon__characteristics'>
                <div className='pokemon__characteristic'>
                    <h4 className='pokemon__characteristic-title'>Types</h4>
                    <div className = "pokemon__types">
                    {
                        poke?.types.map(type =>
                            <div className = {`pokemon__type bg-i-${type.type.name}`} 
                            key = {type.type.name} >{type.type.name}</div>
                        )
                    }
                    </div> 
                </div>
                <div className='pokemon__characteristic'>
                    <h4 className='pokemon__characteristic-title'>Abilities</h4>
                    <div className = "pokemon__abilities">
                    {
                        poke?.abilities.map(ability =>
                            <p className = {`pokemon__ability`} 
                            key = {ability.ability.name}>{ability.ability.name}</p>
                        )
                    }
                    </div> 
                </div>
            </div>
            
                <div className='pokemon__stats'>
                    <h2 className =  {`pokemon__stats-title color-${poke?.types[0].type.name}`}>Stats</h2>
                
                    <div className = "pokemon__stat-container">
                        <p className='pokemon__stat-name'>HP</p><span>{poke?.stats[0].base_stat}/150</span>
                    </div>
                    <div  className={`pokemon__bar border-${poke?.types[0].type.name}`}>
                        <div className={`pokemon__bar-stat bg-i-${poke?.types[0].type.name}`} style = {{width:`${poke?.stats[0].base_stat * 0.66 }%`}}>

                        </div>
                    </div>

                    <div className = "pokemon__stat-container">
                        <p className='pokemon__stat-name'>Attack</p><span>{poke?.stats[1].base_stat}/150</span>
                    </div>
                    <div  className={`pokemon__bar border-${poke?.types[0].type.name}`}>
                        <div className={`pokemon__bar-stat bg-i-${poke?.types[0].type.name}`} style = {{width:`${poke?.stats[1].base_stat * 0.66 }%`}}>
                        </div>
                    </div>

                    <div className = "pokemon__stat-container">
                        <p className='pokemon__stat-name'>Defense</p><span>{poke?.stats[2].base_stat}/150</span>
                    </div>
                    <div  className={`pokemon__bar border-${poke?.types[0].type.name}`}>
                        <div className={`pokemon__bar-stat bg-i-${poke?.types[0].type.name}`} style = {{width:`${poke?.stats[2].base_stat * 0.66 }%`}}>
                        </div>
                    </div>
                    
                    <div className = "pokemon__stat-container">
                        <p className='pokemon__stat-name'>Speed</p><span>{poke?.stats[5].base_stat}/150</span>
                    </div>
                    <div className={`pokemon__bar border-${poke?.types[0].type.name}`}>
                        <div className={`pokemon__bar-stat bg-i-${poke?.types[0].type.name}`} style = {{width:`${poke?.stats[5].base_stat * 0.66 }%`}}>
                        </div>
                    </div>
                </div>

                <div className='pokemon__movements'>
                    <h2 className= {`pokemon__movements-title color-${poke?.types[0].type.name}`}>Movements</h2>
                    <p className="pokemon__movements-container">
                    {
                        poke?.moves.map(move =>
                            <span className = {`pokemon__move`} 
                            key = {move.move.name}>{move.move.name}</span>
                        )
                    }
                    </p>
                </div>
            </div>
        </div>
        )
    }
}

export default PokeInfo