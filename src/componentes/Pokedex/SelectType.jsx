import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SelectType = ({setSelectValue}) => {
    const [types, setTypes] = useState()
    
    useEffect(() => {
        const url = `https://pokeapi.co/api/v2/type`;
        axios.get(url)
            .then( res => setTypes(res.data))
            .catch(err => console.log(err))
    },[])

    const handleChange = (e) =>{
        setSelectValue(e.target.value) 
    }

    return (
        <select  className=  "input__select" onChange = {handleChange} name="" id="">
            <option value="allpokemons" > All Pokemons</option>
            {
                types?.results.map(type =>(
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
    )
}

export default SelectType