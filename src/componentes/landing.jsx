import { useState, useEffect } from "react";
import React from "react";
import '../styles/landing.css';
import Logo from '/LOGOGYM.png';

function Landing(){
         const [isMobile, setIsMobile] = useState(false);
        const [menuOpen, setMenuOpen] = useState(false);
        const[ entrenadores, setEntrenadores]= useState([]);

        const verEntrenadores= async()=>{
          try{
              const result= await fetch("http://localhost:3000/api/getPersonal");
              if(!result.ok) throw new Error("Error en la respuesta");
              const data = await result.json();
              setEntrenadores(data);
          }catch(err){
            console.log("ha sucedido un error al cargar los entrenadores", err);
          }
        }
           useEffect(() => {
            verEntrenadores();
             const checkMobile = () => setIsMobile(window.innerWidth < 768);
             checkMobile();
             window.addEventListener('resize', checkMobile);
             return () => window.removeEventListener('resize', checkMobile);
           }, []);
           const mostrarEntrenador= (id)=>{
            console.log(id);
           }
  return (
    <>
     
        <header className="row m-2">
      <nav>
      {!isMobile && (
       <div className="nav-desktop">
          <a href="#">Clases </a>
          <a href="#">Entrenadores</a>
          <a href="#">Horarios</a>
          
       </div>
      )}

     {isMobile && (
        <div className="nav-mobile">
          {/* Botón hamburguesa */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          >
            ☰
          </button>

          {/* Menú desplegable */}
          {menuOpen && (
            <div className="mobile-menu" style={{ display: "flex", flexDirection: "column", color:"yellow" }}>
              <a href="#">Clases</a>
              <a href="#">Entrenadores</a>
              <a href="#">Horarios</a>
            </div>
          )}
        </div>
      )}
      </nav>

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
       <main className="row m-3 contendorEntrenadores justify-content-center">
        {entrenadores.map((entrenador)=> entrenador.rol === 3 ?(
          
          <div className="col-12 col-md-3 col-lg-3 entrenador" key={entrenador.id} onClick={()=>mostrarEntrenador(entrenador.id)}>
            <div className="signo"><h2>+</h2></div>
            <div className="imagen"> <img src={entrenador.foto} alt="imagen_entrandor" /></div>
            <div className="nombre"> <h2>{entrenador.nombre}</h2></div>
            <div className="rol"> <p>{entrenador.rol}</p></div>
          </div>
        ):null)}
       </main>
       
    </>
  );
    
}
export default Landing;