import React, {Component} from 'react';


class Home extends Component {
    state:any;

    constructor(props: any){
      super(props);
      this.state={
        menu:'home',
        donnee:[]
      }
    }
    render(){
        return (
            
            <div id="hero">
            <div className="hero container">
              <div>
                <p>E -<span> Pandemic </span>-Link</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="Ready">
                  <a href="http://localhost:3000/Actus.tsx" type="button" className="cta GO">COMMENCEZ</a>
                </div>
              </div>
            </div>
          </div>
          );
    }
}
export default Home