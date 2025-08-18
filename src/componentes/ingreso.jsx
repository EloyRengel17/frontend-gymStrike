import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import '../styles/landing.css';
import Logo from '/LOGOGYM.png';

function Ingreso() {
  const [cedula, setCedula] = useState("");

  // Focus en el input al cargar
  useEffect(() => {
    const cedulaInput = document.getElementById('cedulaInput');
    if (cedulaInput) {
      cedulaInput.focus();
    }
  }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();


  try {
    const res = await fetch("http://localhost:3000/api/crear_actividad_gimnasio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cedula_cliente: cedula })
    });

    const data = await res.json(); // primero parseamos la respuesta

    if (!res.ok) {
      // Mostrar el mensaje del backend sin romper
     Swal.fire({
        icon: "error",
        title: "Acceso denegado",
        text: data.error || "Ocurrió un problema."
      });
       setCedula("");
      return;
    }

    
    Swal.fire({
    icon: "success",
    title: "Actividad Registrada",
    text: data.message || "Operación exitosa"
    });
     setCedula("");
  } catch (error) {
    console.log("Fetch error", error);
  }
};


  return (
    <div className="row m-2 pantalla_desktop">
      <div className="col-lg-6 text-white p-0 titulo_fondo_negro titulo_desktop">
        <h1>
          <img src={Logo} alt="" />
          <span translate="no"> GYM</span>
        </h1>
        <h1 translate="no" className="h1Abajo">STRIKE</h1>
      </div>

      <form
        className="col-lg-6 text-white p-0 login login-Desktop"
        onSubmit={handleSubmit}
      >
        <div className="datos">
          <p>INGRESE SU CEDULA</p>
          <input
            type="number"
            id="cedulaInput"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
          />
        </div>

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Ingreso;
