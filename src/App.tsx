import React, {useState} from 'react';
import { useSelector, useDispatch } from "react-redux"
import './App.css';
import { RootStore } from './Store';
import { getPokemon } from "./actions/PokemonActions"

function App() {

  const dispatch = useDispatch()

  const [pokemonName , setPokemonName] = useState("")
  const pokemonState = useSelector((state: RootStore) => state.pokemon)

  const handleChange = (event: any) => setPokemonName(event.target.value)
  const handleSubmit = () =>  dispatch(getPokemon(pokemonName))
  
  console.log("pokemon state:", pokemonState)

  return (
    <div className="App">
        <input type="text" onChange={handleChange}/>
        <button onClick={handleSubmit}>Search</button>
          {pokemonState.pokemon &&(
            <div>
              <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
              {pokemonState.pokemon.abilities.map(ability => {
                  return <p key={ability.ability.name}>{ability.ability.name}</p>
              })}
            </div>
          )}
    </div>
  );
}

export default App;
