import { useEffect } from 'react';
import { ContainerAbout } from './style.js';
import { api } from '../../services/api.js';

function About() {

    useEffect(() => {
        async function fetchData() {
            await api.get('/instrutores').then((response) => {
                console.log(response);
            }).catch((err) => {
                console.log(err);
            });
            
        }

        fetchData();
    }, []);

    /*async function fetchData() {
        const pokemons = await fetch("https://pokeapi.co/api/v2/pokemon");
        const json = await pokemons.json();
        console.log(json);
    }*/

    return (
        <ContainerAbout>
            <h1>About</h1>
            <button>Buscar Dados</button>
        </ContainerAbout>
    )
}

export default About;