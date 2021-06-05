import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome
        }
        this.entar = this.entar.bind(this);
    }

    entar(userName){
        this.setState({nome: userName});
    }
    render() {
        return (
            <div>
                <h2>Bem Vindo(a) {this.state.nome} </h2>

                <button onClick={ () => this.entar('Jose')}>
                    Entrar no Sistama
                </button>

                <button onClick={() => this.setState({nome: ''})}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;