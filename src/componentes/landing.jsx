import { useState, useEffect } from "react";
import React from "react";
import '../styles/landing.css';
import Logo from '/LOGOGYM.png';

function Landing(){
         const [isMobile, setIsMobile] = useState(false);

           useEffect(() => {
             const checkMobile = () => setIsMobile(window.innerWidth < 768);
             checkMobile();
             window.addEventListener('resize', checkMobile);
             return () => window.removeEventListener('resize', checkMobile);
           }, []);
  return (
    <>
     
        <header className="row m-2">
      {!isMobile && (
        <div>
          <h1>hola pc</h1>
        </div>
      )}

      {isMobile && (
        <div>
          <h1>hola mobile</h1>
        </div>
      )}

        <div className="col-12 col-lg-6  titulo">
            <div className="titulo_nombre">
           <h1>
                <img src={Logo} alt=""  className="logo"/>
              <span translate="no"> GYM</span>  
            </h1>
             <h1 translate="no" className="h1Abajo">STRIKE</h1>
            </div>
             <div className="informacion">
                <p>Somos tu campo de entrenamiento para la excelencia física. 
                Nuestros entrenadores generales y personalizados están listos para guiarte en cada paso de tu jornada. 
                Tenemos los horarios a tu disposicion y lo que necesitas para mejorar al alcence de tu mano.</p>
             </div>
             <div className="cantidad-persona">
                <h2>Entranando: 22 personas</h2>
             </div>
       </div>
       <div className="col-12 col-lg-6 fondo_imagen_landig">
       

       </div>
       </header>
       
    </>
  );
    
}
export default Landing;