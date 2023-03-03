import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNameTrainer } from '../store/slices/trainerName.slice';

const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) =>{
        e.preventDefault();
       dispatch(setNameTrainer(e.target.name.value.trim()))
       e.target.name.value = ""
       navigate('/pokedex')
    }

    return (
    <div className='home__principal'>

        <div className='home__content'>
            <img src="/images/logo-pokedex.png" alt="" />
            <h2 className="home__greeting">Hi Trainer!</h2> 

            <p className='home__instruction'>Trainer insert your name, please</p>
            <form className ="home__form" onSubmit={handleSubmit}>
                <input className="home__input" placeholder='Trainer Name' type="text" id = "name" />
                <button className="home__button">Start</button>
            </form>
        </div>
        <footer className = "home__footer">
            <div className = "home__footer-container-pokebola">
                <img className = "home__principal-pokebola" src="/images/pokebola.png" alt="" />
            </div>
        </footer>
    </div>
    )
}

export default Home