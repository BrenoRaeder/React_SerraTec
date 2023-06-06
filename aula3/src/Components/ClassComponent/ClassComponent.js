import React from 'react';
import './style.css';

class App2 extends React.Component {
    state = {
        num: 0,
    }

    handleDecrement = () => {
        this.setState({num: this.state.num - 1});
    }

    handleIncrement = () => {
        this.setState({num: this.state.num + 1});
    }

    render() {
        return (
            <div className="container-count">
                <h1>Componente por Classe</h1>
                <h2>exemplo de state</h2>
                <p>{this.state.num}</p>
                <div className="container-button">
                    <button onClick={this.handleDecrement}>-</button>
                    <button onClick={this.handleIncrement}>+</button>
                </div>
            </div>
        )
    }
}

export default App2;