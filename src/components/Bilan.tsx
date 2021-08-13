import React , {Component} from 'react' ;
import '../styles/Bilan.css'

class Bilan extends Component{

    render(){
      return (
        <div>
          <h1>Bilan</h1>
          <div className="content">
          <div className="skills-details">
                <div>
                    <h5 className="miova">ANALAMANGA</h5>
                </div>
                <div className="boxes">
                        <div className="box">
                            
                            <div className="topic">Nouveau Cas</div>
                            <div className="per">50</div>
                        </div>
                    <div className="box">
                        <div className="topic">Guéris</div>
                        <div className="per">20</div>
                     </div>
                    <div className="box">
                        <div className="topic">Décès</div>
                        <div className="per">3</div>
                    </div>
                
                </div>
                <div>
                    <h5 className="miova">SAVA</h5>
                </div>
                <div className="boxes">
                    <div className="box">
                        <div className="topic">Nouveau Cas</div>
                        <div className="per">20</div>
                    </div>
                    <div className="box">
                        <div className="topic">Guéris</div>
                        <div className="per">6</div>
                    </div>
                    <div className="box">
                        <div className="topic">Décès</div>
                        <div className="per">2</div>
                    </div>

                    
                </div>
            </div>
            <div className="skills-details">
                <div>
                    <h5 className="miova">DIANA</h5>
                </div>
                <div className="boxes">
                        <div className="box">
                            
                            <div className="topic">Nouveau Cas</div>
                            <div className="per">5</div>
                        </div>
                    <div className="box">
                        <div className="topic">Guéris</div>
                        <div className="per">12</div>
                     </div>
                    <div className="box">
                        <div className="topic">Décès</div>
                        <div className="per">14</div>
                    </div>
                
                </div>
                <div>
                    <h5 className="miova">ALAOTRA-MANGORO</h5>
                </div>
                <div className="boxes">
                    <div className="box">
                        <div className="topic">Nouveau Cas</div>
                        <div className="per">20</div>
                    </div>
                    <div className="box">
                        <div className="topic">Guéris</div>
                        <div className="per">60</div>
                    </div>
                    <div className="box">
                        <div className="topic">Décès</div>
                        <div className="per">6</div>
                    </div>

                    
                </div>
            </div>
          </div>
            

        </div>
      );
    }
  
  
  }
  
export default Bilan