import { createContext, useState } from "react";

export const UsuarioContext = createContext(null);

const usuarioInicial = {
  nombre: "Manuelita",
  dni: "48753446",
  rol: "Estudiante",
  institucion: "Facultad de Ingeniería"
};

export const UsuarioProvider = ({ children }) => {

  const [usuario, setUsuario] = useState(usuarioInicial);

  const actualizarPerfil = (datos) => {
    setUsuario((prev) => ({
      ...prev,
      ...datos
    }));
  };

  return (
    <UsuarioContext.Provider value={{ usuario, actualizarPerfil }}>
      {children}
    </UsuarioContext.Provider>
  );
};