import { useState, useEffect } from "react";
import React from "react";
import Logo from '/LOGOGYM.png';
import "../App.css";

function Login() {
     const [isMobile, setIsMobile] = useState(false);
       useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);


  return (
    <>
        {!isMobile && (
          <div className="row m-2 pantalla_desktop">

            <div className="col-lg-6  text-white p-0  titulo_fondo_negro titulo_desktop" >
                <h1>
                <img src={Logo} alt="" />
              <span translate="no"> GYM</span>  
            </h1>
            <h1 translate="no" className="h1Abajo">STRIKE</h1>
            </div>

            
               <form action="" className="col-lg-6  text-white p-0 login login-Desktop">
                        <div className="datos ">
                            <p>INGRESE SU CEDULA</p>
                                <input type="number" />
                        </div>
                        <div className="datos">
                            <p>INGRESE SU CLAVE </p>
                            <input type="password" /> 
                        </div>
                        <button>Ingresar</button>
                    </form>
           
            
          </div>  
        )}

         {isMobile && (
         <div className="pantalla_mobile">

            <div className="titulo_fondo_negro">
            <h1>
                <img src={Logo} alt="" />
              <span translate="no"> GYM</span>  
            </h1>
            <h1 translate="no" className="h1Abajo">STRIKE</h1>
            </div>
            <div className="ingreso">

                    <form action="" className="login">
                        <div className="datos">
                            <p>INGRESE SU CEDULA</p>
                                <input type="number" />
                        </div>
                        <div className="datos">
                            <p>INGRESE SU CLAVE </p>
                            <input type="password" /> 
                        </div>
                        <button>Ingresar</button>
                    </form>
            </div>
         </div>
       
         )}
     
    </>
  );
}

export default Login;
