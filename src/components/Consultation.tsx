/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import ispm from '../images/hand.png'
import MM from '../images/doct.jpg'
import OP from '../images/corona.png'

import '../styles/Consult.css'

class Consultation extends Component {

    render() {
        return (
            <div>
                <h1>Consultation</h1>
                <br/>
                <div className="Titre">
                         <h3>Top</h3>
                </div>
                <div className="contain">

                    <div className="tt2">
                        <img src={MM} alt=""/>
                        <h4>
                            <br/>
                            Symptomes
                        </h4>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                    </div>
                    <div className="tt2">
                        <img src={OP} alt=""/>
                        <h4>
                            <br/>
                            Règles Sanitaires
                        </h4>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                    </div>
                    <div className="tt2">
                        <img src={MM} alt=""/>
                        <h4>
                            <br/>
                            Essai Clinique
                        </h4>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                    </div>
                    <div className="tt2">
                        <img src={ispm} alt=""/>
                        <h4>
                            <br/>
                            Désinfection
                        </h4>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                    </div>
                </div>
                <br/>
                <div className="Titre">
                         <h3>FAIRE UNE Consultation</h3>
                </div>
                <br/>
                <div className="Mère">
                    <form action="">
                        <div className="group">
                    <input className="Nom" type="text" placeholder="Entrer votre Nom"/>
                        </div>
                    <br/>
                    <br/>
                    <br/>
                        <div className="group">
                    <input className="Mail" type="text" placeholder="Entrer votre Mail"/>
                        </div>
                    <br/>
                    <br/>
                    <br/>
                        <div>
                    <textarea name="" id=""></textarea>
                        </div>
                            <button >Valider</button>
                    </form>
                </div>

            </div>
      );
    }
  
  
  }
  
export default Consultation