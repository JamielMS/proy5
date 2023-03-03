import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import PokeCard from '../componentes/Pokedex/PokeCard'
import SelectType from '../componentes/Pokedex/SelectType'


const Pokedex = () => {
    const { nameTrainer } =useSelector( state => state)

    const [pokemons, setPokemons] = useState()
    const [selectValue, setSelectValue] = useState('allpokemons')

    useEffect(() => {
        if(selectValue === 'allpokemons'){
            const url =  "https://pokeapi.co/api/v2/pokemon?limit=15&offset=0"
            axios.get(url)
            .then(res => setPokemons(res.data))
            .catch(err => console.log(err))
        }
        else{
            axios.get(selectValue)
                .then( res =>{
                        const results = res.data.pokemon.map( e => e.pokemon)
                        setPokemons({results})
                })
                .catch(err => console.log(err))
        }
    }, [selectValue])

    const navigate = useNavigate()
    
    const handleSubmit = e =>{
        e.preventDefault()    
        const inputValue = e.target.pokemon.value.trim().toLowerCase()
        navigate(`/pokedex/${inputValue}`)
        e.target.pokemon.value = ""
    }

    return (
        <div>
            <header className = "pokedex__title">
                <img className = "pokedex__title-logo" src="/images/logo-pokedex.png" alt="" />
                <div className = "pokedex__title-container-pokebola">
                    <img className = "pokedex__title-pokebola" src="/images/pokebola.png" alt="" />
                </div>
            </header>
            <div className = "container__trainer">
            <h1><span className = "container__trainer-name">Hi {nameTrainer}</span>, here find your favorite pokémon.</h1>
            </div>
            <div className = "container__quest">
                <div className = "container__quest-form">
                <form onSubmit = {handleSubmit}>
                    <input className = "input__form" id = "pokemon" type="text" placeholder='Quest a pokemon'/>
                    <button className = "button__form">Search</button>
                </form>
                </div>
                <div className = "container__quest-type">
                    <SelectType setSelectValue = {setSelectValue} />
                </div>
            </div>
            <div className = "pokedex__pokemon">
                {
                    pokemons?.results.map(pokemon =>(
                        <PokeCard 
                            key = {pokemon.url}
                            pokemon = {pokemon}
                        />
                     ))
                }
            </div>
        </div>
    )
}

export default Pokedex