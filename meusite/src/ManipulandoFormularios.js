import React, { Component } from 'react';

class ManipulandoFormularios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            senha: "",
            sexo: "masculino"
        };
        this.trocaEmail = this.trocaEmail.bind(this)
        this.trocaSexo = this.trocaSexo.bind(this)

    }

    trocaEmail(e) {
        this.setState({ email: e.target.value });
    }

    trocaSexo(e) {
        this.setState({ sexo: e.target.value });
    }

    render() {
        return (
            <div>
                <h2>Login</h2>
                Email:
                <input type="email" name="email" value={this.state.email}
                    onChange={this.trocaEmail} /><br />
                Senha:
                <input type="password" name="senha" value={this.state.senha}
                    onChange={(e) => this.setState({ senha: e.target.value })} />
                <br />
                Sexo:m
                <select name="sexo" value={this.state.sexo}
                    onChange={this.trocaSexo}>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <div>
                    <h3>{this.state.email}</h3>
                    <h3>{this.state.senha}</h3>
                    <h3>{this.state.sexo}</h3>
                </div>
            </div>
        );
    }
}

export default ManipulandoFormularios;