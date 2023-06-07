import { useState, useEffect } from 'react'
import './style.css';
import pokemonData from "../../mock/data.json"

function Home() {

    const [pokemons, setPokemons] = useState([]);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        function fetchData() {
            setIsLoading(true);
            //para simular uma requisição a uma api que demora 5s para responder
            setTimeout(() => {
                var pkmnFormatted = pokemonData.map(pokemon => {
                    var id = "" + pokemon.id;
                    var pad = "000";
                    var newId = pad.substring(0, pad.length - id.length) + id;

                    return {...pokemon, newId: newId}
                })

                setPokemons(pkmnFormatted);

                setIsLoading(false);
            }, 3000)
        }

        fetchData();
    }, [])

    return (
        <div id="container">
            <header id='titleContainer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"></img>
                <h1>Pokedex</h1>
            </header>

            <div id="contentContainer">
                {
                    isLoading ? (
                        <h3 id="loading">Carregando...</h3>
                    )
                    :
                    pokemons.map(pokemon => {
                        return (
                            <div className="pokeCard" key={pokemon.newId}>
                                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.newId}.png`}/>
                                <h3>{pokemon.name.english}</h3>
                                <span>{pokemon.type[0]}</span>
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default Home;