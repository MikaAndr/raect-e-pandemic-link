/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component } from 'react';

import './App.css';

import Bilan from './components/Bilan';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Actu from './components/Actus';
import Home from './components/Home';
import Consultation from './components/Consultation';

class App extends Component {
  state:any;

  constructor(props: any){
    super(props);
    this.state={
      menu:'home',
      donnee:[]
    }
  }

  render() {
    return (
      
        <div>
          
          <div>
            
            <nav className="sticky">
                    <div className="navbar">
                    <div className="logo"><a href="j">IM<span>TIC</span>IA 5</a></div>
                        <ul className="menu">
                          <li><a onClick={()=>{this.setState({menu:'Actu'})}}>Actualités</a></li>
                          <li><a onClick={()=>{this.setState({menu:'Bilan'})}}>Bilan Covid</a></li>
                          <li><a onClick={()=>{this.setState({menu:'Consult'})}}>Consultation</a></li>
                          <li><a onClick={()=>{this.setState({menu:'Home'})}}>About</a></li>
                          <li><a href="#contact">Contacts</a></li>
                        </ul>
                    </div>
            </nav>
            
            {this.affichage()}
          </div>
          
      </div>
      
    )
  }
  affichage(){
    if (this.state.menu==='Bilan'){
      return (<Bilan/>);
    }
    else if (this.state.menu==='Actu'){
      return (<Actu/>);
    }
    else if (this.state.menu==='Consult'){
      return (<Consultation/>);
    }
    else if (this.state.menu==='Home'){
      return (<Home/>);
    }
  }
}

export default App;
