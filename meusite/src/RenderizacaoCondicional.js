import React, { Component } from 'react';

class RenderizacaoCondicional extends Component {

    constructor(props) {
        super(props);
        this.state = {
            status: false
        }
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    sair() {
         this.setState({ status : false})   
    }

    entrar() {
        this.setState({ status : true}) 
    }

    render() {
        return (
            <div>
                {
                    this.state.status ?
                        <div>
                            <h2> Bem vido ao Sistema </h2>
                            <button onClick={this.sair}> Sair</button>
                        </div> :
                        <div>
                            <h2>Olá Visitante, faça login</h2>
                            <button onClick={this.entrar}> Entrar no Sistema</button>
                        </div>
                }
            </div>
        );
    }
}

export default RenderizacaoCondicional;