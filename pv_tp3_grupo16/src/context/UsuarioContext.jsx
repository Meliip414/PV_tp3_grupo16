import { createContext, useState } from "react";

export const UsuarioContext = createContext(null);

const usuario = {
  nombre: "Manuelita",
  dni: "48753446",
  rol: "Estudiante",
  institucion: "Facultad de Ingeniería"
};

export const UsuarioProvider = ({ children }) => {

  const [usuarioActivo, setUsuarioActivo] = useState(null);

  const guardarSesion = () => {
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