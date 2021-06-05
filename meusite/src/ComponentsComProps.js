import React from 'react';

const Equipe = (props) => {
    return (
        <div>
            <Sobre username={props.nome} cargo={props.cargo}
            idade={props.idade}/>
            <Social fb={props.facebook}/>
            <hr/>
        </div>
    )
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.username}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h3>Idade: {props.idade}</h3>
        </div>
    );
}
const Social = (props) => {
    return (
        <div>
            <a href={props.fb}>Facebook</a>
            <a>Linkedin</a>
            <a>Youtube</a>
            
        </div>
    );
}

function PropsComponents() {
    return (
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Matheus" cargo="Programador" idade="28" facebook="https://www.google.com"/>
            <Equipe nome="Lucas" cargo="Designer" idade="19"/>
        </div>
    );
}

export default PropsComponents;