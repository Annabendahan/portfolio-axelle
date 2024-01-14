import * as React from "react"
import Layout from '../components/layout'
import ake from '../images/ake.png'


const About = () => {
  return (
    <main>
       <Layout >
            <div className="about">
                <div className="about__sec">
                    <div className="about__sec__pic">
                        <img src={ake} alt="ake" />
                    </div>
                    <div className="about__sec__desc">
                        <p>
                            Passionnée d’image j’ai longtemps évolué dans un milieu strict.
                            L’aviation est un milieu passionnant mais mon besoin de création m’a poussée à changer de direction. La réorientation n’est pas un exercice naturel, mais l’envie de faire un métier qui a un sens pour moi dans un milieu où je m'épanouie est plus fort.
                            <br/>
                            <br/>
                    
                            <h4>STAGE</h4>
                       
                            
                            KAIRN Alpin designers
                            <br/>
                            Avril - Août 2023 | GRENOBLE
                            <br/>
                            Modeleur 3D/rendering.
                            <br/>
                            <br/>
                            COPYWRIGHTE DESIGN
                            <br/>
                            Avril - juillet 2022 | PARIS
                            <br/>
                            Maquettage/prototypage
                            <br/>
                            <br/>
                            <h4>FORMATION</h4>
                         
                           
                            BACHELOR Modelage 3D
                            <br/>
                            Septembre 2020 | STRATE | Sévres
                            <br/>
                            Modelage physique et numérique.
                            <br/>
                            Suivi de projet et suivi de réalisation: sketch modeling, convergence style technique, conception, réalisation, rendu.
                            <br/><br/>
                            TITRE ENAC Technicien Aéronautique<br/>
                            d’exploitation 2013 - 2015 | CFA des métiers de l’aérien | MASSY
                            <br/><br/>
                            BTS AUDIOVISUEL Option Image.
                            <br/>
                            2007- 2009 | Lycée Henri-martin |
                            <br/>
                            SAINT-QUENTIN</p>
                    </div>
                </div>
                <div className="about__infos">
                    <div className="about__infos__c">
                        <h4> QUALITÉS </h4>
                        <p>Créativité <br/>
                        Capacité à fédérer <br/>
                        Polychronie <br/>
                        Anticipation <br/>
                        Esprit d’équipe <br/>
                        </p>
                    </div>

                    <div className="about__infos__a">
                        <div className="about__infos__a__l1"> 
                        <h4> COMPÉTENCES </h4>
                        <p>Anglais courant <br/>
                        Photographie<br/>
                        Suite Adobe<br/>
                        Rhino<br/>
                        </p>
                        </div>
                        <div className="about__infos__a__l2"> 
                   <br/> 
                        <p> Alias<br/>
                        keyshot<br/>
                        Vred<br/>
                        twinmotion<br/>
                        Logiciel aéronautique
                        </p>
                        </div>
                    </div>

                    <div className="about__infos__c">
                    <h4> CONTACT </h4>
                        <p>
                        30 | Décembre | 1988<br/>
                        Paris, Annecy, France<br/>
                        a.bendahan@strate.design<br/>
                        +33.6 59 85 52 07
                        </p>
                    </div>
                   
                  
                </div>
            </div>
       </Layout>
      
    </main>
  )
}

export default About

