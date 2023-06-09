import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
`;

export const TitleContainer = styled.header`
    display: flex;
    align-items: center;
    gap: 10px;

    img {
        width: 80px;
    }
`;

export const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: ${ props => props.loading ? 'auto' : 'auto auto auto auto auto' };
    gap: 15px;

    h3 {
        animation: cards 1s alternate infinite;
    }

    @keyframes cards {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
`;

export const PokeCard = styled.div`
    background: ${props => {
        let color = '';

        switch(props.pokemonType) {
            case 'Normal':
                color = '#A8A77A';
                break;
            case 'Fire':
                color = '#EE8130';
                break;
            case 'Water':
                color = '#6390F0';
                break;
            case 'Electric':
                color = '#F7D02C';
                break;
            case 'Grass':
                color = '#7AC74C';
                break;
            case 'Ice':
                color = '#96D9D6';
                break;
            case 'Fighting':
                color = '#C22E28';
                break;
            case 'Poison':
                color = '#A33EA1';
                break;
            case 'Ground':
                color = '#E2BF65';
                break;
            case 'Flying':
                color = '#A98FF3';
                break;
            case 'Psychic':
                color = '#F95587';
                break;
            case 'Bug':
                color = '#A6B91A';
                break;
            case 'Rock':
                color = '#B6A136';
                break;
            case 'Ghost':
                color = '#735797';
                break;
            case 'Dragon':
                color = '#705746';
                break;
            case 'Dark':
                color = '#705746';
                break;
            case 'Steel':
                color = '#B7B7CE';
                break;
            case 'Fairy':
                color = '#D685AD';
                break;
            default:
                color = '#fff';    
        }

        return color;
    }};
    padding: 20px;
    border-radius: 10px;
    color: #000;
    cursor: pointer;
    transition: .3s;
    display: flex;
    align-items: center;
    flex-direction: column;
    animation: cards 1s linear;

    &:hover{
        box-shadow:${props => {
        const shadow = '1px 1px 10px ';
        let color = '';

        switch(props.pokemonType) {
            case 'Normal':
                color = '#A8A77A';
                break;
            case 'Fire':
                color = '#EE8130';
                break;
            case 'Water':
                color = '#6390F0';
                break;
            case 'Electric':
                color = '#F7D02C';
                break;
            case 'Grass':
                color = '#7AC74C';
                break;
            case 'Ice':
                color = '#96D9D6';
                break;
            case 'Fighting':
                color = '#C22E28';
                break;
            case 'Poison':
                color = '#A33EA1';
                break;
            case 'Ground':
                color = '#E2BF65';
                break;
            case 'Flying':
                color = '#A98FF3';
                break;
            case 'Psychic':
                color = '#F95587';
                break;
            case 'Bug':
                color = '#A6B91A';
                break;
            case 'Rock':
                color = '#B6A136';
                break;
            case 'Ghost':
                color = '#735797';
                break;
            case 'Dragon':
                color = '#705746';
                break;
            case 'Dark':
                color = '#705746';
                break;
            case 'Steel':
                color = '#B7B7CE';
                break;
            case 'Fairy':
                color = '#D685AD';
                break;
            default:
                color = '#fff';    
        }

        return shadow + color;
    }};
        padding: 15px;
    }

    img {
        width: 12vw;
    }

    h3 {
        animation: none;
        margin: 0;
    }
`;