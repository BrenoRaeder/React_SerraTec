import { useState, useEffect } from 'react'
import {
    Container,
    TitleContainer,
    ContentContainer,
    PokeCard,
} from "./style";
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
        <Container>
            <TitleContainer id='titleContainer'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1200px-Pok%C3%A9_Ball_icon.svg.png"></img>
                <h1>Pokedex</h1>
            </TitleContainer>

            <ContentContainer  loading={isLoading}>
                {
                    isLoading ? (
                        <h3 id="loading">Carregando...</h3>
                    )
                    :
                    pokemons.map(pokemon => {
                        return (
                            <PokeCard key={pokemon.newId} pokemonType={pokemon.type[0]}>
                                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.newId}.png`}/>
                                <h3>{pokemon.name.english}</h3>
                                <span>{pokemon.type[0]}</span>
                            </PokeCard>
                        )
                    })
                }
                
            </ContentContainer>
        </Container>
    )
}

export default Home;