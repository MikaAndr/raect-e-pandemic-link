/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from 'react';
import ispm from '../images/pandemic.jpg'
import Aurus from '../images/Aurus.png'
import Fantasy from '../images/Fantsay.jpg'
import logos from '../images/logoz.png'
import MM from '../images/MM.jpg'
import OP from '../images/OP.png'

import '../styles/Actus.css'

class Actus extends Component{

    render(){
      return (
        <div>
          <h1>Actus</h1>
            <div className=" row">
                <div className="box">
                        <h2>27 juillet 2021</h2>
                        <p>
                        Déclaration conjointe de la Directrice générale de l’UNICEF, Mme Henrietta Fore, et du Directeur général de l’OMS, le Dr Tedros Adhanom Ghebreyesus, pour le Pré-Sommet des Nations Unies sur les systèmes alimentaires
                        </p>
                </div>
                <div className="box">
                        <h2>22 juillet 2021</h2>
                        <p>
                        L’inégalité vaccinale compromet la reprise économique mondiale
                        </p>
                </div>
                <div className="box">
                        <h2>22 juillet 2021</h2>
                        <p>
                        Le Comité international paralympique et l’Organisation mondiale de la Santé s’engagent à coopérer pour promouvoir la diversité et l’équité en matière de santé et de sport
                        </p>
                </div>
                <div className="box">
                        <h2>27 juillet 2021</h2>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                </div>
                <div className="box">
                        <h2>27 juillet 2021</h2>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                </div>
                <div className="box">
                        <h2>27 juillet 2021</h2>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                </div>
            </div>
            <div className="Autre">
                <div className="box">
                    <div>
                        <div className="Titre">
                            <h3>Populaires</h3>
                        </div>
                        <br/>
                        <div className="tt1">
                                    <img src={Aurus} alt=""/>
                                    <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                                    </p>
                        </div>
                        <div className="tt1">
                                    <img src={Fantasy} alt=""/>
                                    <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                                    </p>
                        </div>
                        <div className="tt1">
                                    <img src={logos} alt=""/>
                                    <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                                    </p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="Titre">
                         <h3>Top</h3>
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
                        <img src={OP} alt=""/>
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
                            Essai Clinique
                        </h4>
                        <p>
                        15 juillet 2021 Communiqué de presse
                        Selon de nouvelles données de l’OMS et de l’UNICEF, la pandémie de COVID-19 entraîne un net recul des vaccinations chez l’enfant
                        </p>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  
  }
  
export default Actus