import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MostrarCliente = () => {
  const [personal, setPersonal] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const obtenerPersonal = async () => {
      try {
        const response = await axios.get("https://sdf-czx7.onrender.com/api/getPersonal");
        setPersonal(response.data); // Se espera un array de objetos
      } catch (err) {
        setError("No se pudieron cargar los datos del personal.");
        console.error(err);
      }
    };

    obtenerPersonal();
  }, []);

  return (
    <div>
      <h2>Personal Registrado</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {personal.length > 0 ? (
        <ul>
          {personal.map((persona) => (
            <li key={persona.id}>
              <strong>Nombre:</strong> {persona.nombre?.trim() || "Sin nombre"}<br />
              <strong>Apellido:</strong> {persona.apellido?.trim() || "Sin apellido"}<br />
              <strong>Cédula:</strong> {persona.cedula || "Sin cédula"}<br />
              <strong>Rol:</strong> {persona.rol || "Sin rol"}<br />
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        !error && <p>Cargando datos...</p>
      )}
    </div>
  );
};

export default MostrarCliente;
