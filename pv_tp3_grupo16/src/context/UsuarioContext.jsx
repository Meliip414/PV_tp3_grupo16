import { createContext, useState } from "react";
export const UsuarioContext = createContext(null);

export const UsuarioProvider = ({ children }) => {

  const [usuarioActivo, setUsuarioActivo] = useState(null);

  const guardarSesion = () => {
    setUsuarioActivo(usuarios);
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