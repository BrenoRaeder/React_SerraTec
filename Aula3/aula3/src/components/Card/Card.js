import React from 'react';
import './style.css';

class Card extends React.Component {
    render() {
        return (
            <div className="container-card">
                <div>
                    <img src={this.props.img} alt="Imagem do usuário"></img>
                    <h3>{this.props.name}</h3>
                </div>
            </div>
        )
    }
}

export default Card;