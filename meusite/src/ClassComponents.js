import React, { Component } from 'react';

class Equipe extends Component {
    render() {
        return (
            <div>
                <Sobre nome={this.props.nome} cargo={this.cargo}
                    idade={this.props.idade} />
                <Social />
                <hr />
            </div>
        );
    }
}

const Social = () =>{
    return(
        <div>
            <a>Facebook </a>
            <a>Facebook </a>
        </div>
    );
}

class Sobre extends Component {
    render() {
        return (
            <div>
                <h2> Olá sou o(a): {this.props.nome}</h2>
                <h3> Cargo: {this.props.cargo}</h3>
                <h3> Idade: {this.props.idade}</h3>
            </div>

        );
    }
}

function ClassComponents() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Matheus" cargo="Programador" idade="28" facebook="https://www.google.com" />
            <Equipe nome="Lucas" cargo="Designer" idade="19" />
        </div>
    );
}

export default ClassComponents;