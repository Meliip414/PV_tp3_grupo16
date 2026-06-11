import { createContext, useState, useEffect } from "react";
export const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children }) => {

  const [usuarioActivo, setUsuarioActivo] = useState(() => {
      const usuarioGuardado = localStorage.getItem("usuarioActivo");

  if (usuarioGuardado) {
    return JSON.parse(usuarioGuardado);
  }

  return {
    nombre: "Manuelita",
    dni: "12345678",
    rol: "Estudiante",
    institucion: "Facultad de Ingeniería"
  };
});

useEffect(() => {
  localStorage.setItem(
    "usuarioActivo",
    JSON.stringify(usuarioActivo)
  );
}, [usuarioActivo]);

  const guardarSesion = (usuario) => {
    setUsuarioActivo(usuario);
  };

  const cerrarSesion = () => {
    setUsuarioActivo(null);
  };

  return (
    <UsuarioContext.Provider
      value={{
        usuarioActivo,
        guardarSesion,
        cerrarSesion
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};