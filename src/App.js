import { Component } from "react";
import { FormularioCadastro } from "./Componentes/Formulariocadastro/FormularioCadastro";
import { ListaDeNotas } from "./Componentes/ListaDeNotas/ListaDeNotas";
import "./assets/App.css";
import "./assets/index.css";

class App extends Component{

  constructor()  {
    super();
    this.state = {
      notas: []
    };//iniciando como objeto
  }

  criarNota(titulo, texto)  {
    const NovaNota = {titulo, texto};//criar objeto
    const novoArrayNotas = [...this.state.notas, NovaNota]//criando um novo array
    const novoEstado = { //criando um novo estado
      notas: novoArrayNotas
    };
    this.setState(novoEstado);//setando o estado
  }

  render()  {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
    }
}

export default App;
