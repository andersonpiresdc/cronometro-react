import React, { Component } from 'react';
import './style.css'

class App extends Component{

   constructor(props){
      super(props);
      this.state = {
         numero: 0,
         txtBotaoIniciar: 'Iniciar' 
      };

      this.timer = null;
      this.iniciar = this.iniciar.bind(this);
      this.parar = this.parar.bind(this);
   }        

   iniciar(){
      let state = this.state;
      if (this.timer !== null){
         clearInterval(this.timer);
         this.timer = null;
         state.txtBotaoIniciar = 'Iniciar';
      }else{
         this.timer = setInterval(()=>{
            let state = this.state;
            state.numero += 0.1;
            this.setState(state);
         }, 100);
         state.txtBotaoIniciar = 'Pausar';
      }

      this.setState(state);
   }

   parar(){
      if (this.timer !== null){
         clearInterval(this.timer);
         this.timer = null;   
      }

      let state = this.state;
      state.numero = 0;
      state.txtBotaoIniciar = 'Iniciar';
      this.setState(state);
   }


   render(){
      return(
         <div className="container">
            <img src={require('./assets/cronometro.png')} className="img" alt=""/>
            <a href="#top" className="timer">{this.state.numero.toFixed(1)}</a>
            {/* <div className="areaBtn">
               <a href="#top" className="botao" onClick={this.iniciar}>{this.state.txtBotaoIniciar}</a>
               <a href="#top" className="botao" onClick={this.parar}>Parar</a>
            </div> */}
            <div className="areaBtn">
               <button className="botao" onClick={this.iniciar}>{this.state.txtBotaoIniciar}</button>
               <button className="botao" onClick={this.parar}>Parar</button>
            </div>
         </div>
      )
   }

}


export default App;
